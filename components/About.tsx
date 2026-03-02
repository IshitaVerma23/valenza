export default function About() {
  return (
    <section id="about" className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Two Businesses. One Vision.</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          What <span className="text-slate-200 italic">Valenza</span> builds
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          We keep <span className="text-white">Automation</span> and <span className="text-white">Education</span> separate. This site is for
          Valenza Automation — implementation-first systems that plug into your CRM and ops.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card num="01" title="Valenza Automation" tag="AI & Workflow Consultancy"
            body="Zoho CRM + n8n + process automation. Build pipelines, integrations, dashboards, and AI assistants for your team." />
          <Card num="02" title="Valenza Education" tag="Training Division (separate)"
            body="Workshops and courses for teams who want to learn automation and AI—hosted on a dedicated Education site." />
        </div>
      </div>
    </section>
  );
}

function Card({ num, title, tag, body }: { num: string; title: string; tag: string; body: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft">
      <div className="flex items-start justify-between">
        <div className="text-xs font-semibold text-blue-300">{num}</div>
        <div className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-300">{tag}</div>
      </div>
      <div className="mt-4 text-xl font-semibold">{title}</div>
      <p className="mt-2 text-sm text-slate-300">{body}</p>
    </div>
  );
}
