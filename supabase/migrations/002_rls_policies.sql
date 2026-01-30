-- Row Level Security Policies
-- Run this AFTER 001_initial_schema.sql

-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users
    WHERE user_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Projects policies
-- Public can view published projects
DROP POLICY IF EXISTS "Public can view published projects" ON projects;
CREATE POLICY "Public can view published projects" ON projects
  FOR SELECT
  USING (is_published = true);

-- Admins can do everything with projects
DROP POLICY IF EXISTS "Admins can view all projects" ON projects;
CREATE POLICY "Admins can view all projects" ON projects
  FOR SELECT
  USING (is_admin());

DROP POLICY IF EXISTS "Admins can insert projects" ON projects;
CREATE POLICY "Admins can insert projects" ON projects
  FOR INSERT
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can update projects" ON projects;
CREATE POLICY "Admins can update projects" ON projects
  FOR UPDATE
  USING (is_admin());

DROP POLICY IF EXISTS "Admins can delete projects" ON projects;
CREATE POLICY "Admins can delete projects" ON projects
  FOR DELETE
  USING (is_admin());

-- Project images policies
-- Public can view images of published projects
DROP POLICY IF EXISTS "Public can view images of published projects" ON project_images;
CREATE POLICY "Public can view images of published projects" ON project_images
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM projects
      WHERE projects.id = project_images.project_id
      AND projects.is_published = true
    )
  );

-- Admins can do everything with project images
DROP POLICY IF EXISTS "Admins can view all images" ON project_images;
CREATE POLICY "Admins can view all images" ON project_images
  FOR SELECT
  USING (is_admin());

DROP POLICY IF EXISTS "Admins can insert images" ON project_images;
CREATE POLICY "Admins can insert images" ON project_images
  FOR INSERT
  WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admins can update images" ON project_images;
CREATE POLICY "Admins can update images" ON project_images
  FOR UPDATE
  USING (is_admin());

DROP POLICY IF EXISTS "Admins can delete images" ON project_images;
CREATE POLICY "Admins can delete images" ON project_images
  FOR DELETE
  USING (is_admin());

-- Admin users policies
-- Only admins can view admin users
DROP POLICY IF EXISTS "Admins can view admin users" ON admin_users;
CREATE POLICY "Admins can view admin users" ON admin_users
  FOR SELECT
  USING (is_admin());

-- Only super admins could manage admin users (for now, handled via Supabase dashboard)
