import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcryptjs';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

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

  // Create Site Settings
  const siteSettings = await prisma.siteSettings.upsert({
    where: { id: 'main' },
    update: {},
    create: {
      id: 'main',
      phone: '+91 98765 43210',
      email: 'info@arthoscenter.com',
      address: 'Arthroscenter, Near AIIMS, Patna, Bihar 800001',
      mapUrl: 'https://maps.google.com/?q=Patna,Bihar',
      facebook: 'https://facebook.com/arthoscenter',
      instagram: 'https://instagram.com/arthoscenter',
      twitter: 'https://twitter.com/arthoscenter',
      youtube: 'https://youtube.com/@arthoscenter',
      businessHours: {
        monday: '9:00 AM - 6:00 PM',
        tuesday: '9:00 AM - 6:00 PM',
        wednesday: '9:00 AM - 6:00 PM',
        thursday: '9:00 AM - 6:00 PM',
        friday: '9:00 AM - 6:00 PM',
        saturday: '9:00 AM - 2:00 PM',
        sunday: 'Closed',
      },
      defaultMetaTitle: 'Arthoscenter - Expert Orthopaedic Care in Bihar',
      defaultMetaDescription:
        'Led by Dr. Gurudeo Kumar with 20+ years of experience. Specializing in Joint Replacement, Spine Surgery, Sports Medicine & more.',
      calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || '',
    },
  });

  console.log('✅ Site settings created');

  // Create Sample Blog Post
  const blogPost = await prisma.blogPost.upsert({
    where: {
      slug_language: {
        slug: 'welcome-to-arthoscenter',
        language: 'en',
      },
    },
    update: {},
    create: {
      slug: 'welcome-to-arthoscenter',
      title: 'Welcome to Arthoscenter - Your Trusted Orthopaedic Care Partner',
      excerpt:
        'Discover how Arthoscenter is transforming orthopaedic care in Bihar with world-class expertise and compassionate treatment.',
      content: `<h2>Welcome to Arthoscenter</h2>
<p>We are thrilled to welcome you to Arthoscenter, Bihar's premier orthopaedic care facility led by the renowned Dr. Gurudeo Kumar. With over 20 years of experience and 5,000+ successful surgeries, we are committed to providing world-class orthopaedic care with compassion and excellence.</p>

<h3>Our Expertise</h3>
<ul>
<li><strong>Joint Replacement:</strong> Total and partial knee, hip, shoulder replacements with advanced techniques</li>
<li><strong>Spine Surgery:</strong> Minimally invasive procedures for herniated discs, spinal fusion, and more</li>
<li><strong>Sports Medicine:</strong> ACL reconstruction, meniscus repair, and sports injury treatment</li>
<li><strong>Trauma Care:</strong> 24/7 emergency orthopaedic care for fractures and injuries</li>
<li><strong>Arthroscopy:</strong> Minimally invasive keyhole surgeries for joint problems</li>
</ul>

<h3>Why Choose Arthoscenter?</h3>
<p>At Arthoscenter, we combine cutting-edge technology with personalized care. Our state-of-the-art facility is equipped with the latest diagnostic and surgical equipment, ensuring the best possible outcomes for our patients.</p>

<p>Book your online consultation today and take the first step towards a pain-free life!</p>`,
      language: 'en',
      status: 'PUBLISHED',
      authorId: adminUser.id,
      publishedAt: new Date(),
      category: 'GENERAL',
      tags: ['Welcome', 'Introduction', 'Orthopaedic Care'],
      metaTitle: 'Welcome to Arthoscenter - Expert Orthopaedic Care',
      metaDescription:
        'Learn about Arthoscenter and our commitment to providing world-class orthopaedic care in Bihar.',
      readingTime: 3,
    },
  });

  console.log('✅ Sample blog post created');

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
