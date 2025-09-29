"use client";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonCardProps {
    icon: ReactNode;
    text: string;
    onClick: () => void;
    className?: string;
}

export default function ButtonCard({
    icon,
    text,
    onClick,
    className = ""
}: ButtonCardProps) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-between p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 ${className}`}
        >
            <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                    {icon}
                </div>
                <span className="font-medium text-gray-700 whitespace-nowrap">
                    {text}
                </span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
        </button>
    );
}
