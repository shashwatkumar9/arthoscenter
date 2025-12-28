import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create Super Admin User
  const hashedPassword = await bcrypt.hash('Admin@123456', 10);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@arthoscenter.com' },
    update: {},
    create: {
      email: 'admin@arthoscenter.com',
      password: hashedPassword,
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
    include: {
      adminProfile: true,
    },
  });

  console.log('✅ Super Admin created:', {
    email: adminUser.email,
    role: adminUser.role,
  });

  // Create Doctor User
  const doctorPassword = await bcrypt.hash('Doctor@123456', 10);

  const doctorUser = await prisma.user.upsert({
    where: { email: 'dr.kumar@arthoscenter.com' },
    update: {},
    create: {
      email: 'dr.kumar@arthoscenter.com',
      password: doctorPassword,
      role: 'DOCTOR',
      emailVerified: new Date(),
    },
  });

  console.log('✅ Doctor account created:', {
    email: doctorUser.email,
    role: doctorUser.role,
  });

  console.log('\n🎉 Database seeding completed successfully!');
  console.log('\n📧 LOGIN CREDENTIALS:');
  console.log('┌─────────────────────────────────────────────┐');
  console.log('│  SUPER ADMIN                                │');
  console.log('│  Email: admin@arthoscenter.com             │');
  console.log('│  Password: Admin@123456                     │');
  console.log('└─────────────────────────────────────────────┘');
  console.log('┌─────────────────────────────────────────────┐');
  console.log('│  DOCTOR                                     │');
  console.log('│  Email: dr.kumar@arthoscenter.com          │');
  console.log('│  Password: Doctor@123456                    │');
  console.log('└─────────────────────────────────────────────┘');
  console.log('\n⚠️  IMPORTANT: Change these passwords after first login!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
