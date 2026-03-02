import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = {
      full_name: body.full_name ?? body.name ?? "",
      email: body.email ?? "",
      phone: body.phone ?? null,
      company: body.company ?? null,
      service: body.service ?? null,
      message: body.message ?? null,
      utm_source: body.utm_source ?? null,
      utm_campaign: body.utm_campaign ?? null,
      utm_content: body.utm_content ?? null,
    };

    if (!payload.full_name || !payload.email) {
      return NextResponse.json({ error: "Missing full_name/email" }, { status: 400 });
    }

    const { error } = await supabase.from("automation_leads").insert([payload]);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status: 500 });
  }
}
