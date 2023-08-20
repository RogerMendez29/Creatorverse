import { createClient } from "@supabase/supabase-js";

const URL = "https://hxsyeojpshdfjhazhmlt.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4c3llb2pwc2hkZmpoYXpobWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1NjIyNTEsImV4cCI6MjAwODEzODI1MX0.b-EE9GECPSiEC1nqKPtYIA0YnC4ll3mll8J7WB64-xQ";

export const supabase = createClient(URL, API_KEY);
