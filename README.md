# CodeLeap Network App

## Overview
A modern social networking app built with Next.js 15, React, and React Query for managing posts. Features user authentication via username, post creation/editing/deletion, dark/light theme switching, infinite scrolling, and responsive modals.

## Key Features
- **User Signup & Authentication**: Simple username-based signup with localStorage persistence; redirects unauthenticated users to signup.
- **Post Management**: Create, edit, delete posts with React Query for data fetching/mutations. Supports infinite pagination for loading more posts.
- **Modals**: Generic modal system for signup, edit, and delete confirmation using React Portals for proper overlay and scroll locking.
- **Theme Switching**: Dark/light modes with smooth transitions using CSS variables and next-themes.
- **Infinite Scroll**: Intersection Observer-based prefetching for seamless loading of additional posts.
- **Responsive Design**: Container-based layout with max-width 800px, adjustable height, and global base spacing (1.5rem).
- **Loading Spinner**: Custom animated spinner with theme integration for async operations.
- **App Bar**: Fixed top bar with username display, theme switcher, and logout button, featuring glassmorphism effect.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **State Management**: React Query for queries/mutations
- **Styling**: SCSS modules with CSS variables; Tailwind CSS for utilities
- **Icons**: React Icons
- **Other**: React Portals, Intersection Observer, Custom Hooks (e.g., useInfiniteScroll)

## Installation
1. Clone the repo: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Visit `http://localhost:3000`

## Usage
- Signup with a username.
- Create posts with title/content.
- Edit/delete your own posts via icons.
- Scroll to load more (if paginated API supports).
- Toggle themes in the app bar.

For API integration, configure endpoints in `api/posts.ts` (e.g., baseURL: https://dev.company.co.uk/careers/).

## License
MIT
