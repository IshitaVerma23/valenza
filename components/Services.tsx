import { Bot, Workflow, Gauge, Cable, Database, ShieldCheck } from "lucide-react";

const services = [
  { icon: Workflow, title: "Zoho CRM Setup & Automation", desc: "Blueprints, workflows, validation, layouts, fields, and clean lead routing." },
  { icon: Cable, title: "n8n Workflow Automation", desc: "Integrations across apps via webhooks, scheduling, and reliable error handling." },
  { icon: Gauge, title: "Process Automation", desc: "SOP cleanup → automation design → rollout with measurable time-saved outcomes." },
  { icon: Bot, title: "AI Assistants for Ops", desc: "Internal agents to summarize, extract, route, and assist teams without chaos." },
  { icon: Database, title: "Dashboards & Reporting", desc: "Zoho Analytics or custom dashboards—track leads, revenue, and ops health." },
  { icon: ShieldCheck, title: "Secure Integrations", desc: "Token-safe deployments, least-privilege keys, and audit-friendly logging." },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-[.9fr_1.1fr]">
          <div className="md:sticky md:top-24 h-fit">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Automation that actually <span className="text-blue-400">ships</span>
            </h2>
            <p className="mt-4 text-slate-300">
              Pick a service and we’ll map your current workflow, propose an automation plan, and deploy it fast—with documentation.
            </p>
            <a href="#contact" className="mt-6 inline-flex rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400">
              Get a Free Audit →
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft hover:bg-white/10">
                <s.icon className="h-5 w-5 text-blue-300" />
                <div className="mt-3 text-base font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
