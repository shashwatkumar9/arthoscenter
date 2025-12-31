import { PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { r2Client, R2_BUCKET_NAME, R2_PUBLIC_URL } from './config';

export interface UploadFileOptions {
  file: Buffer;
  fileName: string;
  folder: string;
  contentType: string;
}

export interface UploadResult {
  success: boolean;
  url?: string;
  key?: string;
  error?: string;
}

/**
 * Upload a file to Cloudflare R2
 */
export async function uploadFile({
  file,
  fileName,
  folder,
  contentType,
}: UploadFileOptions): Promise<UploadResult> {
  try {
    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const key = `${folder}/${timestamp}-${randomString}-${sanitizedFileName}`;

    // Upload to R2
    const command = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: file,
      ContentType: contentType,
      // Make file publicly accessible (configure R2 bucket settings)
      // CacheControl: 'public, max-age=31536000',
    });

    await r2Client.send(command);

    // Construct public URL
    const url = `${R2_PUBLIC_URL}/${key}`;

    return {
      success: true,
      url,
      key,
    };
  } catch (error) {
    console.error('R2 upload error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed',
    };
  }
}

/**
 * Delete a file from Cloudflare R2
 */
export async function deleteFile(key: string): Promise<boolean> {
  try {
    const command = new DeleteObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
    });

    await r2Client.send(command);
    return true;
  } catch (error) {
    console.error('R2 delete error:', error);
    return false;
  }
}

/**
 * Get file extension from filename
 */
export function getFileExtension(filename: string): string {
  const parts = filename.split('.');
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : '';
}

/**
 * Validate file type
 */
export function isValidFileType(contentType: string, allowedTypes: string[]): boolean {
  return allowedTypes.includes(contentType);
}

/**
 * Generate thumbnail key from original key
 */
export function getThumbnailKey(originalKey: string): string {
  const parts = originalKey.split('/');
  const fileName = parts[parts.length - 1];
  const folder = parts.slice(0, -1).join('/');
  return `${folder}/thumbnails/${fileName}`;
}
