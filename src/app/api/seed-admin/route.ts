import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    // Security check - only allow in development
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'This endpoint is disabled in production' },
        { status: 403 }
      );
    }

    // Create database connection
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });

    // Hash passwords
    const adminPassword = await bcrypt.hash('Admin@123456', 10);
    const doctorPassword = await bcrypt.hash('Doctor@123456', 10);

    // Create Super Admin
    const admin = await prisma.user.upsert({
      where: { email: 'admin@arthoscenter.com' },
      update: {},
      create: {
        email: 'admin@arthoscenter.com',
        password: adminPassword,
        role: 'SUPER_ADMIN',
        emailVerified: new Date(),
        adminProfile: {
          create: {
            name: 'Super Admin',
            canManagePatients: true,
            canManageContent: true,
            canManagePayments: true,
            canManageUsers: true,
          },
        },
      },
    });

    // Create Doctor
    const doctor = await prisma.user.upsert({
      where: { email: 'dr.kumar@arthoscenter.com' },
      update: {},
      create: {
        email: 'dr.kumar@arthoscenter.com',
        password: doctorPassword,
        role: 'DOCTOR',
        emailVerified: new Date(),
      },
    });

    await prisma.$disconnect();
    await pool.end();

    return NextResponse.json({
      success: true,
      message: 'Admin users created successfully',
      users: [
        { email: admin.email, role: admin.role },
        { email: doctor.email, role: doctor.role },
      ],
      credentials: {
        admin: {
          email: 'admin@arthoscenter.com',
          password: 'Admin@123456',
        },
        doctor: {
          email: 'dr.kumar@arthoscenter.com',
          password: 'Doctor@123456',
        },
      },
    });
  } catch (error: any) {
    console.error('Error seeding admin:', error);
    return NextResponse.json(
      { error: 'Failed to seed admin users', details: error.message },
      { status: 500 }
    );
  }
}
