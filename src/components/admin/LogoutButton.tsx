'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/admin/login' });
  };

  return (
    <button
      onClick={handleLogout}
      className="
        flex items-center gap-2 px-4 py-2
        bg-gray-100 hover:bg-gray-200 text-gray-700
        rounded-lg transition-colors
        font-medium text-sm
      "
    >
      <LogOut className="h-4 w-4" />
      Logout
    </button>
  );
}
