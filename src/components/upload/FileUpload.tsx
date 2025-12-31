'use client';

import { useState, useRef } from 'react';
import { Upload, X, FileText, Image as ImageIcon, CheckCircle, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  folder?: string;
  accept?: string;
  maxSize?: number; // in MB
  onUploadSuccess?: (url: string, key: string) => void;
  onUploadError?: (error: string) => void;
  label?: string;
  description?: string;
}

interface UploadedFile {
  url: string;
  key: string;
  fileName: string;
  fileSize: number;
  contentType: string;
}

export default function FileUpload({
  folder = 'documents',
  accept = 'image/*,.pdf',
  maxSize = 10,
  onUploadSuccess,
  onUploadError,
  label = 'Upload File',
  description = 'PDF, JPEG, PNG up to 10MB',
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (file: File) => {
    setError(null);
    setUploadedFile(null);

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      const errorMsg = `File size exceeds ${maxSize}MB limit`;
      setError(errorMsg);
      onUploadError?.(errorMsg);
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      setUploadedFile(data);
      onUploadSuccess?.(data.url, data.key);
    } catch (err: any) {
      const errorMsg = err.message || 'Upload failed';
      setError(errorMsg);
      onUploadError?.(errorMsg);
    } finally {
      setUploading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleRemove = () => {
    setUploadedFile(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      {!uploadedFile ? (
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition ${
            dragActive
              ? 'border-blue-500 bg-blue-50'
              : uploading
              ? 'border-gray-300 bg-gray-50'
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={(e) => e.target.files && handleFileChange(e.target.files[0])}
            disabled={uploading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />

          <div className="pointer-events-none">
            {uploading ? (
              <>
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Uploading...</p>
              </>
            ) : (
              <>
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-700 font-medium mb-1">
                  Drop your file here or click to browse
                </p>
                <p className="text-sm text-gray-500">{description}</p>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              {uploadedFile.contentType.startsWith('image/') ? (
                <ImageIcon className="w-8 h-8 text-green-600" />
              ) : (
                <FileText className="w-8 h-8 text-green-600" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Upload Successful</span>
              </div>
              <p className="text-sm text-gray-700 truncate">{uploadedFile.fileName}</p>
              <p className="text-xs text-gray-500">{formatFileSize(uploadedFile.fileSize)}</p>
            </div>
            <button
              onClick={handleRemove}
              className="flex-shrink-0 p-1 hover:bg-green-100 rounded transition"
              title="Remove file"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-3 flex items-start gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
