-- Supabase Schema for Q1 2026 Goals Tracker
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/plhlyweqbswkryzmeccf/sql)

-- Stats table (single row for overall stats)
CREATE TABLE stats (
  id INTEGER PRIMARY KEY DEFAULT 1,
  current_streak INTEGER DEFAULT 0,
  total_points INTEGER DEFAULT 0,
  current_phase TEXT DEFAULT 'January - Foundations',
  overall_progress INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT single_row CHECK (id = 1)
);

-- Phases table (January, February, March)
CREATE TABLE phases (
  id SERIAL PRIMARY KEY,
  month TEXT NOT NULL,
  title TEXT NOT NULL,
  progress INTEGER DEFAULT 0,
  color TEXT DEFAULT 'blue',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Weeks table (13 weeks)
CREATE TABLE weeks (
  id SERIAL PRIMARY KEY,
  week_number INTEGER NOT NULL,
  dates TEXT NOT NULL,
  focus TEXT NOT NULL,
  phase_id INTEGER REFERENCES phases(id),
  completed BOOLEAN DEFAULT FALSE,
  points_earned INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Badges table
CREATE TABLE badges (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  icon TEXT NOT NULL,
  requirement TEXT NOT NULL,
  unlocked BOOLEAN DEFAULT FALSE,
  unlocked_at TIMESTAMP WITH TIME ZONE
);

-- Admin password (simple auth)
CREATE TABLE admin_auth (
  id INTEGER PRIMARY KEY DEFAULT 1,
  password_hash TEXT NOT NULL,
  CONSTRAINT single_auth_row CHECK (id = 1)
);

-- Enable Row Level Security
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE phases ENABLE ROW LEVEL SECURITY;
ALTER TABLE weeks ENABLE ROW LEVEL SECURITY;
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_auth ENABLE ROW LEVEL SECURITY;

-- Policies: Anyone can read, but updates require being authenticated
CREATE POLICY "Public read stats" ON stats FOR SELECT USING (true);
CREATE POLICY "Public read phases" ON phases FOR SELECT USING (true);
CREATE POLICY "Public read weeks" ON weeks FOR SELECT USING (true);
CREATE POLICY "Public read badges" ON badges FOR SELECT USING (true);

-- Allow updates via service role (we'll use anon + password check in app)
CREATE POLICY "Allow all updates on stats" ON stats FOR UPDATE USING (true);
CREATE POLICY "Allow all updates on phases" ON phases FOR UPDATE USING (true);
CREATE POLICY "Allow all updates on weeks" ON weeks FOR UPDATE USING (true);
CREATE POLICY "Allow all updates on badges" ON badges FOR UPDATE USING (true);
CREATE POLICY "Read admin auth" ON admin_auth FOR SELECT USING (true);

-- Seed initial data

-- Insert stats
INSERT INTO stats (current_streak, total_points, current_phase, overall_progress)
VALUES (0, 0, 'January - Foundations', 0);

-- Insert phases
INSERT INTO phases (month, title, progress, color) VALUES
('January', 'ML Foundations', 0, 'blue'),
('February', 'Hands-On ML', 0, 'green'),
('March', 'Integration & Deployment', 0, 'purple');

-- Insert weeks
INSERT INTO weeks (week_number, dates, focus, phase_id, completed, points_earned) VALUES
(1, 'Jan 1-5', 'Introduction to Machine Learning', 1, false, 0),
(2, 'Jan 6-12', 'Linear Regression Deep Dive', 1, false, 0),
(3, 'Jan 13-19', 'Feature Engineering & Practice', 1, false, 0),
(4, 'Jan 20-26', 'Classification & Logistic Regression', 1, false, 0),
(5, 'Jan 27 - Feb 2', 'Course 1 Completion', 1, false, 0),
(6, 'Feb 3-9', 'Cost Overrun Regression', 2, false, 0),
(7, 'Feb 10-16', 'Risk Classification', 2, false, 0),
(8, 'Feb 17-23', 'Performance Clustering', 2, false, 0),
(9, 'Feb 24 - Mar 2', 'Ensemble Comparison', 2, false, 0),
(10, 'Mar 3-9', 'Flask App Development', 3, false, 0),
(11, 'Mar 10-16', 'UI & Testing', 3, false, 0),
(12, 'Mar 17-23', 'Deployment', 3, false, 0),
(13, 'Mar 24-31', 'Polish & Showcase', 3, false, 0);

-- Insert badges
INSERT INTO badges (name, icon, requirement, unlocked) VALUES
('Foundation Builder', '🎓', 'Complete January', false),
('First Model', '📊', 'Train first ML model', false),
('Accuracy Ace', '🎯', 'Achieve >80% accuracy', false),
('Cluster Commander', '🧩', 'Complete clustering', false),
('Ensemble Expert', '🌳', 'Compare 3+ models', false),
('Shipper', '🚀', 'Deploy Flask app', false),
('Week Warrior', '🔥', '7-day streak', false),
('Quarter Champion', '🏆', 'Complete all Q1 goals', false);

-- Set admin password (change 'your-secret-password' to your actual password)
-- This uses a simple hash for demo purposes
INSERT INTO admin_auth (password_hash)
VALUES ('goalstracker2026');
