const steps = [
  { num: "01", title: "Discover", desc: "We map your current workflow, tools, and bottlenecks." },
  { num: "02", title: "Design", desc: "We design a clean pipeline and decide what to automate first." },
  { num: "03", title: "Automate", desc: "We build workflows (Zoho + n8n + APIs) and test edge cases." },
  { num: "04", title: "Scale", desc: "We add dashboards, alerts, and documentation so it runs reliably." },
];

export default function Process() {
  return (
    <section id="process" className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Process</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">How we deliver in weeks—not quarters</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
              <div className="text-xs font-semibold text-blue-300">{s.num}</div>
              <div className="mt-3 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
