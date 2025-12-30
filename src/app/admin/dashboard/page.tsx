import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { signOut } from 'next-auth/react';
import LogoutButton from '@/components/admin/LogoutButton';

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome, {session.user.name}!
              </h1>
              <p className="text-gray-600 mt-1">
                {session.user.email} • {session.user.role}
              </p>
            </div>
            <LogoutButton />
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-green-900 mb-2">
            🎉 Authentication System Working!
          </h2>
          <p className="text-green-800">
            You've successfully logged in to the Arthros Center Admin Panel.
            The authentication system is now fully functional.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-600">Total Patients</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
            <p className="text-sm text-gray-500 mt-1">Database ready</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-600">Consultations</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
            <p className="text-sm text-gray-500 mt-1">Ready to schedule</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-600">Pending Tasks</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">Next Phase</p>
            <p className="text-sm text-gray-500 mt-1">Patient Management</p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">
            🚀 Next Development Phase
          </h2>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Phase 3: Admin Layout with Sidebar Navigation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Phase 4: Dashboard with Live Statistics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Phase 5: Patient Management (CRUD Operations)</span>
            </li>
          </ul>
        </div>

        {/* Session Info (for debugging) */}
        <details className="mt-6 bg-gray-100 rounded-lg p-4">
          <summary className="cursor-pointer font-medium text-gray-700">
            Session Details (Debug Info)
          </summary>
          <pre className="mt-3 text-xs bg-white p-4 rounded border overflow-auto">
            {JSON.stringify(session, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
}
