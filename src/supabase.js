import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://amvrxmqetzmlniyrrlyc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdnJ4bXFldHptbG5peXJybHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwODU5OTIsImV4cCI6MjA2NjY2MTk5Mn0.zLWVgaILbQgn3k-JJJuu49E7nYSGdPBJxKiHEGEDV7k';

export const supabase = createClient(supabaseUrl, supabaseKey);