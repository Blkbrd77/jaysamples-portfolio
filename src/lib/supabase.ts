import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions
export interface Stats {
  id: number;
  current_streak: number;
  total_points: number;
  current_phase: string;
  overall_progress: number;
  updated_at: string;
}

export interface Phase {
  id: number;
  month: string;
  title: string;
  progress: number;
  color: string;
  updated_at: string;
}

export interface Week {
  id: number;
  week_number: number;
  dates: string;
  focus: string;
  phase_id: number;
  completed: boolean;
  points_earned: number;
  updated_at: string;
}

export interface Badge {
  id: number;
  name: string;
  icon: string;
  requirement: string;
  unlocked: boolean;
  unlocked_at: string | null;
}

// Fetch functions
export async function getStats(): Promise<Stats | null> {
  const { data, error } = await supabase
    .from('stats')
    .select('*')
    .single();

  if (error) {
    console.error('Error fetching stats:', error);
    return null;
  }
  return data;
}

export async function getPhases(): Promise<Phase[]> {
  const { data, error } = await supabase
    .from('phases')
    .select('*')
    .order('id');

  if (error) {
    console.error('Error fetching phases:', error);
    return [];
  }
  return data || [];
}

export async function getWeeks(): Promise<Week[]> {
  const { data, error } = await supabase
    .from('weeks')
    .select('*')
    .order('week_number');

  if (error) {
    console.error('Error fetching weeks:', error);
    return [];
  }
  return data || [];
}

export async function getBadges(): Promise<Badge[]> {
  const { data, error } = await supabase
    .from('badges')
    .select('*')
    .order('id');

  if (error) {
    console.error('Error fetching badges:', error);
    return [];
  }
  return data || [];
}

// Update functions (used by admin)
export async function updateStats(updates: Partial<Stats>): Promise<boolean> {
  const { error } = await supabase
    .from('stats')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', 1);

  return !error;
}

export async function updatePhase(id: number, progress: number): Promise<boolean> {
  const { error } = await supabase
    .from('phases')
    .update({ progress, updated_at: new Date().toISOString() })
    .eq('id', id);

  return !error;
}

export async function updateWeek(id: number, completed: boolean, points_earned: number): Promise<boolean> {
  const { error } = await supabase
    .from('weeks')
    .update({ completed, points_earned, updated_at: new Date().toISOString() })
    .eq('id', id);

  return !error;
}

export async function updateBadge(id: number, unlocked: boolean): Promise<boolean> {
  const { error } = await supabase
    .from('badges')
    .update({
      unlocked,
      unlocked_at: unlocked ? new Date().toISOString() : null,
    })
    .eq('id', id);

  return !error;
}

// Admin auth check
export async function verifyPassword(password: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('admin_auth')
    .select('password_hash')
    .single();

  if (error || !data) return false;
  return data.password_hash === password;
}
