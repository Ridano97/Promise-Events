"use client";

import { useEffect, useId, useRef } from "react";

const SDK_URL = "https://embed.cloudflarestream.com/embed/sdk.latest.js";

let sdkPromise;

function loadStreamSdk() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.Stream) return Promise.resolve(window.Stream);
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${SDK_URL}"]`);
    const script = existing || document.createElement("script");

    script.addEventListener("load", () => resolve(window.Stream), { once: true });
    script.addEventListener("error", reject, { once: true });

    if (!existing) {
      script.src = SDK_URL;
      script.async = true;
      document.head.appendChild(script);
    }
  });

  return sdkPromise;
}

export default function CloudflareStream({ videoId, title, loading = "eager", className }) {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const id = useId().replaceAll(":", "");

  useEffect(() => {
    let active = true;

    const play = async () => {
      try {
        const Stream = await loadStreamSdk();
        if (!active || !Stream || !iframeRef.current) return;

        const player = playerRef.current || Stream(iframeRef.current);
        playerRef.current = player;
        player.muted = true;
        player.loop = true;
        await Promise.resolve(player.play());
      } catch {
        // Muted autoplay can still be deferred by a browser until the next user interaction.
      }
    };

    const resumeWhenVisible = () => {
      if (!document.hidden) play();
    };

    play();
    window.addEventListener("pageshow", play);
    document.addEventListener("visibilitychange", resumeWhenVisible);
    document.addEventListener("pointerdown", play, { once: true });

    return () => {
      active = false;
      window.removeEventListener("pageshow", play);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
      document.removeEventListener("pointerdown", play);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      className={className}
      id={`stream-${id}`}
      src={`https://customer-8z1yg93quaaa9ooh.cloudflarestream.com/${videoId}/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=auto`}
      title={title}
      loading={loading}
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      allowFullScreen
      onLoad={() => {
        const player = playerRef.current;
        if (!player) return;
        player.muted = true;
        Promise.resolve(player.play()).catch(() => {});
      }}
    />
  );
}
