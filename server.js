require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const Job = require('./models/Job');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// API Routes
// Get all jobs
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json({ success: true, data: jobs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Search jobs
app.get('/api/jobs/search', async (req, res) => {
  try {
    const { q, location, type, experience } = req.query;
    
    let query = {};
    
    // Build search query
    if (q) {
      query.$or = [
        { title: { $regex: q, $options: 'i' } },
        { company: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { skills: { $in: [new RegExp(q, 'i')] } }
      ];
    }
    
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }
    
    if (type) {
      query.type = { $regex: type, $options: 'i' };
    }
    
    if (experience) {
      query.experience = { $regex: experience, $options: 'i' };
    }
    
    const jobs = await Job.find(query).sort({ createdAt: -1 });
    res.json({ success: true, data: jobs, count: jobs.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get single job by ID
app.get('/api/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({ success: false, error: 'Job not found' });
    }
    
    res.json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add new job (for testing)
app.post('/api/jobs', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  try {
    const count = await Job.countDocuments();
    console.log(`📊 Total jobs in database: ${count}`);
  } catch (error) {
    console.log('📊 Connecting to database...');
  }
});
