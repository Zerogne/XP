"use client";
import { Calendar, ArrowRight } from "lucide-react";

type Props = {
    url?: string;
    label?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "outline";
};

export default function CalendlyButton({
    url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/saranochir-s/30min",
    label = "Book a call",
    className = "",
    size = "md",
    variant = "primary",
}: Props) {
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-3 text-base",
        lg: "px-6 py-4 text-lg"
    };

    const variantClasses = {
        primary: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:from-indigo-600 hover:to-purple-700",
        secondary: "bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:shadow-lg hover:from-gray-600 hover:to-gray-700",
        outline: "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md"
    };

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

    // If custom className is provided, use it instead of default styling
    const buttonClasses = className
        ? `${className} group`
        : `inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-300 hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 group ${sizeClasses[size]} ${variantClasses[variant]}`;

    return (
        <button
            onClick={open}
            className={`${buttonClasses} px-8`}
        >
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">{label}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
        </button>
    );
}
