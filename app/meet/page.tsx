import CalendlyInline from "@/components/CalendlyInline";

export default function MeetPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-10">
            <h1 className="text-3xl font-semibold tracking-tight">Book a meeting</h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Pick a time that suits you.</p>
            <div className="mt-6">
                <CalendlyInline />
            </div>
        </main>
    );
}
