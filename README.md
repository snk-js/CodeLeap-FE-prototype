# CodeLeap Network App

## Overview
A very minimal social networking app (twitter like) built with Next.js 16, React, and React Query for managing posts. Features user (dummy0 authentication via username, post creation/editing/deletion, dark/light theme switching, infinite scrolling, and responsive modals.

#### The first content Paint is in Signup page, which requires user to set a username and then get the fetch for the posts:
<img width="946" height="357" alt="image" src="https://github.com/user-attachments/assets/f1211cb7-db9e-4d58-883b-0b3839a8b14d" />
--- 
<img width="970" height="277" alt="image" src="https://github.com/user-attachments/assets/d654f624-3f71-4d07-a180-97e8eb90757d" />

although, critical CSS takes 120ms (seen how to optmize)

<img width="1000" height="542" alt="image" src="https://github.com/user-attachments/assets/30c27609-4bda-41d1-a866-d3e7e1f28221" />

As this is a simple application, best practices in security ramain perfect in Lighthouse 
(that's not an achievement, it's normal to get this metric when the application didn't scaled yet):
<img width="970" height="654" alt="image" src="https://github.com/user-attachments/assets/b0cac5cd-a086-4f4c-89a2-acd333dafb51" />


## Key Features
- **User Signup & Authentication**: Simple username-based signup with localStorage persistence; redirects unauthenticated users to signup.
- **Post Management**: Create, edit, delete posts with React Query for data fetching/mutations. Supports infinite pagination for loading more posts.
- **Modals**: Generic modal system for signup, edit, and delete confirmation using React Portals for proper overlay and scroll locking.
- **Theme Switching**: Dark/light modes with smooth transitions using CSS variables and next-themes.
- **Infinite Scroll**: Intersection Observer-based prefetching for seamless loading of additional posts.
- **Responsive Design**: Container-based layout with max-width 800px, adjustable height, and global base spacing (1.5rem).
- **Loading Spinner**: Custom animated spinner with theme integration for async operations.
- **App Bar**: Fixed top bar with username display, theme switcher, and logout button, featuring glassmorphism effect.
- **Zod input validation**: Input validation with Zod is crucial for forms security and type safety (developer experience)
- **React Hook Forms**: More consistent Form state, type safe management

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **State Management**: React Query for queries/mutations
- **Styling**: SCSS modules with CSS variables; Tailwind CSS for utilities
- **Icons**: React Icons
- **Other**: React Portals, Intersection Observer, Custom Hooks (e.g., useInfiniteScroll)

## Installation
1. Clone the repo: `git clone git@github.com:snk-js/CodeLeap-FE-prototype.git`
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Visit `http://localhost:3000`

## Usage
- Signup with a username.
- Create posts with title/content.
- Edit/delete your own posts via icons.
- Scroll to load more (if paginated API supports).
- Toggle themes in the app bar.

## License
MIT
