"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const RouteTransitionContext = createContext(null);

export function RouteTransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [transition, setTransition] = useState(null);
  const timers = useRef([]);
  const previousPath = useRef(pathname);
  const pendingAnchor = useRef(null);

  const clearTimers = () => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  };

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      const targetHash = pendingAnchor.current;
      pendingAnchor.current = null;

      if (!targetHash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }

      window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(targetHash.slice(1)))?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.dispatchEvent(
          new CustomEvent("promise:anchor-arrived", {
            detail: { hash: targetHash },
          }),
        );
      });
    }
  }, [pathname]);

  useEffect(() => clearTimers, []);

  const navigate = useCallback((href, label, element) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targetUrl = new URL(href, window.location.href);
    const targetHash = targetUrl.hash;
    const announceAnchorArrival = () => {
      window.dispatchEvent(
        new CustomEvent("promise:anchor-arrived", {
          detail: { hash: targetHash },
        }),
      );
    };

    if (targetHash) {
      const scrollToAnchor = () => {
        const target = document.getElementById(decodeURIComponent(targetHash.slice(1)));
        if (!target) return false;
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        announceAnchorArrival();
        return true;
      };

      clearTimers();
      setTransition(null);

      if (targetUrl.pathname === window.location.pathname) {
        window.history.pushState(null, "", `${targetUrl.pathname}${targetUrl.search}${targetHash}`);
        scrollToAnchor();
        return;
      }

      pendingAnchor.current = targetHash;
      router.push(`${targetUrl.pathname}${targetUrl.search}${targetHash}`);
      return;
    }

    if (reduceMotion) {
      router.push(href);
      return;
    }

    clearTimers();

    const rect = element?.getBoundingClientRect();
    const originX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const originY = rect ? rect.top + rect.height / 2 : 90;

    setTransition({
      phase: "fly",
      label,
      originX,
      originY,
      logo: href.startsWith("/chic-blooms") ? "/images/logochicblooms.png" : "/images/logo.png",
      chic: href.startsWith("/chic-blooms"),
    });

    timers.current.push(
      window.setTimeout(() => {
        setTransition((current) => (current ? { ...current, phase: "open" } : current));
      }, 560),
    );
    timers.current.push(window.setTimeout(() => router.push(href), 920));
    timers.current.push(
      window.setTimeout(() => {
        setTransition((current) => (current ? { ...current, phase: "reveal" } : current));
      }, 1240),
    );
    timers.current.push(
      window.setTimeout(() => {
        setTransition((current) => (current ? { ...current, phase: "fade" } : current));
      }, 1620),
    );
    timers.current.push(window.setTimeout(() => setTransition(null), 1980));
  }, [router]);

  useEffect(() => {
    document.documentElement.classList.add("route-transition-ready");
    return () => document.documentElement.classList.remove("route-transition-ready");
  }, []);

  useEffect(() => {
    const onDocumentClick = (event) => {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (typeof event.button === "number" && event.button !== 0) return;

      const target = event.target instanceof Element ? event.target : event.target?.parentElement;
      const anchor = target?.closest?.("a[href]");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (!url.pathname.startsWith("/")) return;

      event.preventDefault();
      navigate(`${url.pathname}${url.search}${url.hash}`, anchor.textContent?.trim() || "Promise Event", anchor);
    };

    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, [navigate]);

  const value = useMemo(() => ({ navigate }), [navigate]);

  return (
    <RouteTransitionContext.Provider value={value}>
      {children}
      {transition ? (
        <div
          className={`page-transition is-${transition.phase}${transition.chic ? " is-chic" : ""}`}
          style={{
            "--letter-origin-x": `${transition.originX}px`,
            "--letter-origin-y": `${transition.originY}px`,
          }}
          aria-hidden="true"
        >
          <div className="transition-veil" />
          <div className="transition-logo">
            <span className="transition-logo__halo" />
            <img src={transition.logo} alt="" />
          </div>
        </div>
      ) : null}
    </RouteTransitionContext.Provider>
  );
}

export function TransitionLink({ href, children, className, onNavigate, ...props }) {
  const context = useContext(RouteTransitionContext);

  const handleClick = (event) => {
    props.onClick?.(event);
    if (event.defaultPrevented) {
      onNavigate?.();
      return;
    }
    const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    const isNonPrimaryClick = typeof event.button === "number" && event.button !== 0;
    if (isModifiedClick || isNonPrimaryClick) return;
    if (!context || !href?.startsWith("/")) return;

    event.preventDefault();
    onNavigate?.();
    context.navigate(href, typeof children === "string" ? children : props["aria-label"] || "Promise Event", event.currentTarget);
  };

  return (
    <a className={className} href={href} {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
