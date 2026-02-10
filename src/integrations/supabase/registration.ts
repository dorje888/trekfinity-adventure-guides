import { supabase } from "./client";

export type RegistrationPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  country?: string;
  interestedTrek?: string;
  preferredDate?: string; // yyyy-mm-dd
  groupSize?: string; // may contain ranges like "2-4", "9+"
  message?: string;
};

const trekLabelMap: Record<string, string> = {
  "everest-base-camp": "Everest Base Camp Trek",
  "annapurna-circuit": "Annapurna Circuit Trek",
  "langtang-valley": "Langtang Valley Trek",
  "manaslu-circuit": "Manaslu Circuit Trek",
  "upper-mustang": "Upper Mustang Trek",
  "gokyo-lakes": "Gokyo Lakes Trek",
  "custom": "Custom Trek",
};

function parseGroupSize(value?: string): number | null {
  if (!value) return null;
  if (/^\d+$/.test(value)) return parseInt(value, 10);
  if (/^\d+\+$/i.test(value)) return parseInt(value, 10);
  const m = value.match(/^(\d+)-(\d+)$/);
  if (m) return parseInt(m[1], 10); // use the lower bound
  return null;
}

export async function saveRegistration(payload: RegistrationPayload) {
  const full_name = `${payload.firstName} ${payload.lastName}`.trim();
  const trek_name = trekLabelMap[payload.interestedTrek ?? ""] ?? payload.interestedTrek ?? "General Inquiry";
  const group_size = parseGroupSize(payload.groupSize ?? undefined);

  const { data, error } = await supabase
    .from("bookings")
    .insert({
      full_name,
      email: payload.email,
      phone: payload.phone ?? null,
      country: payload.country ?? null,
      trek_name: trek_name || "General Inquiry",
      preferred_date: payload.preferredDate || null,
      group_size,
      special_requirements: payload.message ?? null,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function listRegistrations() {
  const { data, error } = await supabase
    .from("bookings")
    .select("id, full_name, email, phone, country, trek_name, preferred_date, group_size, created_at")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}
