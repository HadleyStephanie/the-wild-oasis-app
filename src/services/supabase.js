import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tzjdnovwixteyjxkldub.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6amRub3Z3aXh0ZXlqeGtsZHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2NTczNzUsImV4cCI6MjAwODIzMzM3NX0.o3U1PlUUbGFvhArgRPwQWd05JOUgVtGee8gUzVosNxA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
