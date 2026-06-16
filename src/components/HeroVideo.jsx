"use client";

import { useEffect, useRef, useState } from "react";
import CloudflareStream from "./CloudflareStream";

const CUSTOMER_CODE = "customer-8z1yg93quaaa9ooh";

export default function HeroVideo({ videoId }) {
  const videoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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

    const markReady = () => {
      setIsReady(true);
      startVideo();
    };

    video.load();
    startVideo();

    const retryAutoplay = window.setInterval(startVideo, 450);
    const stopRetry = window.setTimeout(() => window.clearInterval(retryAutoplay), 6500);
    video.addEventListener("loadedmetadata", startVideo);
    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);
    video.addEventListener("playing", markReady);
    window.addEventListener("pageshow", startVideo);
    document.addEventListener("visibilitychange", startVideo);
    document.addEventListener("pointerdown", startVideo, { once: true });
    document.addEventListener("touchstart", startVideo, { once: true });

    return () => {
      active = false;
      window.clearInterval(retryAutoplay);
      window.clearTimeout(stopRetry);
      video.removeEventListener("loadedmetadata", startVideo);
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("playing", markReady);
      window.removeEventListener("pageshow", startVideo);
      document.removeEventListener("visibilitychange", startVideo);
      document.removeEventListener("pointerdown", startVideo);
      document.removeEventListener("touchstart", startVideo);
    };
  }, []);

  return (
    <>
      <CloudflareStream videoId={videoId} title="" className="hero-video__iframe" />
      <video
        ref={videoRef}
        className={`hero-video__native${isReady ? " is-ready" : ""}`}
        autoPlay
        muted
        defaultMuted
        playsInline
        loop
        preload="auto"
        aria-hidden="true"
        controls={false}
        disablePictureInPicture
      >
        <source
          src={`https://${CUSTOMER_CODE}.cloudflarestream.com/${videoId}/downloads/default.mp4`}
          type="video/mp4"
        />
        <source
          src={`https://videodelivery.net/${videoId}/downloads/default.mp4`}
          type="video/mp4"
        />
        <source
          src={`https://${CUSTOMER_CODE}.cloudflarestream.com/${videoId}/manifest/video.m3u8`}
          type="application/vnd.apple.mpegurl"
        />
        <source
          src={`https://videodelivery.net/${videoId}/manifest/video.m3u8`}
          type="application/vnd.apple.mpegurl"
        />
      </video>
    </>
  );
}
