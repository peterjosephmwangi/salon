# Salon App

## Overview
Salon App is a modern, full-featured salon management system built with Next.js, Tailwind CSS, and TypeScript. It allows salon owners to manage services, appointments, staff, and customer bookings efficiently. Clients can browse available services, book appointments, and manage their bookings with ease.

## Screenshots

### Admin Dashboard
![Admin Dashboard](public/images/screenshots/admin-dashboard.png)

### Booking Page
![Booking Page](public/images/screenshots/booking-page.png)

### Mobile View
![Mobile View](public/images/screenshots/mobile-view.png)


## Features
- **Authentication**: Secure sign-up, login, and password recovery
- **Admin Dashboard**: Manage appointments, services, staff, and customers
- **Client Booking**: Browse services and book appointments online
- **User Profiles**: Manage customer and staff profiles
- **Real-Time Updates**: Instant booking confirmations and notifications
- **Responsive UI**: Optimized for desktop and mobile devices
- **State Management**: Zustand for efficient state handling
- **Database**: MongoDB integration with Mongoose
- **Email Notifications**: Automated booking confirmations

## Tech Stack
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, MongoDB with Mongoose
- **State Management**: Zustand
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure
```
salon-app/
│── public/                     # Static assets (images, icons, etc.)
│   ├── images/                  # Salon images, logos, banners
│   ├── icons/                    # SVGs or icons
│   └── favicon.ico               # Favicon
│
│── src/                         # Main application code
│   ├── app/                     # Next.js app router (server components)
│   │   ├── (auth)/              # Authentication pages (sign-in, sign-up)
│   │   │   ├── login/page.tsx
│   │   │   ├── register/page.tsx
│   │   │   ├── forgot-password/page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (dashboard)/         # Admin dashboard
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx         # Dashboard home
│   │   │   ├── appointments/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [id]/page.tsx  # View single appointment
│   │   │   ├── services/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── create/page.tsx  # Add new service
│   │   │   │   ├── [id]/edit.tsx     # Edit service
│   │   │   ├── staff/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [id]/page.tsx  # Staff details
│   │   │   ├── customers/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [id]/page.tsx  # Customer profile
│   │   │   ├── settings/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── profile.tsx
│   │   │   │   ├── business-info.tsx
│   │   │   │   ├── notifications.tsx
│   │   │   │   ├── security.tsx
│   │   │   │   └── email-preferences.tsx
│   │   │
│   │   ├── (client)/             # Client-facing pages (user-side)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── services/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [id]/page.tsx  # Individual service
│   │   │   ├── booking/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [id]/page.tsx  # Booking confirmation
│   │   │   ├── about/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── reviews/page.tsx
│   │   │
│   │   ├── api/                  # API routes (server functions)
│   │   │   ├── auth/
│   │   │   │   ├── login.ts
│   │   │   │   ├── register.ts
│   │   │   ├── bookings/
│   │   │   │   ├── route.ts
│   │   │   ├── services/
│   │   │   │   ├── route.ts
│   │   │   ├── users/
│   │   │   │   ├── route.ts
│   │   │   ├── email/
│   │   │   │   ├── send.ts
│   │   │
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Root homepage
│   │   ├── globals.css            # Global styles
│   │
│   ├── components/                # Reusable UI components
│   │   ├── ui/                    # Generic UI components (buttons, modals, etc.)
│   │   ├── booking/               # Booking-related components
│   │   ├── services/              # Service-related components
│   │   ├── navbar/                # Navbar components
│   │   ├── footer/                # Footer components
│   │
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility functions
│   ├── store/                     # Zustand state management
│   ├── styles/                    # Additional styles
│   ├── types/                     # TypeScript types
│
│── .env                           # Environment variables
│── next.config.js                 # Next.js configuration
│── tailwind.config.js             # Tailwind configuration
│── tsconfig.json                   # TypeScript configuration
│── package.json                    # Dependencies
│── README.md                       # Documentation
```

## Screenshots
Include screenshots of the project here to showcase the UI and features.

## Installation
```bash
git clone https://github.com/yourusername/salon-app.git
cd salon-app
npm install
```

## Running the Project
```bash
npm run dev
```
The app will be available at `http://localhost:3000`

## Environment Variables
Create a `.env` file and configure your variables:
```
DATABASE_URL=mongodb+srv://yourdatabase
NEXTAUTH_SECRET=your_secret_key
EMAIL_SERVER=smtp://your-email-server
EMAIL_FROM=no-reply@salonapp.com
```

## Deployment
Deploy the project on [Vercel](https://vercel.com/) by connecting the repository and adding environment variables.

## License
This project is licensed under the MIT License.

