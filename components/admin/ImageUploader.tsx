"use client";

import { useCallback, useState } from "react";
import { Upload, Loader2, X, AlertCircle } from "lucide-react";
import {
  createSignedUploadUrl,
  createProjectImage,
} from "@/lib/actions/images";

interface ImageUploaderProps {
  projectId: string;
  onUploadComplete?: () => void;
}

export function ImageUploader({
  projectId,
  onUploadComplete,
}: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const uploadFile = async (file: File) => {
    // Validate file type
    if (!file.type.startsWith("image/")) {
      throw new Error("Only image files are allowed");
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      throw new Error("File size must be less than 10MB");
    }

    // Get signed upload URL
    const { signedUrl, storagePath } = await createSignedUploadUrl(
      projectId,
      file.name
    );

    // Upload to Supabase Storage
    const response = await fetch(signedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    // Create database record
    await createProjectImage(projectId, storagePath);
  };

  const handleFiles = async (files: FileList | File[]) => {
    setIsUploading(true);
    setError(null);
    setProgress(0);

    const fileArray = Array.from(files);
    const total = fileArray.length;
    let completed = 0;

    try {
      for (const file of fileArray) {
        await uploadFile(file);
        completed++;
        setProgress(Math.round((completed / total) * 100));
      }
      onUploadComplete?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setIsUploading(false);
      setProgress(0);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-gray-400"
        } ${isUploading ? "pointer-events-none opacity-50" : ""}`}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isUploading}
        />

        <div className="flex flex-col items-center gap-3">
          {isUploading ? (
            <>
              <Loader2 className="animate-spin text-blue-500" size={40} />
              <p className="text-gray-600">Uploading... {progress}%</p>
            </>
          ) : (
            <>
              <Upload className="text-gray-400" size={40} />
              <div>
                <p className="text-gray-600 font-medium">
                  Drop images here or click to upload
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  PNG, JPG, WebP up to 10MB each
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg">
          <AlertCircle size={20} />
          <span>{error}</span>
          <button
            onClick={() => setError(null)}
            className="ml-auto hover:bg-red-100 p-1 rounded"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
