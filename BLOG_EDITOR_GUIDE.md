# Blog Editor Guide - Arthros Center Admin Panel

## Overview
A comprehensive blog management system with a rich Tiptap editor supporting all 8 languages.

## Features Implemented

### 1. **Tiptap Rich Text Editor**
Complete WYSIWYG editor with the following features:

**Text Formatting:**
- Bold, Italic, Underline, Strikethrough
- Inline Code, Highlight
- Text Alignment (Left, Center, Right, Justify)

**Headings:**
- H1, H2, H3, H4, H5, H6
- All styled with proper hierarchy

**Lists & Structure:**
- Bullet Lists
- Numbered Lists
- Blockquotes
- Horizontal Rules
- Code Blocks with syntax highlighting

**Media & Links:**
- Hyperlinks (with URL input dialog)
- Images (with URL input dialog)
- Tables (3x3 with headers by default)

**Editor Controls:**
- Undo/Redo functionality
- Live Preview mode
- Character/word counting

### 2. **Multi-Language Support**
Each blog post can be created in one of 8 languages:
- **English** (en)
- **Hindi** (हिंदी - hi)
- **Bengali** (বাংলা - bn)
- **Nepali** (नेपाली - ne)
- **Assamese** (অসমীয়া - as)
- **Odia** (ଓଡ଼ିଆ - or)
- **Maithili** (मैथिली - mai)
- **Bhojpuri** (भोजपुरी - bho)

### 3. **Blog Management Features**

**Blog List Page** (`/admin/blog`):
- Paginated table view (20 per page)
- Search by title/excerpt
- Filter by language
- Filter by status (Draft/Published/Archived)
- View count tracking
- Author information
- Quick actions: View, Edit, Delete

**Create/Edit Blog** (`/admin/blog/new`, `/admin/blog/[id]/edit`):
- Language selector
- Title and auto-generated slug
- Excerpt (500 character limit)
- Full Tiptap rich text editor
- Featured image URL
- SEO meta fields (title, description, keywords)
- Status management (Draft/Published/Archived)
- Preview mode

**SEO Optimization:**
- Meta title (60 characters recommended)
- Meta description (160 characters recommended)
- Keywords (comma-separated)
- Character count indicators
- Featured image support

### 4. **Admin Sidebar Navigation**
Updated admin panel with:
- Dashboard
- Patients
- Consultations
- Appointments
- **Blog Posts** ← NEW
- Payments
- Analytics
- Users (Super Admin only)

## Usage Instructions

### Creating a New Blog Post

1. **Login to Admin Panel:**
   - Go to http://localhost:3001/admin/login
   - Use admin credentials from ADMIN_CREDENTIALS.md

2. **Navigate to Blog:**
   - Click "Blog Posts" in the sidebar
   - Click "New Blog Post" button

3. **Select Language:**
   - Choose the language for your blog post
   - Each blog is written in ONE language

4. **Enter Basic Information:**
   - **Title**: Main heading for your blog
   - **Slug**: URL-friendly identifier (auto-generated or custom)
   - **Excerpt**: Brief summary (max 500 characters)

5. **Write Content:**
   - Use the rich text editor toolbar
   - Format text with headings, lists, tables, etc.
   - Add links and images
   - Use the Preview button to see final output

6. **Add SEO Details:**
   - Featured image URL (optional)
   - Meta title for search engines
   - Meta description
   - Keywords

7. **Publish:**
   - "Save as Draft" to save without publishing
   - "Publish Now" to make it live immediately

### Editing a Blog Post

1. Go to `/admin/blog`
2. Click the Edit icon (pencil) on any blog post
3. Make your changes
4. Click "Save as Draft" or update status to "Published"

### Deleting a Blog Post

1. Go to `/admin/blog`
2. Click the Delete icon (trash) on any blog post
3. Confirm deletion (this action cannot be undone)

## Tiptap Editor Keyboard Shortcuts

- **Bold**: Ctrl/Cmd + B
- **Italic**: Ctrl/Cmd + I
- **Underline**: Ctrl/Cmd + U
- **Undo**: Ctrl/Cmd + Z
- **Redo**: Ctrl/Cmd + Y

## API Endpoints

All blog API routes are protected and require admin authentication:

### GET `/api/admin/blog`
List all blog posts with filters
- Query params: `page`, `perPage`, `language`, `status`, `search`

### POST `/api/admin/blog`
Create a new blog post
- Body: BlogFormData (title, slug, content, language, etc.)

### GET `/api/admin/blog/[id]`
Get single blog post by ID

### PUT `/api/admin/blog/[id]`
Update existing blog post
- Body: BlogFormData

### DELETE `/api/admin/blog/[id]`
Delete a blog post

## Database Schema

```prisma
model BlogPost {
  id              String   @id @default(cuid())
  title           String
  slug            String
  excerpt         String
  content         String   @db.Text
  language        String
  metaTitle       String?
  metaDescription String?
  keywords        String?
  featuredImage   String?
  status          String   @default("DRAFT")
  viewCount       Int      @default(0)
  publishedAt     DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  authorId        String
  author          User     @relation(...)

  @@unique([slug, language])
}
```

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── blog/
│   │   │   ├── page.tsx              # Blog list
│   │   │   ├── new/
│   │   │   │   └── page.tsx          # Create blog
│   │   │   └── [id]/
│   │   │       └── edit/
│   │   │           └── page.tsx      # Edit blog
│   │   └── layout.tsx                # Admin layout with sidebar
│   └── api/
│       └── admin/
│           └── blog/
│               ├── route.ts          # List & Create APIs
│               └── [id]/
│                   └── route.ts      # Get, Update, Delete APIs
├── components/
│   └── admin/
│       ├── blog/
│       │   ├── TiptapEditor.tsx      # Rich text editor
│       │   ├── BlogForm.tsx          # Create/Edit form
│       │   └── BlogTable.tsx         # List table
│       ├── Sidebar.tsx               # Admin navigation
│       └── AdminShell.tsx            # Layout wrapper
└── lib/
    └── validations/
        └── blog.ts                   # Zod schema & types
```

## Troubleshooting

### Editor Not Loading
1. Clear browser cache
2. Check browser console for errors
3. Ensure Tiptap packages are installed

### Can't Save Blog
1. Check that all required fields are filled
2. Verify slug is unique for the selected language
3. Check browser network tab for API errors

### Styling Issues
1. Hard refresh the page (Cmd+Shift+R)
2. Clear browser cookies
3. Check that globals.css is loaded

## Next Steps

Future enhancements could include:
- Image upload directly from editor (Cloudflare R2)
- Category/tag system
- Draft autosave
- Collaborative editing
- Version history
- Content scheduling
- Blog analytics dashboard
- Comment moderation
- Related posts suggestions

## Support

For issues or questions, check:
1. Browser console for JavaScript errors
2. Server logs at `/tmp/claude/tasks/b7e9218.output`
3. Database connectivity with `psql -U shashwat -d arthoscenter`
