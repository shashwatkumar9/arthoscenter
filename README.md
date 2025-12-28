# Arthoscenter - Orthopaedic Hospital Platform

A comprehensive multilingual orthopaedic hospital website with online consultation booking, payment integration, and dynamic surgery pages.

## 🌟 Features

### ✅ Completed Features

1. **Multilingual Support (i18n)**
   - 8 languages: English, Hindi, Bengali, Nepali, Assamese, Odia, Maithili, Bhojpuri
   - Automatic locale detection and routing
   - Language switcher component

2. **Professional Layout**
   - Responsive header with mega menu navigation
   - Comprehensive footer with links and contact info
   - Mobile-friendly hamburger menu
   - Sticky navigation bar

3. **Homepage**
   - Hero section with gradient background
   - Statistics showcase (5000+ surgeries, 10000+ patients, 20+ years experience)
   - About Dr. Gurudeo Kumar section
   - Why Choose Arthoscenter (6 key benefits)
   - 6 specialty categories with color-coded cards
   - How Online Consultation Works (4-step process)
   - Patient testimonials
   - FAQ section
   - CTA sections

4. **Dynamic Surgery Pages**
   - Category pages for each specialty
   - Individual surgery detail pages with:
     - SEO-optimized metadata
     - Schema.org structured data for local business and medical procedures
     - Comprehensive overview
     - Symptoms & indications
     - Procedure details (preparation, steps, duration, anesthesia)
     - Recovery timeline
     - FAQs
     - Book consultation CTAs

5. **Patient Registration Form**
   - Multi-step form (4 steps):
     - Step 1: Personal Information
     - Step 2: Contact Details
     - Step 3: Medical History
     - Step 4: Current Condition
   - Full validation using React Hook Form + Zod
   - Progress indicator
   - Form state management
   - Success confirmation screen

6. **Calendly Integration**
   - Inline widget for appointment scheduling
   - Popup button option
   - Pre-fill support for user data
   - Integration with Google Meet
   - Dedicated booking page

7. **Razorpay Payment Gateway**
   - Secure payment processing
   - Order creation API
   - Payment verification API
   - ₹999 consultation fee
   - Success/failure handling
   - Razorpay checkout component

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (Prisma ORM)
- **i18n:** next-intl
- **Forms:** React Hook Form + Zod
- **Payment:** Razorpay
- **Scheduling:** Calendly
- **Icons:** Lucide React

## 📁 Project Structure

```
arthoscenter/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx                    # Homepage
│   │   │   ├── layout.tsx                  # Root layout
│   │   │   ├── consultation/page.tsx       # Registration form
│   │   │   ├── book-appointment/page.tsx   # Calendly booking
│   │   │   └── surgeries/
│   │   │       └── [category]/
│   │   │           ├── page.tsx            # Category page
│   │   │           └── [surgery]/page.tsx  # Surgery detail
│   │   └── api/
│   │       └── razorpay/
│   │           ├── create-order/route.ts
│   │           └── verify-payment/route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SimpleHeader.tsx
│   │   │   └── SimpleFooter.tsx
│   │   ├── providers/
│   │   │   └── IntlProvider.tsx
│   │   ├── calendly/
│   │   │   └── CalendlyWidget.tsx
│   │   └── payment/
│   │       └── RazorpayCheckout.tsx
│   ├── constants/
│   │   └── navigation.ts                   # 60 surgeries across 6 categories
│   ├── data/
│   │   └── surgeries.ts                    # Surgery data structure
│   ├── i18n/
│   │   ├── config.ts
│   │   └── request.ts
│   └── lib/
│       └── prisma.ts
├── messages/                               # Translation files
│   ├── en.json
│   ├── hi.json
│   └── ... (6 more languages)
├── prisma/
│   └── schema.prisma                       # Complete database schema
└── .env.example                            # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Razorpay account (for payments)
- Calendly account (for scheduling)

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and fill in your credentials:
   - `DATABASE_URL`: PostgreSQL connection string
   - `RAZORPAY_KEY_ID` & `RAZORPAY_KEY_SECRET`: From Razorpay dashboard
   - `NEXT_PUBLIC_CALENDLY_URL`: Your Calendly scheduling link
   - Other optional services (email, WhatsApp, etc.)

3. **Set up the database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Visit [http://localhost:3000/en](http://localhost:3000/en)

## 🌐 Available Routes

### Public Pages
- `/en` - Homepage (English)
- `/hi` - Homepage (Hindi)
- `/en/surgeries/joint-replacement` - Joint Replacement category
- `/en/surgeries/joint-replacement/total-knee-replacement` - Surgery detail
- `/en/consultation` - Multi-step registration form
- `/en/book-appointment` - Calendly booking
- `/en/about` - About page (to be created)
- `/en/contact` - Contact page (to be created)

### API Routes
- `POST /api/razorpay/create-order` - Create Razorpay order
- `POST /api/razorpay/verify-payment` - Verify payment signature

## 📝 Database Schema

Complete Prisma schema includes:
- **User** - User accounts
- **Patient** - Patient information
- **Document** - Medical documents and reports
- **Consultation** - Consultation records
- **Appointment** - Scheduled appointments
- **Payment** - Payment transactions
- **Communication** - Email/WhatsApp logs
- **Lead** - Lead tracking
- **BlogPost** - Blog articles
- **Surgery** - Surgery information

## 🎨 Surgery Categories

1. **Joint Replacement** (10 procedures)
2. **Spine Surgery** (10 procedures)
3. **Sports Medicine** (10 procedures)
4. **Trauma Care** (10 procedures)
5. **Pediatric Orthopaedics** (10 procedures)
6. **Arthroscopy** (10 procedures)

**Note:** Currently, only "Total Knee Replacement" has full content. You need to add content for the remaining 59 surgeries in `src/data/surgeries.ts`.

## 🔧 Configuration

### Adding New Surgeries

1. Open `src/data/surgeries.ts`
2. Add a new entry following the `SurgeryData` interface
3. Include both English and Hindi content
4. Add SEO metadata

Example:
```typescript
'hip-replacement': {
  id: 'hip-replacement',
  category: 'joint-replacement',
  slug: 'hip-replacement',
  title: { en: 'Hip Replacement', hi: 'हिप रिप्लेसमेंट' },
  // ... complete the rest
}
```

### Customizing Calendly

1. Get your Calendly event URL (e.g., `https://calendly.com/your-username/30min`)
2. Update `src/app/[locale]/book-appointment/page.tsx`:
   ```typescript
   const calendlyUrl = 'https://calendly.com/your-username/30min';
   ```

### Setting up Razorpay

1. Sign up at [razorpay.com](https://razorpay.com)
2. Get API keys from Dashboard > Settings > API Keys
3. For testing, use test mode keys (prefix: `rzp_test_`)
4. For production, use live mode keys (prefix: `rzp_live_`)
5. Set up webhooks for payment notifications

## 📦 Pending Tasks

1. **Add More Surgery Data** - Currently only 1/60 surgeries have full content
2. **Create Additional Pages** - About, Contact, Doctors, Blog, FAQ
3. **Backend Integration** - Connect forms to database, send emails/WhatsApp
4. **Authentication** - NextAuth.js setup, user dashboard
5. **File Uploads** - Cloudflare R2 for medical documents
6. **Testing & Deployment** - Tests, CI/CD, Vercel deployment

## 🎯 Development Server

Currently running on: **http://localhost:3002**

## 🔗 Important Links

- **Razorpay Docs:** https://razorpay.com/docs/
- **Calendly API:** https://developer.calendly.com/
- **Next.js i18n:** https://next-intl-docs.vercel.app/
- **Prisma Docs:** https://www.prisma.io/docs

---

**Built with ❤️ for Arthoscenter - Bihar's Leading Orthopaedic Center**
