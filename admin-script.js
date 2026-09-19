// Admin Panel JavaScript

// Load jobs from localStorage or use default data
let jobs = JSON.parse(localStorage.getItem('jobsData')) || [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: 'Mid-level',
    salary: '₹8-12 LPA',
    description: 'Looking for a skilled frontend developer with React experience to build amazing user interfaces. You will work with modern technologies and collaborate with cross-functional teams.',
    skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Redux'],
    posted: '2 days ago'
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'StartupXYZ',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: 'Senior',
    salary: '₹15-20 LPA',
    description: 'Node.js backend developer needed for building scalable microservices architecture. Experience with cloud platforms and containerization is a plus.',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'AWS'],
    posted: '5 days ago'
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'WebSolutions',
    location: 'Delhi, India',
    type: 'Full-time',
    experience: 'Mid-level',
    salary: '₹10-15 LPA',
    description: 'Full stack developer for MERN stack projects with modern development practices. Join our innovative team building next-gen web applications.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
    posted: '1 week ago'
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    company: 'DesignHub',
    location: 'Pune, India',
    type: 'Full-time',
    experience: 'Junior',
    salary: '₹5-8 LPA',
    description: 'Creative UI/UX designer for web and mobile applications with modern design tools. Create stunning user experiences that delight customers.',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Wireframing', 'Prototyping'],
    posted: '3 days ago'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: 'Senior',
    salary: '₹18-25 LPA',
    description: 'DevOps engineer with AWS and Docker expertise for cloud infrastructure management. Automate deployment pipelines and ensure system reliability.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    posted: '4 days ago'
  },
  {
    id: 6,
    title: 'Data Analyst',
    company: 'DataCorp',
    location: 'Chennai, India',
    type: 'Full-time',
    experience: 'Junior',
    salary: '₹6-9 LPA',
    description: 'Data analyst for business intelligence and reporting with SQL expertise. Transform raw data into actionable business insights.',
    skills: ['SQL', 'Python', 'Excel', 'Power BI', 'Tableau'],
    posted: '1 day ago'
  },
  {
    id: 7,
    title: 'Mobile App Developer',
    company: 'AppMakers',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: 'Mid-level',
    salary: '₹9-14 LPA',
    description: 'React Native developer for building cross-platform mobile applications. Create engaging mobile experiences for millions of users.',
    skills: ['React Native', 'JavaScript', 'iOS', 'Android', 'Firebase'],
    posted: '6 days ago'
  },
  {
    id: 8,
    title: 'QA Engineer',
    company: 'TestPro',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: 'Mid-level',
    salary: '₹7-11 LPA',
    description: 'Manual and automation testing engineer for web and mobile applications. Ensure product quality through comprehensive testing strategies.',
    skills: ['Selenium', 'Jest', 'Manual Testing', 'Automation', 'Cypress'],
    posted: '2 weeks ago'
  },
  {
    id: 9,
    title: 'Python Developer',
    company: 'AI Solutions',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: 'Mid-level',
    salary: '₹10-16 LPA',
    description: 'Python developer for backend services and data processing pipelines. Work on cutting-edge AI and machine learning projects.',
    skills: ['Python', 'Django', 'Flask', 'PostgreSQL', 'Redis'],
    posted: '3 days ago'
  },
  {
    id: 10,
    title: 'Product Manager',
    company: 'InnovateCo',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: 'Senior',
    salary: '₹20-30 LPA',
    description: 'Product manager to lead product strategy and roadmap for B2B SaaS products. Drive product vision from concept to launch.',
    skills: ['Product Strategy', 'Agile', 'User Research', 'Analytics', 'Communication'],
    posted: '1 week ago'
  },
  {
    id: 11,
    title: 'Graphic Designer',
    company: 'CreativeStudio',
    location: 'Delhi, India',
    type: 'Part-time',
    experience: 'Fresher',
    salary: '₹3-5 LPA',
    description: 'Creative graphic designer for digital marketing campaigns and brand identity. Design stunning visuals that capture attention.',
    skills: ['Photoshop', 'Illustrator', 'InDesign', 'Canva', 'Branding'],
    posted: '5 days ago'
  },
  {
    id: 12,
    title: 'Digital Marketing Intern',
    company: 'MarketBoost',
    location: 'Pune, India',
    type: 'Internship',
    experience: 'Fresher',
    salary: '₹15K-25K per month',
    description: 'Digital marketing internship opportunity to learn SEO, SEM, and social media marketing. Perfect for fresh graduates looking to start career.',
    skills: ['SEO', 'Google Ads', 'Social Media', 'Content Writing', 'Analytics'],
    posted: '2 days ago'
  }
];

// Activity log
let activityLog = JSON.parse(localStorage.getItem('activityLog')) || [
  { time: '2 min ago', text: 'Admin logged in' }
];

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    // Update dashboard stats
    updateDashboardStats();
    
    // Load jobs table
    loadJobsTable();
    
    // Load activity log
    loadActivityLog();
    
    // Setup form handlers
    setupFormHandlers();
    
    // Setup modal handlers
    setupModalHandlers();
    
    // Add login activity
    addActivity('Admin logged in');
});

// Navigation functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Add active class to clicked button
    document.getElementById(sectionId + '-btn').classList.add('active');
}

// Dashboard functions
function updateDashboardStats() {
    const totalJobs = jobs.length;
    const companies = [...new Set(jobs.map(job => job.company))].length;
    const locations = [...new Set(jobs.map(job => job.location))].length;
    const recentJobs = jobs.filter(job => 
        job.posted.includes('day') && parseInt(job.posted) <= 7
    ).length;
    
    document.getElementById('total-jobs').textContent = totalJobs;
    document.getElementById('total-companies').textContent = companies;
    document.getElementById('total-locations').textContent = locations;
    document.getElementById('recent-jobs').textContent = recentJobs;
}

function loadActivityLog() {
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML = activityLog.map(activity => `
        <div class="activity-item">
            <span class="activity-time">${activity.time}</span>
            <span class="activity-text">${activity.text}</span>
        </div>
    `).join('');
}

function addActivity(text) {
    const activity = {
        time: 'Just now',
        text: text
    };
    
    activityLog.unshift(activity);
    
    // Keep only last 10 activities
    if (activityLog.length > 10) {
        activityLog = activityLog.slice(0, 10);
    }
    
    // Update time format for older activities
    activityLog.forEach((activity, index) => {
        if (index === 0) return;
        if (activity.time === 'Just now') {
            activity.time = `${index} min ago`;
        }
    });
    
    localStorage.setItem('activityLog', JSON.stringify(activityLog));
    loadActivityLog();
}

// Form handling
function setupFormHandlers() {
    // Add job form
    document.getElementById('add-job-form').addEventListener('submit', function(e) {
        e.preventDefault();
        addNewJob();
    });
    
    // Edit job form
    document.getElementById('edit-job-form').addEventListener('submit', function(e) {
        e.preventDefault();
        updateJob();
    });
}

function addNewJob() {
    const form = document.getElementById('add-job-form');
    const formData = new FormData(form);
    
    const newJob = {
        id: Date.now(), // Simple ID generation
        title: formData.get('title'),
        company: formData.get('company'),
        location: formData.get('location'),
        type: formData.get('type'),
        experience: formData.get('experience'),
        salary: formData.get('salary'),
        description: formData.get('description'),
        skills: formData.get('skills').split(',').map(skill => skill.trim()),
        posted: 'Just now'
    };
    
    // Add job to array
    jobs.unshift(newJob);
    
    // Save to localStorage
    localStorage.setItem('jobsData', JSON.stringify(jobs));
    
    // Update main site data (if script.js is loaded)
    if (typeof window.allJobs !== 'undefined') {
        window.allJobs = [...jobs];
    }
    
    // Show success message
    showMessage('Job added successfully! 🎉', 'success');
    
    // Reset form
    form.reset();
    
    // Update dashboard
    updateDashboardStats();
    
    // Reload jobs table
    loadJobsTable();
    
    // Add activity
    addActivity(`Added new job: ${newJob.title} at ${newJob.company}`);
}

function loadJobsTable() {
    const tbody = document.getElementById('jobs-table-body');
    
    tbody.innerHTML = jobs.map(job => `
        <tr>
            <td><strong>${job.title}</strong></td>
            <td>${job.company}</td>
            <td>${job.location}</td>
            <td><span class="badge badge-${job.type.toLowerCase().replace('-', '')}">${job.type}</span></td>
            <td>${job.salary}</td>
            <td>${job.posted}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-small btn-edit" onclick="editJob(${job.id})">✏️ Edit</button>
                    <button class="btn-small btn-delete" onclick="deleteJob(${job.id})">🗑️ Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function editJob(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;
    
    // Populate edit form
    document.getElementById('edit-job-id').value = job.id;
    document.getElementById('edit-job-title').value = job.title;
    document.getElementById('edit-company').value = job.company;
    document.getElementById('edit-location').value = job.location;
    document.getElementById('edit-job-type').value = job.type;
    document.getElementById('edit-experience').value = job.experience;
    document.getElementById('edit-salary').value = job.salary;
    document.getElementById('edit-description').value = job.description;
    document.getElementById('edit-skills').value = job.skills.join(', ');
    
    // Show modal
    document.getElementById('edit-modal').style.display = 'block';
}

function updateJob() {
    const jobId = parseInt(document.getElementById('edit-job-id').value);
    const jobIndex = jobs.findIndex(j => j.id === jobId);
    
    if (jobIndex === -1) return;
    
    // Update job data
    jobs[jobIndex] = {
        ...jobs[jobIndex],
        title: document.getElementById('edit-job-title').value,
        company: document.getElementById('edit-company').value,
        location: document.getElementById('edit-location').value,
        type: document.getElementById('edit-job-type').value,
        experience: document.getElementById('edit-experience').value,
        salary: document.getElementById('edit-salary').value,
        description: document.getElementById('edit-description').value,
        skills: document.getElementById('edit-skills').value.split(',').map(skill => skill.trim())
    };
    
    // Save to localStorage
    localStorage.setItem('jobsData', JSON.stringify(jobs));
    
    // Show success message
    showMessage('Job updated successfully! ✅', 'success');
    
    // Close modal
    closeEditModal();
    
    // Reload table
    loadJobsTable();
    
    // Add activity
    addActivity(`Updated job: ${jobs[jobIndex].title}`);
}

function deleteJob(jobId) {
    const job = jobs.find(j => j.id === jobId);
    
    if (confirm(`Are you sure you want to delete "${job.title}" at ${job.company}?`)) {
        // Remove job from array
        jobs = jobs.filter(j => j.id !== jobId);
        
        // Save to localStorage
        localStorage.setItem('jobsData', JSON.stringify(jobs));
        
        // Show success message
        showMessage('Job deleted successfully! 🗑️', 'success');
        
        // Update dashboard
        updateDashboardStats();
        
        // Reload table
        loadJobsTable();
        
        // Add activity
        addActivity(`Deleted job: ${job.title}`);
    }
}

// Modal functions
function setupModalHandlers() {
    const modal = document.getElementById('edit-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.onclick = closeEditModal;
    
    window.onclick = function(event) {
        if (event.target === modal) {
            closeEditModal();
        }
    }
}

function closeEditModal() {
    document.getElementById('edit-modal').style.display = 'none';
}

// Filter and search functions
function filterAdminJobs() {
    const searchTerm = document.getElementById('admin-search').value.toLowerCase();
    const filterType = document.getElementById('admin-filter').value;
    
    let filteredJobs = jobs;
    
    // Apply search filter
    if (searchTerm) {
        filteredJobs = filteredJobs.filter(job =>
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply type filter
    if (filterType) {
        filteredJobs = filteredJobs.filter(job => job.type === filterType);
    }
    
    // Update table with filtered jobs
    const tbody = document.getElementById('jobs-table-body');
    
    tbody.innerHTML = filteredJobs.map(job => `
        <tr>
            <td><strong>${job.title}</strong></td>
            <td>${job.company}</td>
            <td>${job.location}</td>
            <td><span class="badge badge-${job.type.toLowerCase().replace('-', '')}">${job.type}</span></td>
            <td>${job.salary}</td>
            <td>${job.posted}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-small btn-edit" onclick="editJob(${job.id})">✏️ Edit</button>
                    <button class="btn-small btn-delete" onclick="deleteJob(${job.id})">🗑️ Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Utility functions
function showMessage(text, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    // Insert at top of active section
    const activeSection = document.querySelector('.admin-section.active');
    activeSection.insertBefore(message, activeSection.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Sync with main site
function syncWithMainSite() {
    // Update the main site's job data if it's open in another tab
    localStorage.setItem('jobsData', JSON.stringify(jobs));
    
    // Dispatch custom event for real-time sync
    if (typeof window !== 'undefined' && window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('jobsUpdated', {
            detail: { jobs: jobs }
        }));
    }
}

// Initialize sync
window.addEventListener('storage', function(e) {
    if (e.key === 'jobsData') {
        jobs = JSON.parse(e.newValue) || [];
        updateDashboardStats();
        loadJobsTable();
    }
});

// Export jobs functionality
function exportJobs() {
    const dataStr = JSON.stringify(jobs, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'jobs-data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showMessage('Jobs data exported successfully! 📁', 'success');
    addActivity('Exported jobs data');
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case '1':
                e.preventDefault();
                showSection('dashboard');
                break;
            case '2':
                e.preventDefault();
                showSection('add-job');
                break;
            case '3':
                e.preventDefault();
                showSection('manage-jobs');
                break;
            case 's':
                e.preventDefault();
                if (document.querySelector('.admin-section.active').id === 'add-job') {
                    document.getElementById('add-job-form').dispatchEvent(new Event('submit'));
                }
                break;
        }
    }
});

console.log('🔐 Admin Panel Loaded Successfully!');
console.log('📊 Total Jobs:', jobs.length);
console.log('🏢 Companies:', [...new Set(jobs.map(job => job.company))].length);
console.log('📍 Locations:', [...new Set(jobs.map(job => job.location))].length);