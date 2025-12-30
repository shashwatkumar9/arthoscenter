'use client';

import { useSession } from 'next-auth/react';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();

  // Don't show sidebar on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Show loading state while session is being fetched
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const adminProfile = session.user as any;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        userRole={adminProfile.role || 'ADMIN'}
        canManagePatients={true}
        canManagePayments={adminProfile.role === 'SUPER_ADMIN' || adminProfile.role === 'ADMIN'}
      />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
