import { UserRole } from '@prisma/client';
import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    role: UserRole;
    name: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      role: UserRole;
      name: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: UserRole;
    name: string;
  }
}
