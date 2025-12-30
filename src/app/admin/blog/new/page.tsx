import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import BlogForm from '@/components/admin/blog/BlogForm';

export default async function NewBlogPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Create New Blog Post</h1>
          <p className="text-gray-600 mt-1">
            Write and publish content in multiple languages
          </p>
        </div>

        {/* Form */}
        <BlogForm />
      </div>
    </div>
  );
}
