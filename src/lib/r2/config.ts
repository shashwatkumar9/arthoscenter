import { S3Client } from '@aws-sdk/client-s3';

// Cloudflare R2 is S3-compatible
export const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
});

export const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || 'arthoscenter-files';
export const R2_PUBLIC_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL || '';

// File size limits (in bytes)
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// Allowed file types
export const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const ALLOWED_DOCUMENT_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
  ...ALLOWED_IMAGE_TYPES,
];

// Folder structure
export const R2_FOLDERS = {
  DOCUMENTS: 'documents',
  XRAYS: 'xrays',
  MRI: 'mri',
  CT_SCANS: 'ct-scans',
  REPORTS: 'reports',
  PRESCRIPTIONS: 'prescriptions',
  BLOG_IMAGES: 'blog',
  AVATARS: 'avatars',
} as const;
