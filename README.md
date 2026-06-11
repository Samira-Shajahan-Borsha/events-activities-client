# 🎟️ EventHub — Events & Activities Platform

EventHub is an events & activities discovery platform that connects participants, hosts, and admins with a single, responsive web application. The frontend is built with Next.js 16 + TypeScript and focuses on discoverability, secure booking, host management, and role-based dashboards.

---

## 🚀 Project Overview

EventHub turns event discovery into an easy, secure, and scalable experience for three primary roles: Clients, Hosts, and Admins.

- **Users (Clients):** Discover events using advanced search and filters, book or join activities, manage bookings and profiles.
- **Hosts:** Create and manage events (images, capacity, pricing, categories), view participants and transaction history, and mark events as completed after the event date.
- **Admins:** Review and approve host applications and event submissions, manage users and hosts, review payments, and monitor platform health via dashboards.
- **Security & Auth:** JWT-based authentication with HTTP-only cookies, role-based route protection, and server-side checks for sensitive operations.
- **Payments & Media:** Secure payments (SSLCommerz sandbox for testing) and Cloudinary for image storage and optimization.

### Special Notes

- If some status changes (host/admin actions) don't appear immediately, use the **Refresh** button in the UI or reload the page.
- If you book an event but do not complete payment, use the **Leave** action on the event details page to free the seat.
- Leaving an event after payment will not automatically refund — refunds are handled manually by the backend/platform policy.
- Applying to become a host requires admin approval. Until approved, host features are not accessible.
- Hosts can mark an event as **Completed** only after the event date has passed; reviews are allowed only for completed events.
- Approved events cannot be deleted by hosts (only events that are pending/unapproved can be deleted).

### Logical Cores (High-level workflows)

- Event discovery: index + filters (category, date, location, price, status) with debounced search.
- Booking lifecycle: reserve → payment (SSLCommerz) → confirm → notify (email/web UI toast).
- Role management: registration → JWT issuance → role-based navigation and protected routes.
- Host workflow: apply → admin approval → event CRUD → participants & revenue reporting.
- Admin workflow: review applications/events → approve/reject → moderate users and hosts → view platform analytics.

---

## 🌐 Live Links & Repositories

-   **Frontend Live:**  
    https://events-activities-client-five.vercel.app/

-   **Backend Live:**  
    https://backend-ride-booking-system-ecru.vercel.app/

-   **Backend Repository:**  
    https://github.com/Samira-Shajahan-Borsha/events-activities-server

---

## 🔑 Test Credentials

### User Accounts

| Role        | Email           | Password       |
| ----------- | --------------- | -------------- |
| Super Admin | admin@gmail.com | 12345678@admin |
| Host        | fahim@gmail.com | 1234@Fahim     |
| User        | rafi@gmail.com  | 1234@Rafi      |

### SSLCommerz Sandbox Payment Credentials

| Field       | Value            |
| ----------- | ---------------- |
| Card Number | 4111111111111111 |
| Expiry      | 12/26            |
| CVV         | 111              |

> **Note:** These are SSLCommerz sandbox test credentials for development and testing purposes only. Never use production credentials in the `.env` file.

---

## 🛠️ Technology Stack

### Frontend Stack

**Core Framework & Language**
- ⚛️ **Next.js 16** — App Router for file-based routing, server & client components, edge functions, and optimized SSR/SSG.
- 🔷 **TypeScript** — Full type safety across the entire frontend application for better DX and fewer runtime errors.
- 🎯 **React 19.2** — Latest React features for component composition and hooks.

**Styling & UI Components**
- 🎨 **Tailwind CSS 4** — Utility-first CSS framework with PostCSS for rapid, responsive UI development.
- 🧩 **Shadcn/UI** — Composable React components built on Radix UI with Tailwind styling.
- 🎛️ **Radix UI Primitives** — Low-level, accessible component library (dialogs, popovers, dropdowns, tabs, etc.).
- 📦 **class-variance-authority** — Type-safe component variant management.
- 🔀 **tailwind-merge** — Intelligent Tailwind class merging to avoid conflicts.
- ✨ **tailwindcss-animate** — Pre-built Tailwind animation utilities.

**Forms, State & Data**
- 📋 **React Hook Form** — Lightweight form state management with minimal re-renders.
- 🔒 **Zod** — TypeScript-first schema validation for runtime safety.
- 📞 **@hookform/resolvers** — Integration between React Hook Form and Zod validators.
- 🪝 **Custom Hooks** — `useDebounce`, `useFileUpload`, `useMobile` for specialized logic.

**Authentication & Security**
- 🔐 **jsonwebtoken (JWT)** — Token generation and verification on the client side.
- 🍪 **cookie** — Client-side cookie management for token storage.
- 🔒 **HTTP-only Cookies** — Secure token storage handled by the backend.

**Media & Image Handling**
- ☁️ **Cloudinary** — Direct browser uploads with optimization and CDN delivery.
- 🖼️ **Next.js Image** — Optimized image component for responsive serving.

**UI Utilities & Icons**
- 🎯 **Lucide React** — Modern, consistent icon library with 1000+ icons.
- 🔔 **Sonner** — Toast notifications with auto-dismiss and custom styling.
- 📅 **React Day Picker** — Calendar component for date selection.

**Advanced Features**
- 🎭 **next-themes** — Dark mode / theme provider integration.

**Dev Tools**
- ✔️ **ESLint 9** — Code quality and style enforcement.
- 📝 **TypeScript 5** — Strict type checking and modern syntax.
- 🔨 **Tailwind CLI** — PostCSS processing.

---

### Backend Stack

**Framework & Runtime**
- 🟢 **Node.js** — JavaScript runtime for server execution.
- 🚂 **Express.js** — Lightweight, flexible web server framework.
- 🔷 **TypeScript** — Full type safety on backend with `ts-node-dev` for hot reload during development.

**Database & ORM**
- 📦 **MongoDB:** NoSQL document database.
- 🧾 **Mongoose:** ODM for modeling application data.

**Authentication & Security**
- 🔐 **JWT (jsonwebtoken)** — Stateless token-based authentication.
- 🔒 **bcryptjs** — Password hashing and verification.
- 🍪 **cookie-parser** — Parse and handle HTTP-only cookies.
- 📋 **Zod** — Input validation and schema enforcement.

**File & Media Management**
- ☁️ **Cloudinary SDK** — Programmatic image upload, transform, and optimization.
- 📤 **Multer** — Middleware for handling file uploads.
- 📦 **multer-storage-cloudinary** — Multer integration with Cloudinary for direct uploads.

**API & Communication**
- 🌐 **Axios** — HTTP client for external API calls (SSLCommerz).
- 🔗 **CORS** — Cross-origin resource sharing for frontend-backend communication.

**Payments**
- 💳 **SSLCommerz API** — Payment gateway integration for secure transactions.

**Dev Tools & Utilities**
- 📝 **ESLint** — Linting and code quality.
- ⚡ **ts-node-dev** — TypeScript development server with auto-reload.
- 🔨 **TypeScript Compiler (tsc)** — Build tool for production.
- 📦 **dotenv** — Environment variable management.
- 🔍 **http-status-codes** — HTTP status code constants for consistency.

---

### Deployment & Infrastructure

- 🚀 **Vercel** — Frontend and backend deployment with edge functions and serverless.
- ☁️ **Cloudinary** — Media hosting and CDN.
- 📊 **Analytics & Monitoring** — Vercel analytics and error tracking.

---

## 🔐 Project Features

### 🔑 Authentication & Authorization

- **Secure Registration:** Role-based account creation (Client, Host, Admin) with email validation and password hashing.
- **JWT-based Login:** Secure token generation stored in HTTP-only cookies to prevent XSS attacks.
- **Role-based Navigation:** Dynamic navbar and sidebar based on authenticated user role.
- **Protected Routes:** Middleware prevents unauthorized access to role-specific pages (e.g., admin dashboards, host features).
- **Auto Redirects:** Post-login navigation—Clients → Events page, Hosts → Host Dashboard, Admins → Admin Dashboard.
- **Token Refresh:** Automatic token refresh mechanism to maintain session continuity.
- **Logout with Cleanup:** Secure token deletion and session termination with success notifications.
- **Host Application Flow:** Clients can apply to become hosts; account conversion happens after admin approval with automatic data migration.

---

### 🛡️ Admin Dashboard & Features

#### **📊 Admin Dashboard (Platform Overview)**
- **Quick Actions:** Links to manage applications, events, users, hosts, or payments.

#### **👥 User Management**
- **User List:** All registered clients with email, registration date, status, and role.
- **Filters:** By status (Active, Suspended, Inactive), or registration date.
- **Search:** Find users by name or email.
- **Sort:** By name, email, registration date.
- **Pagination:** Handle large user lists.
- **User Actions:**
  - View detailed profile (bookings).
  - Suspend/Unsuspend account (block from booking and logging in).
  - View user's booking history.

#### **🏢 Host Management**
- **Host List:** All registered hosts with name, business, events created, rating, status.
- **Filters:** By status (Active, Suspended, Inactive).
- **Search:** Find hosts by name or email.
- **Sort:** By name, email, joined date.
- **Pagination:** Manage multiple hosts.
- **Host Actions:**
  - View detailed profile and all hosted events.
  - Suspend/Unsuspend host account.
  - Delete account with data cleanup.

#### **📋 Event Application Management**
- **Filters:** By status (Pending, Approved, Rejected, Under Review).
- **Search:** Find events by title, host name, or category.
- **Sort:** By name, category, date, location, price.
- **Event Review:**
  - View full event details (title, description, images, date, capacity, price).

#### **⚙️ Admin Profile Management**
- **Profile Picture:** Update admin avatar.
- **Contact Information:** Admin email, phone, office location.

---

### 🧑‍💼 Host Dashboard & Features

#### **📊 Host Dashboard (Analytics Overview)**
- **Event Performance:** Total events created, active events, completed events, cancelled events.
- **Quick Actions:** Links to create new event, view applications, or manage profile.

#### **🎫 Create / Manage Events**
- **Create Event Form:**
  - Event title, description (rich text editor).
  - Date, start time, end time, timezone.
  - Location (address, city, coordinates for map).
  - Category selection (multi-select).
  - Event capacity (max participants).
  - Ticket price (free or paid).
  - Event image (Cloudinary uploads).
- **Event Status:** Open, Full, Cancelled, Completed (status changes by date and host action).
- **Edit Event:** Modify all details for pending/approved events (restrictions on past events).
- **Delete Event:** Option to delete only unapproved events; approved events can't be deleted but can be cancelled.
- **Mark as Completed:** After event date passes, host marks event as completed to enable reviews.
- **Participant Management:**
  - View full attendee list with names and emails.
  - Manual approval (for host).

#### **📋 My Created Events**
- **Events List:** All hosted events with status, creation date, participant count, and revenue.
- **Filters:** By status (Active, Completed, Cancelled, Pending Approval).
- **Search:** Find events by title or location.
- **Sort:** By event name, date, category, price.
- **Pagination:** Handle multiple events.
- **Quick Actions:**
  - View event details and participant list.
  - Edit event information.
  - Mark as completed (if date passed).
  - Cancel event.

#### **👤 Host Profile Management**
- **Profile Picture:** Upload/update avatar.
- **Business Information:**
  - Host/business name, bio, website.
  - Location and interests.

---

### 👤 Client/User Dashboard & Features

#### **📊 Client Dashboard (Overview)**
- **Quick Stats:** Bookings count, upcoming events, past attended events, average rating given.
- **Quick Actions:** Fast links to browse events, view bookings, or edit profile.

#### **🎫 My Booked Events**
- **Event List:** All bookings with status (Upcoming, Ongoing, Completed, Cancelled).
- **Event Cards:** Display event info, booking date, status, and quick actions.
- **Leave Event:** Remove bookings from upcoming events (before event date) to free seats.
- **View Details:** Click to see full event and host information.
- **Quick Cancel:** For cancelled bookings.

#### **👤 Profile Management**
- **Profile Picture:** Upload/update avatar via Cloudinary integration with preview.
- **Personal Information:**
  - Full name, email, phone, location.
  - Bio / About section (250 characters).
  - Update form with validation and success notifications.
- **Interests/Tags:** Add multiple interests (e.g., Sports, Music, Tech) for personalized event recommendations.

---

### 🏠 Public Pages & Discovery

#### **🏠 Homepage**
- **Hero Banner:** Eye-catching introduction with call-to-action buttons (Explore Events, Become Host).
- **Dynamic Statistics:** Real-time counters for total users, active hosts, events, and completed events.
- **Featured Events Carousel:** Showcase recent or trending events with quick-view options.
- **How It Works Section:** Step-by-step guide for clients and hosts.
- **Host Features Highlight:** Showcase benefits and earning potential for hosts.
- **FAQ Accordion:** Common questions about booking, hosting, payments, and policies.
- **Call-to-Action Sections:** Multiple conversion points for signing up or exploring events.
- **Footer:** Responsive footer with links, social media, contact info, and site navigation.
- **Breadcrumb Navigation:** User journey tracking for better UX.

#### **🔍 Explore / All Events Page**
- **Advanced Filtering:**
  - By category (Music, Sports, Technology, etc.)
  - By date range (upcoming)
  - By status (Open, Full, Cancelled, Completed)
- **Search:** Debounced real-time keyword search across event titles, descriptions, and locations.
- **View Modes:** Grid layout for flexible browsing.
- **Pagination:** Efficient navigation through large event lists.
- **Event Cards:** Display event image, title, date, location, host name, price, and join button.

#### **📋 Event Details Page**
- **Event Header:** Event image gallery, title, date/time, location with map, and status badge.
- **Host Profile Card:** Host avatar, name, profile navigation option.
- **Event Description:** Full details, agenda, requirements, and cancellation policy.
- **Participant List:** Show attendees.
- **Booking Controls:**
  - "Join Event" button for free events (instant confirmation).
  - "Book Now" button for paid events (redirect to payment).
  - "Leave Event" button for already-booked attendees (before event date).
  - Capacity indicator (e.g., "45/50 seats booked").

#### **🎫 About / How It Works Page**
- Detailed explanation of the platform's mission and approach.
- Step-by-step workflows for clients and hosts.
- Benefits and features overview.

#### **📞 Contact Page**
- **Contact Form:** Name, email, subject, message with client-side validation.
- **Success Notification:** Toast confirmation after form submission.
- **Contact Information:** Display support email, phone, and social links.

#### **🏢 Become a Host Page**
- **Application Form:**
  - Business name, description, website.
  - Contact information and experience in event hosting.
  - Terms and conditions acceptance.
- **Benefits List:** Show advantages of becoming a host (revenue sharing, tools, support).
- **FAQ:** Answer common questions about the hosting process.
- **Submit & Confirmation:** After submission, display "Under Review" status with admin notification.

---

### 🔧 Advanced & Utility Features

**Search & Filtering**
- Debounced search prevents excessive API calls.
- Multi-filter combinations.
- Filter persistence across page navigation.
- "Clear all filters" option for quick reset.

**Image Management**
- Browser image uploads to Cloudinary via backend.
- Image optimization (compression, resizing, format conversion).

**Responsive Design**
- Mobile-first approach with hamburger navigation.
- Touch-friendly buttons and form inputs.
- Optimized for screens from 320px (mobile) to 4K (desktop).
- Adaptive layouts for tablets and desktops.

**Dark Mode & Themes**
- Light and dark theme toggle.
- System preference detection.
- Persistent theme selection in local storage.
- next-themes integration for SSR support.

**Error Handling & Feedback**
- User-friendly error messages with actionable suggestions.
- Loading skeletons for better perceived performance.
- Toast notifications (Sonner) for success, error, and info messages.
- Form validation with inline error displays.

**Performance Optimizations**
- Server-side rendering (SSR) for public pages (Home, Events).
- Static generation for FAQ and How It Works pages.
- Image optimization with Next.js Image component.
- Code splitting and lazy loading for routes.
- Debounced search to reduce server load.

---

## 🚧 Upcoming Features

-   AI-powered event recommendations for more personalized discovery
-   In-app chat and messaging between users, hosts, and support
-   Advanced caching with Redis for improved page load and API response speed
-   Real-time notifications with WebSockets for event updates, bookings, and host alerts
-   Enhanced analytics dashboard for admins and hosts
-   Intelligent search with semantic and location-aware results

---

## 🎨 UI & UX Highlights

-   Fully responsive design
-   Clean, professional, white-themed UI
-   Accessible and intuitive navigation
-   Industry-standard dashboard layouts

---

## 🌍 Environment Configuration

### Frontend Environment Variables (`.env`)

Copy `.env.dev` and customize for your environment:

```bash
# Node Environment
NODE_ENV=development

# Backend API Base URL
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1  # local dev
# NEXT_PUBLIC_API_BASE_URL=https://backend-api-url.vercel.app/api/v1  # production

# JWT Secrets (used only on client-side for token parsing)
JWT_ACCESS_TOKEN_SECRET=your_access_token_secret_here
JWT_REFRESH_TOKEN_SECRET=your_refresh_token_secret_here

```

**Key Environment Descriptions:**
- `NODE_ENV`: Set to `development` for local work, `production` for Vercel deployment.
- `NEXT_PUBLIC_API_BASE_URL`: Backend API endpoint; adjust based on environment.

### Backend Environment Variables (`.env` for `events-activities-server`)

```bash
# Server & Database
PORT=5000
NODE_ENV=development
DB_URL=mongodb+srv://username:password@cluster.mongodb.net/database_name?appName=app-name

# Authentication (JWT)
JWT_ACCESS_TOKEN_SECRET=your-access-token-secret
JWT_ACCESS_TOKEN_EXPIRES=1d
JWT_REFRESH_TOKEN_SECRET=your-refresh-token-secret
JWT_REFRESH_TOKEN_EXPIRES=30d

# Password Security
BCRYPT_SALT_ROUND=10

# Super Admin Credentials
SUPER_ADMIN_EMAIL=admin@gmail.com
SUPER_ADMIN_PASSWORD=your-secure-password

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# SSLCommerz Payment Gateway
SSL_STORE_ID=your-store-id
SSL_STORE_PASS=your-store-password
SSL_PAYMENT_API=https://sandbox.sslcommerz.com/gwprocess/v4/api.php
SSL_VALIDATION_API=https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php
SSL_IPN_URL=http://localhost:5000/api/v1/payment/validate-payment

# SSLCommerz Callbacks (Backend)
SSL_SUCCESS_BACKEND_URL=http://localhost:5000/api/v1/payment/success
SSL_FAIL_BACKEND_URL=http://localhost:5000/api/v1/payment/fail
SSL_CANCEL_BACKEND_URL=http://localhost:5000/api/v1/payment/cancel

# SSLCommerz Callbacks (Frontend)
SSL_SUCCESS_FRONTEND_URL=http://localhost:3000/payment/success
SSL_FAIL_FRONTEND_URL=http://localhost:3000/payment/fail
SSL_CANCEL_FRONTEND_URL=http://localhost:3000/payment/cancel

# Frontend URL
FRONTEND_URL=http://localhost:3000
```
---

## ⚙️ Run Locally

Prerequisites: Node.js (>=18), npm or pnpm.

**Development server:**

```bash
# Install dependencies
npm install

# Configure environment variables
cp .env.dev .env
# Edit .env and add your API URLs, Cloudinary, and SSLCommerz credentials

# Run development server (with hot reload)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production build:**

```bash
# Build the application
npm run build

# Start production server
npm run start
```

**Lint code:**

```bash
npm run lint
```

**Notes:**

- Ensure the backend API (events-activities-server) is running on the port specified in `NEXT_PUBLIC_API_BASE_URL`.
- Configure Cloudinary credentials in `.env` for image uploads to work.
- For payment testing, use SSLCommerz sandbox credentials and test card details (see Test Credentials section).

---

## 📁 Project Folder Structure (events-activities-client)

```
events-activities-client/
├── .env                          # Local environment variables
├── .env.dev                      # Template for development environment
├── .gitignore                    # Git ignore rules
├── .vercel/
│   ├── project.json             # Vercel project configuration
│   └── README.txt
├── components.json               # Shadcn/UI components configuration
├── eslint.config.mjs            # ESLint configuration
├── global.d.ts                  # Global TypeScript type definitions
├── next-env.d.ts                # Next.js generated types
├── next.config.ts               # Next.js configuration (rewrites, redirects, image optimization)
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Locked dependency versions
├── postcss.config.mjs           # PostCSS configuration (Tailwind)
├── README.md                    # This file
├── todo.md                      # Development to-do list
├── tsconfig.json                # TypeScript configuration
│
├── public/                      # Static assets
│   ├── favicon.ico
│   ├── logo.png
│   └── images/                  # Static images
│
├── src/
│   ├── proxy.ts                 # API proxy utilities
│   │
│   ├── app/                     # Next.js App Router structure
│   │   ├── layout.tsx           # Root layout (theme provider, navbar, footer)
│   │   ├── loading.tsx          # Root loading skeleton
│   │   ├── error.tsx            # Root error boundary
│   │   ├── not-found.tsx        # 404 page
│   │   ├── globals.css          # Global styles
│   │   │
│   │   ├── (commonLayout)/      # Grouped layout for public pages
│   │   │   ├── layout.tsx       # Public layout (navbar, footer)
│   │   │   ├── page.tsx         # Home page (/)
│   │   │   │
│   │   │   ├── (auth)/          # Auth routes
│   │   │   │   ├── login/       # Login page (/login)
│   │   │   │   └── register/    # Register page (/register)
│   │   │   │
│   │   │   ├── about/           # About page (/about)
│   │   │   ├── become-a-host/   # Host application page (/become-a-host)
│   │   │   ├── contact/         # Contact page (/contact)
│   │   │   ├── events/          # All events page (/events)
│   │   │   ├── explore-events/  # Event exploration page (/explore-events)
│   │   │   ├── how-it-works/    # How it works page (/how-it-works)
│   │   │   ├── payment/         # Payment callback page (/payment)
│   │   │   └── profile/         # Public user profile view (/profile/[id])
│   │   │
│   │   └── (dashboardLayout)/   # Protected dashboard layout
│   │       ├── layout.tsx       # Dashboard layout (sidebar, protected)
│   │       │
│   │       ├── (commonProtectedLayout)/  # Common protected pages
│   │       │   └── (nested routes)
│   │       │
│   │       ├── (userDashboardLayout)/    # Client/User dashboard
│   │       │   ├── layout.tsx           # User dashboard layout
│   │       │   ├── page.tsx             # User dashboard home
│   │       │   ├── my-events/           # My booked events
│   │       │   ├── profile/             # Edit user profile
│   │       │   └── reviews/             # User reviews
│   │       │
│   │       ├── admin/                   # Admin dashboard & features
│   │       │   ├── page.tsx             # Admin overview
│   │       │   ├── users/               # User management
│   │       │   ├── hosts/               # Host management
│   │       │   ├── events/              # Event approval management
│   │       │   ├── host-applications/   # Host application review
│   │       │   ├── payments/            # Payment history & analytics
│   │       │   ├── analytics/           # Platform analytics
│   │       │   └── settings/            # Admin settings
│   │       │
│   │       └── host/                    # Host dashboard & features
│   │           ├── page.tsx             # Host overview
│   │           ├── create-event/        # Create new event
│   │           ├── my-events/           # Hosted events management
│   │           ├── event-details/       # View hosted event details
│   │           ├── participants/        # View event participants
│   │           ├── earnings/            # Payment history & earnings
│   │           ├── profile/             # Edit host profile
│   │           └── analytics/           # Host analytics
│   │
│   ├── components/              # React components
│   │   ├── login-form.tsx      # Login form component
│   │   ├── register-form.tsx   # Register form component
│   │   ├── logout-button.tsx   # Logout button
│   │   ├── password-input.tsx  # Reusable password input
│   │   ├── not-found-content.tsx # 404 content component
│   │   │
│   │   ├── modules/            # Feature-specific component groups
│   │   │   ├── Admin/          # Admin feature components
│   │   │   │   ├── UserManagementTable.tsx
│   │   │   │   ├── HostManagementTable.tsx
│   │   │   │   ├── EventApprovalCard.tsx
│   │   │   │   ├── HostApplicationCard.tsx
│   │   │   │   ├── PaymentHistoryTable.tsx
│   │   │   │   └── AnalyticsDashboard.tsx
│   │   │   ├── Contact/        # Contact page components
│   │   │   │   └── ContactForm.tsx
│   │   │   ├── Dashboard/      # Dashboard components
│   │   │   │   ├── UserDashboard.tsx
│   │   │   │   ├── HostDashboard.tsx
│   │   │   │   └── AdminDashboard.tsx
│   │   │   ├── EventDetails/   # Event details page components
│   │   │   │   ├── EventHeader.tsx
│   │   │   │   ├── HostProfile.tsx
│   │   │   │   ├── ParticipantList.tsx
│   │   │   │   ├── ReviewsSection.tsx
│   │   │   │   └── BookingCard.tsx
│   │   │   ├── Events/         # Events browsing components
│   │   │   │   ├── EventGrid.tsx
│   │   │   │   ├── EventCard.tsx
│   │   │   │   └── EventFilters.tsx
│   │   │   ├── EventsManagement/ # Host event management
│   │   │   │   ├── CreateEventForm.tsx
│   │   │   │   ├── EventEditor.tsx
│   │   │   │   └── EventsList.tsx
│   │   │   ├── Home/           # Homepage components
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── StatsSection.tsx
│   │   │   │   ├── FeaturedEvents.tsx
│   │   │   │   ├── HowItWorks.tsx
│   │   │   │   ├── FAQSection.tsx
│   │   │   │   └── Testimonials.tsx
│   │   │   ├── MyEvents/       # User booked events
│   │   │   │   └── MyEventsList.tsx
│   │   │   └── Profile/        # Profile components
│   │   │       └── ProfileForm.tsx
│   │   │
│   │   ├── shared/             # Reusable shared components
│   │   │   ├── PublicNavbar.tsx         # Main navigation bar
│   │   │   ├── PublicFooter.tsx        # Footer
│   │   │   ├── MobileUserMenu.tsx      # Mobile menu
│   │   │   ├── RefreshButton.tsx       # Refresh/reload button
│   │   │   ├── SingleImageUploader.tsx # Image upload component
│   │   │   ├── ManagementTable.tsx     # Reusable admin table
│   │   │   ├── ManagementPageHeader.tsx # Page header for management pages
│   │   │   ├── SearchFilter.tsx        # Search filter component
│   │   │   ├── SelectFilter.tsx        # Select/dropdown filter
│   │   │   ├── ClearFiltersButton.tsx  # Clear filters button
│   │   │   ├── DeleteConfirmationDialog.tsx # Confirmation dialog
│   │   │   ├── TablePagination.tsx     # Table pagination
│   │   │   ├── TableSkeleton.tsx       # Loading skeleton for tables
│   │   │   ├── DashboardSkeleton.tsx   # Loading skeleton for dashboards
│   │   │   ├── InputFieldError.tsx     # Form error display
│   │   │   ├── LoginSuccessToast.tsx   # Login success notification
│   │   │   ├── LogoutSuccessToast.tsx  # Logout success notification
│   │   │   ├── PulseLoader.tsx         # Loading spinner
│   │   │   ├── Logo.tsx                # Brand logo
│   │   │   ├── ModeToggler.tsx         # Dark/light mode toggle
│   │   │   ├── NavLink.tsx             # Navigation link component
│   │   │   └── theme-provider.tsx      # Theme context provider
│   │   │
│   │   └── ui/                 # Shadcn/UI & Radix components
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── field.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── nav-main.tsx
│   │       ├── nav-user.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── sonner.tsx
│   │       ├── spinner.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-file-upload.ts  # File upload logic
│   │   ├── use-mobile.ts       # Mobile detection hook
│   │   └── useDebounce.ts      # Debounce hook for search
│   │
│   ├── lib/                    # Utility functions & helpers
│   │   ├── auth-utils.ts       # JWT token parsing and auth checks
│   │   ├── capitalize.ts       # String capitalization utility
│   │   ├── formatters.ts       # Date, currency, number formatting
│   │   ├── getInputFieldError.ts # Form field error helpers
│   │   ├── icon-mapper.ts      # Icon selection utility
│   │   ├── navItems.config.ts  # Navigation menu configuration
│   │   ├── server-fetch.ts     # Server-side API calls (reusable)
│   │   ├── utils.ts            # General utilities (cn for className merging, etc.)
│   │   └── zodValidator.ts     # Zod validation schemas
│   │
│   ├── services/               # API service layer
│   │   ├── admin/
│   │   │   └── userManagement.ts         # Admin user management API calls
│   │   ├── auth/
│   │   │   ├── login.ts                 # Login API call
│   │   │   ├── register.ts              # Register API call
│   │   │   ├── getMyProfileInfo.ts      # Fetch current user profile
│   │   │   ├── getUserInfo.ts           # Fetch user by ID
│   │   │   └── logout.ts                # Logout API call
│   │   ├── event/
│   │   │   ├── getAllEvents.ts          # Fetch all events with filters
│   │   │   ├── getEventById.ts          # Fetch single event
│   │   │   ├── createEvent.ts           # Create new event
│   │   │   ├── updateEvent.ts           # Update event
│   │   │   ├── deleteEvent.ts           # Delete event
│   │   │   └── searchEvents.ts          # Search events
│   │   ├── ticket/
│   │   │   ├── bookEvent.ts             # Book/join event
│   │   │   ├── leaveEvent.ts            # Leave booked event
│   │   │   └── getMyBookings.ts         # Get user's bookings
│   │   └── user/
│   │       ├── updateProfile.ts         # Update user profile
│   │       ├── uploadProfilePicture.ts  # Upload avatar
│   │       └── addInterests.ts          # Add user interests
│   │
│   ├── types/                  # TypeScript interfaces & types
│   │   ├── dashboard.interface.ts  # Dashboard related types
│   │   ├── event.interface.ts      # Event types (Event, EventFilter, etc.)
│   │   ├── ticket.interface.ts     # Booking/ticket types
│   │   └── user.interface.ts       # User types (User, Role, etc.)
│   │
│   └── zod/                    # Zod validation schemas
│       ├── auth.validation.ts  # Login, register validation schemas
│       └── event.validation.ts # Event creation/edit validation schemas
```