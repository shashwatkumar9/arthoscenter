import "../[locale]/globals.css";
import { Inter } from "next/font/google";
import AdminShell from "@/components/admin/AdminShell";
import SessionProvider from "@/components/admin/SessionProvider";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Note: Authentication is handled by middleware
  // This layout provides the admin shell structure with sidebar
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <SessionProvider>
          <AdminShell>
            {children}
          </AdminShell>
        </SessionProvider>
      </body>
    </html>
  );
}
