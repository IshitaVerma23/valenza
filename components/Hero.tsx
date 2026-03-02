export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 gridlines opacity-60" />
      <div className="absolute -top-24 left-[-140px] h-80 w-80 rounded-full bg-blue-500 glow" />
      <div className="absolute top-32 right-[-160px] h-96 w-96 rounded-full bg-indigo-500 glow" />
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-14 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-[1.25fr_.75fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              AI Automation & Intelligence
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Scale <span className="italic text-slate-200">smarter</span>,<br />
              <span className="text-blue-400">automate</span> all.
            </h1>

            <p className="mt-5 max-w-xl text-base text-slate-300">
              Valenza builds Zoho CRM workflows, n8n automations, and end-to-end B2B systems — eliminating busywork so your team can focus on growth that compounds.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-blue-400">
                Start a Project →
              </a>
              <a href="#about" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10">
                Explore Valenza
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
            <div className="grid gap-4">
              <Metric value="150+" label="Workflows Deployed" />
              <Metric value="3×" label="Avg. Efficiency Gain" />
              <Metric value="48h" label="Typical Onboarding" />
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">
              <div className="font-semibold text-slate-200">What you get</div>
              <ul className="mt-2 space-y-1">
                <li>• Clean dashboards + CRM hygiene</li>
                <li>• Automated lead routing + follow-ups</li>
                <li>• API / webhook integrations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 text-xs text-slate-400">
          <div className="h-px flex-1 bg-white/10" />
          Scroll to explore
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4">
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs text-slate-300">{label}</div>
    </div>
  );
}
