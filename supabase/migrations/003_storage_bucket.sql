-- Storage bucket setup for project images
-- Run this AFTER the RLS policies

-- Create the storage bucket for project images
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-images', 'project-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
-- Anyone can view images (public bucket)
DROP POLICY IF EXISTS "Public can view project images" ON storage.objects;
CREATE POLICY "Public can view project images" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'project-images');

-- Only admins can upload images
DROP POLICY IF EXISTS "Admins can upload project images" ON storage.objects;
CREATE POLICY "Admins can upload project images" ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'project-images'
    AND EXISTS (
      SELECT 1 FROM admin_users
      WHERE user_id = auth.uid()
    )
  );

-- Only admins can update images
DROP POLICY IF EXISTS "Admins can update project images" ON storage.objects;
CREATE POLICY "Admins can update project images" ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'project-images'
    AND EXISTS (
      SELECT 1 FROM admin_users
      WHERE user_id = auth.uid()
    )
  );

-- Only admins can delete images
DROP POLICY IF EXISTS "Admins can delete project images" ON storage.objects;
CREATE POLICY "Admins can delete project images" ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'project-images'
    AND EXISTS (
      SELECT 1 FROM admin_users
      WHERE user_id = auth.uid()
    )
  );
