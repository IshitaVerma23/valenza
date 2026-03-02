const items = [
  "AI Workflow Automation",
  "Zoho CRM Integration",
  "n8n Orchestration",
  "Intelligent Agent Design",
  "B2B Operations Automation",
  "No‑Code + API Systems",
  "Dashboards & Reporting",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-white/10 bg-slate-950/60">
      <div className="overflow-hidden">
        <div className="ticker-track flex w-[200%] gap-10 py-4 px-6">
          {doubled.map((t, i) => (
            <div key={i} className="whitespace-nowrap text-xs tracking-wide text-slate-300">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
