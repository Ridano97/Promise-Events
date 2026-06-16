"use client";

import { useEffect, useRef, useState } from "react";
import CloudflareStream from "./CloudflareStream";

const CUSTOMER_CODE = "customer-8z1yg93quaaa9ooh";

export default function HeroVideo({ videoId }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [useIframeFallback, setUseIframeFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsSupported = video.canPlayType("application/vnd.apple.mpegurl");
    if (!hlsSupported) {
      setUseIframeFallback(true);
      return;
    }

    let active = true;

    const startVideo = () => {
      if (!active) return;
      video.defaultMuted = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.play().catch(() => {
        // Some in-app browsers defer autoplay until the first user gesture.
      });
    };

    const markPlaying = () => setIsPlaying(true);

    video.load();
    startVideo();

    const retryAutoplay = window.setInterval(startVideo, 450);
    const stopRetry = window.setTimeout(() => window.clearInterval(retryAutoplay), 6500);

    video.addEventListener("loadedmetadata", startVideo);
    video.addEventListener("loadeddata", startVideo);
    video.addEventListener("canplay", startVideo);
    video.addEventListener("playing", markPlaying);
    window.addEventListener("pageshow", startVideo);
    document.addEventListener("visibilitychange", startVideo);
    document.addEventListener("pointerdown", startVideo, { once: true });
    document.addEventListener("touchstart", startVideo, { once: true });

    return () => {
      active = false;
      window.clearInterval(retryAutoplay);
      window.clearTimeout(stopRetry);
      video.removeEventListener("loadedmetadata", startVideo);
      video.removeEventListener("loadeddata", startVideo);
      video.removeEventListener("canplay", startVideo);
      video.removeEventListener("playing", markPlaying);
      window.removeEventListener("pageshow", startVideo);
      document.removeEventListener("visibilitychange", startVideo);
      document.removeEventListener("pointerdown", startVideo);
      document.removeEventListener("touchstart", startVideo);
    };
  }, []);

  if (useIframeFallback) {
    return <CloudflareStream videoId={videoId} title="" />;
  }

  return (
    <video
      ref={videoRef}
      className={`hero-video__native${isPlaying ? " is-playing" : ""}`}
      autoPlay
      muted
      defaultMuted
      playsInline
      loop
      preload="auto"
      poster="/images/url.jpg"
      aria-hidden="true"
    >
      <source
        src={`https://${CUSTOMER_CODE}.cloudflarestream.com/${videoId}/manifest/video.m3u8`}
        type="application/vnd.apple.mpegurl"
      />
    </video>
  );
}
