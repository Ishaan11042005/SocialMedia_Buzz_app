import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://gzjuzdfcsyxxakhiylkp.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6anV6ZGZjc3l4eGFraGl5bGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNTI5NjQsImV4cCI6MjA2NzcyODk2NH0.xsSV3QdlATLDazW4lW2-MQyZgr7CZzV63kCMz_HppK0";

export const supabase = createClient(supabaseURL, supabaseAnonKey);
