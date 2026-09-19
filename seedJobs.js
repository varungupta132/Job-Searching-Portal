require('dotenv').config();
const mongoose = require('mongoose');
const Job = require('./models/Job');
const connectDB = require('./config/db');

const sampleJobs = [
  {
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: 'Mid-level',
    salary: '₹8-12 LPA',
    description: 'Looking for a skilled frontend developer with React experience to build amazing user interfaces.',
    skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Redux'],
    posted: '2 days ago'
  },
  {
    title: 'Backend Developer',
    company: 'StartupXYZ',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: 'Senior',
    salary: '₹15-20 LPA',
    description: 'Node.js backend developer needed for building scalable microservices architecture.',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'AWS'],
    posted: '5 days ago'
  },
  {
    title: 'Full Stack Developer',
    company: 'WebSolutions',
    location: 'Delhi, India',
    type: 'Full-time',
    experience: 'Mid-level',
    salary: '₹10-15 LPA',
    description: 'Full stack developer for MERN stack projects with modern development practices.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
    posted: '1 week ago'
  },
  {
    title: 'UI/UX Designer',
    company: 'DesignHub',
    location: 'Pune, India',
    type: 'Full-time',
    experience: 'Junior',
    salary: '₹5-8 LPA',
    description: 'Creative UI/UX designer for web and mobile applications with modern design tools.',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Wireframing', 'Prototyping'],
    posted: '3 days ago'
  },
  {
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: 'Senior',
    salary: '₹18-25 LPA',
    description: 'DevOps engineer with AWS and Docker expertise for cloud infrastructure management.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    posted: '4 days ago'
  },
  {
    title: 'Data Analyst',
    company: 'DataCorp',
    location: 'Chennai, India',
    type: 'Full-time',
    experience: 'Junior',
    salary: '₹6-9 LPA',
    description: 'Data analyst for business intelligence and reporting with SQL expertise.',
    skills: ['SQL', 'Python', 'Excel', 'Power BI', 'Tableau'],
    posted: '1 day ago'
  },
  {
    title: 'Mobile App Developer',
    company: 'AppMakers',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: 'Mid-level',
    salary: '₹9-14 LPA',
    description: 'React Native developer for building cross-platform mobile applications.',
    skills: ['React Native', 'JavaScript', 'iOS', 'Android', 'Firebase'],
    posted: '6 days ago'
  },
  {
    title: 'QA Engineer',
    company: 'TestPro',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: 'Mid-level',
    salary: '₹7-11 LPA',
    description: 'Manual and automation testing engineer for web and mobile applications.',
    skills: ['Selenium', 'Jest', 'Manual Testing', 'Automation', 'Cypress'],
    posted: '2 weeks ago'
  },
  {
    title: 'Python Developer',
    company: 'AI Solutions',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: 'Mid-level',
    salary: '₹10-16 LPA',
    description: 'Python developer for backend services and data processing pipelines.',
    skills: ['Python', 'Django', 'Flask', 'PostgreSQL', 'Redis'],
    posted: '3 days ago'
  },
  {
    title: 'Product Manager',
    company: 'InnovateCo',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: 'Senior',
    salary: '₹20-30 LPA',
    description: 'Product manager to lead product strategy and roadmap for B2B SaaS products.',
    skills: ['Product Strategy', 'Agile', 'User Research', 'Analytics', 'Communication'],
    posted: '1 week ago'
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Clear existing jobs
    await Job.deleteMany({});
    console.log('🗑️  Cleared existing jobs');
    
    // Insert sample jobs
    await Job.insertMany(sampleJobs);
    console.log('✅ Sample jobs added successfully!');
    
    const count = await Job.countDocuments();
    console.log(`📊 Total jobs in database: ${count}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
