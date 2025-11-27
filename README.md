# DevPort-MERN-FullStack

Full-stack developer portfolio built with MERN stack (MongoDB, Express, React, Node.js) with dummy data ready for development.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📱 Mobile-first responsive layout
- 🚀 Fast performance with Vite
- 💼 Projects showcase with filtering
- 📝 Blog/case studies section
- 💬 Testimonials
- 📧 Contact form with MongoDB storage
- 🔐 Optional admin endpoints (JWT protected)

## Tech Stack

**Frontend:** React, Vite, React Router, Tailwind CSS, Framer Motion  
**Backend:** Node.js, Express, MongoDB, Mongoose  
**Deploy:** Vercel/Netlify (frontend), Render/Railway (backend)

## Quick Start

### 1. Install dependencies
```bash
npm run install-all
```

### 2. Setup environment variables

**Server (.env in /server folder):**
```
MONGO_URI=your_mongodb_atlas_uri
PORT=5000
JWT_SECRET=your_jwt_secret_key
FORMSPREE_URL=https://formspree.io/f/xxxxxx
```

**Client (.env in /client folder):**
```
VITE_API_URL=http://localhost:5000/api
```

### 3. Seed database with dummy data
```bash
npm run seed
```

### 4. Run development servers
```bash
npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:5000

## Project Structure

```
/client          # React frontend
  /src
    /components  # Reusable components
    /pages       # Page components
    /assets      # Images, icons
    /lib         # Utilities
/server          # Express backend
  /src
    /models      # Mongoose schemas
    /controllers # Route handlers
    /routes      # API routes
    /middleware  # Auth, validation
  /scripts       # Seed script
```

## API Endpoints

- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get project details
- `GET /api/testimonials` - List testimonials
- `GET /api/posts` - List blog posts
- `POST /api/contact` - Submit contact form
- `POST /api/admin/projects` - Create project (protected)

## Deployment

**Frontend (Vercel):**
```bash
cd client
vercel
```

**Backend (Render/Railway):**
- Connect your GitHub repo
- Set environment variables
- Deploy from /server folder

## License

MIT
