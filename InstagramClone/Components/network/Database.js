import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://htmqwtumadnabykeheop.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0bXF3dHVtYWRuYWJ5a2VoZW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwMDA5MzQsImV4cCI6MjAyNDU3NjkzNH0.H9jZdgZry4jsM-oO8skJlWfT_9V9VALO3dpHQ6dURh0'
const supabase = createClient(supabaseUrl, supabaseKey)

export  default function Database(){

return supabase
}