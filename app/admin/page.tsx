import { createClient } from "@supabase/supabase-js";
import AdminClient from "./AdminClient";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function AdminPage() {
  const { data } = await supabase
    .from("automation_leads")
    .select("*")
    .order("created_at", { ascending: false });

  return <AdminClient leads={data || []} />;
}