"use client";

export default function AdminClient({ leads }: { leads: any[] }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>

        <button
          onClick={async () => {
            await fetch("/api/admin-logout");
            window.location.href = "/admin-login";
          }}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid gap-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-slate-900 p-4 rounded-xl border border-white/10"
          >
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">{lead.full_name}</div>
                <div className="text-sm text-slate-400">{lead.email}</div>
                <div className="text-xs text-blue-400">{lead.service}</div>
              </div>
              <div className="text-xs text-slate-400">
                {new Date(lead.created_at).toLocaleString()}
              </div>
            </div>

            <div className="mt-3 text-sm text-slate-300">
              {lead.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}