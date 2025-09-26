"use client";
import { useEffect } from "react";

export default function CalendlyInline({
    url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/saranochir-s/30min",
    prefillName,
    prefillEmail,
    height = 720,
}: {
    url?: string;
    prefillName?: string;
    prefillEmail?: string;
    height?: number;
}) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.onload = () => {
      console.log("Calendly script loaded successfully");
    };
    s.onerror = () => {
      console.error("Failed to load Calendly script");
    };
    document.body.appendChild(s);
    return () => {
      if (document.body.contains(s)) {
        document.body.removeChild(s);
      }
    };
  }, []);

    const params = new URLSearchParams({
        hide_gdpr_banner: "1",
        ...(prefillName ? { "prefill[name]": prefillName } : {}),
        ...(prefillEmail ? { "prefill[email]": prefillEmail } : {}),
    }).toString();

    return (
        <div
            id="calendly-inline-widget"
            data-url={`${url}?${params}`}
            style={{ minWidth: "320px", height }}
            className="w-full rounded-2xl border border-zinc-800/40 dark:border-zinc-700/40 bg-white dark:bg-zinc-900 overflow-hidden"
        />
    );
}
