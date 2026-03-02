"use client";

import { useMemo, useState } from "react";

const serviceOptions = [
  { value: "zoho-crm", label: "Zoho CRM Implementation" },
  { value: "workflow", label: "Workflow / Process Automation" },
  { value: "n8n", label: "n8n Automation / Integrations" },
  { value: "ai-automation", label: "AI Agent Development" },
  { value: "b2b", label: "B2B Operations Automation" },
  { value: "other", label: "Other / Not sure yet" },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const utm = useMemo(() => {
    if (typeof window === "undefined") return {};
    const p = new URLSearchParams(window.location.search);
    return {
      utm_source: p.get("utm_source") || null,
      utm_campaign: p.get("utm_campaign") || null,
      utm_content: p.get("utm_content") || null,
    };
  }, []);

  
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;   // store reference BEFORE async

    setLoading(true);
    setOk(false);
    setErr(null);

    const fd = new FormData(form);

    const payload = {
      full_name: String(fd.get("full_name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      service: String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
      ...utm,
    };

    try {
      const r = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      });

      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j?.error || "Could not submit");

      setOk(true);
      form.reset();   // ✅ now safe
    } catch (e: any) {
      setErr(e?.message || "Could not submit");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Get in touch</p>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to automate <span className="italic text-slate-200">your operations?</span>
            </h2>
            <p className="mt-4 text-slate-300">
              Tell us about your business and goals. We respond within 24 hours with a tailored plan—no generic proposals.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3"><span className="w-7 text-center">✉</span> hello@valenzaai.com</div>
              <div className="flex items-center gap-3"><span className="w-7 text-center">📍</span> Pune, Maharashtra, India</div>
              <div className="flex items-center gap-3"><span className="w-7 text-center">🕐</span> Mon–Sat · 9am–7pm IST</div>
              <div className="flex items-center gap-3"><span className="w-7 text-center">💬</span> WhatsApp available for quick queries</div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
            {ok && (
              <div className="mb-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                ✓ Message received. We’ll respond within 24 hours.
              </div>
            )}
            {err && (
              <div className="mb-4 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {err}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Full Name" name="full_name" required />
                <Field label="Email" name="email" type="email" required />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Phone (optional)" name="phone" />
                <Field label="Company (optional)" name="company" />
              </div>

              <div>
                <label className="text-xs text-slate-300">Service Interested In</label>
                <select
                  name="service"
                  defaultValue={serviceOptions[0].value}
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm outline-none focus:border-blue-400/60"
                >
                  {serviceOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-300">Tell Us About Your Project</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm outline-none focus:border-blue-400/60"
                  placeholder="What do you want to automate? What tools do you use today?"
                />
              </div>

              <button
                disabled={loading}
                className="w-full rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
              <p className="text-xs text-slate-400">We typically respond within 4–8 business hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs text-slate-300">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm outline-none focus:border-blue-400/60"
      />
    </div>
  );
}
