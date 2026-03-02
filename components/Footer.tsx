export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">Valenza</div>
          <p className="mt-2 text-sm text-slate-300">
            AI automation consultancy focused on Zoho CRM, n8n integrations, and end-to-end process automation.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-200">Services</div>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li>Zoho CRM Setup & Automation</li>
            <li>n8n Workflow Automation</li>
            <li>Process Automation & SOPs</li>
            <li>Integrations (API/Webhooks)</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-200">Contact</div>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li>hello@valenzaai.com</li>
            <li>Pune, Maharashtra, India</li>
            <li>Mon–Sat · 9am–7pm IST</li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Valenza. All rights reserved.
      </div>
    </footer>
  );
}
