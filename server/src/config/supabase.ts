import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://geyvxypcyshjunconxlz.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdleXZ4eXBjeXNoanVuY29ueGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NTg0MjksImV4cCI6MjA0MjMzNDQyOX0.o6IQXWIOXVK-7giR4xQE9n8yu_wFLFF2l5777YiCazY';

export const supabase = createClient(supabaseUrl, supabaseKey);
