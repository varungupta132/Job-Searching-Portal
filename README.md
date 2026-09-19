# 🎯 Simple Job Portal

A simple job listing portal inspired by **freehire** - built with HTML, CSS, JavaScript, Node.js, and Express.

## ✨ Features

- 📋 **Job Listings** - Browse through available job positions
- 🔍 **Search Functionality** - Search by job title, company, or skills
- 🎯 **Smart Filters** - Filter by location, experience level, and job type
- 💼 **Job Details** - View complete job information in a modal
- 🎨 **Colorful UI** - Beautiful gradient design with smooth animations
- 🗄️ **MongoDB Database** - Persistent storage with MongoDB Atlas
- ⚡ **Fast & Lightweight** - Simple and efficient architecture

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your system

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file and add your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

4. Seed the database with sample jobs:
```bash
npm run seed
```

5. Start the server:
```bash
npm start
```

6. Open your browser and visit:
```
http://localhost:3000
```

## 📁 Project Structure

```
.
├── server.js           # Express server with API routes
├── seedJobs.js         # Database seeder script
├── package.json        # Project dependencies
├── .env               # Environment variables (not in git)
├── README.md          # This file
├── config/
│   └── db.js          # MongoDB connection
├── models/
│   └── Job.js         # Job mongoose schema
└── public/
    ├── index.html     # Main HTML page
    ├── style.css      # Colorful styling
    └── script.js      # Frontend JavaScript
```

## 🔌 API Endpoints

### Get All Jobs
```
GET /api/jobs
```

### Search Jobs
```
GET /api/jobs/search?q=developer&location=mumbai&experience=mid-level&type=full-time
```

### Get Single Job
```
GET /api/jobs/:id
```

## 🎨 Features Explanation

### Search & Filter
- Search across job titles, companies, descriptions, and skills
- Filter by location (Mumbai, Bangalore, Delhi, etc.)
- Filter by experience level (Junior, Mid-level, Senior)
- Filter by job type (Full-time, Part-time, Contract)

### Job Cards
Each job card displays:
- Job title and company name
- Location, type, and experience level
- Brief description
- Required skills as tags
- Salary range
- Posted date

### Job Detail Modal
Click any job card to see:
- Complete job information
- All required skills
- Apply button (placeholder)

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (with Gradients & Animations), Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas with Mongoose ODM
- **Deployment**: Ready for Render/Railway/Vercel

## 🔮 Future Enhancements (Optional)

- Add MongoDB for database
- User authentication system
- Resume upload functionality
- Real-time job notifications
- Company profiles
- Save favorite jobs

## 📝 Note

This is a **simplified version** of the freehire project. The original freehire is much more complex with:
- Job crawling from multiple sources
- AI-powered features
- PostgreSQL database
- Meilisearch for advanced search
- User authentication
- CV builder and more

This project focuses on the **core job listing and search functionality** in the simplest way possible.

## 📄 License

MIT License - Feel free to use this project for learning purposes!

---

**Built with ❤️ - Simple, Clean, and Easy to Understand**
