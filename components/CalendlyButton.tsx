"use client";

type Props = {
    url?: string;
    label?: string;
    className?: string;
};

export default function CalendlyButton({
    url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/saranochir-s/30min",
    label = "Book a call",
    className = "",
}: Props) {

    const open = () => {
        // Track analytics event
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "calendly_redirect", {
                location: window.location.pathname
            });
        }

        // Redirect to Calendly booking page
        window.open(`${url}?hide_gdpr_banner=1`, '_blank');
    };

    return (
        <button
            onClick={open}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium shadow-sm bg-gradient-to-r from-indigo-500 to-violet-500 text-white transition hover:translate-y-[-1px] ${className}`}
        >
            {label} <span aria-hidden>→</span>
        </button>
    );
}
