"use client";

import { useFileUpload } from "@/hooks/use-file-upload";
import { AlertCircleIcon, ImageUpIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface SingleImageUploaderProps {
  onChange: (file: File | null) => void;
  initialImageUrl?: string;
  inputId?: string;
  maxSizeMB?: number;
}

export default function SingleImageUploader({
  onChange,
  initialImageUrl,
  inputId,
  maxSizeMB = 5,
}: SingleImageUploaderProps) {
  const maxSize = maxSizeMB * 1024 * 1024;

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/*",
    maxSize,
  });

  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  /**
   * Send file ONLY when user selects a new one
   * (Do NOT send null automatically — prevents accidental delete)
   */
  useEffect(() => {
    if (files.length > 0) {
      const file = files[0].file;

      if (file instanceof File) {
        onChange(file);
      }
    }
  }, [files, onChange]);

  /**
   * Preview priority:
   * 1. Newly uploaded image
   * 2. Existing image (edit mode)
   */
  const previewUrl = files[0]?.preview || initialImageUrl || null;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className="relative flex min-h-52 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-input p-4 transition-colors hover:bg-accent/50 data-[dragging=true]:bg-accent/50"
        >
          <input {...getInputProps()} className="sr-only" />

          {!inputId && (
            <input ref={hiddenInputRef} type="file" className="hidden" />
          )}

          {previewUrl ? (
            <Image
              src={previewUrl}
              width={400}
              height={300}
              priority
              unoptimized
              alt="Event cover image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 flex size-11 items-center justify-center rounded-full border bg-background">
                <ImageUpIcon className="size-4 opacity-60" />
              </div>
              <p className="text-sm font-medium">
                Drop image here or click to upload
              </p>
              <p className="text-xs text-muted-foreground">
                Max size {maxSizeMB}MB
              </p>
            </div>
          )}
        </div>

        {previewUrl && (
          <button
            type="button"
            className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
            onClick={() => {
              if (files[0]) removeFile(files[0].id);
              onChange(null); // user explicitly removes image
            }}
          >
            <XIcon className="size-4" />
          </button>
        )}
      </div>

      {errors.length > 0 && (
        <div className="flex items-center gap-1 text-xs text-destructive">
          <AlertCircleIcon className="size-3" />
          {errors[0]}
        </div>
      )}
    </div>
  );
}
