// Fake job data - no backend needed!
const allJobs = [
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

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const locationFilter = document.getElementById('locationFilter');
const experienceFilter = document.getElementById('experienceFilter');
const typeFilter = document.getElementById('typeFilter');
const clearBtn = document.getElementById('clearBtn');
const resetBtn = document.getElementById('resetBtn');
const jobsContainer = document.getElementById('jobsContainer');
const resultsCount = document.getElementById('resultsCount');
const loadingState = document.getElementById('loadingState');
const emptyState = document.getElementById('emptyState');
const jobModal = document.getElementById('jobModal');
const modalClose = document.querySelector('.modal-close');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        displayJobs(allJobs);
    }, 500); // Simulate loading
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', searchJobs);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchJobs();
    });
    
    locationFilter.addEventListener('change', searchJobs);
    experienceFilter.addEventListener('change', searchJobs);
    typeFilter.addEventListener('change', searchJobs);
    
    clearBtn.addEventListener('click', clearFilters);
    resetBtn.addEventListener('click', clearFilters);
    
    modalClose.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === jobModal) closeModal();
    });
}

// Search jobs with filters
function searchJobs() {
    showLoading();
    
    setTimeout(() => {
        const query = searchInput.value.toLowerCase().trim();
        const location = locationFilter.value.toLowerCase();
        const experience = experienceFilter.value.toLowerCase();
        const type = typeFilter.value.toLowerCase();
        
        let filtered = allJobs;
        
        // Filter by search query
        if (query) {
            filtered = filtered.filter(job => 
                job.title.toLowerCase().includes(query) ||
                job.company.toLowerCase().includes(query) ||
                job.skills.some(skill => skill.toLowerCase().includes(query)) ||
                job.description.toLowerCase().includes(query)
            );
        }
        
        // Filter by location
        if (location) {
            filtered = filtered.filter(job => 
                job.location.toLowerCase().includes(location)
            );
        }
        
        // Filter by experience
        if (experience) {
            filtered = filtered.filter(job => 
                job.experience.toLowerCase().includes(experience)
            );
        }
        
        // Filter by type
        if (type) {
            filtered = filtered.filter(job => 
                job.type.toLowerCase().includes(type)
            );
        }
        
        displayJobs(filtered);
    }, 300); // Simulate API call delay
}

// Display jobs
function displayJobs(jobs) {
    hideLoading();
    
    if (jobs.length === 0) {
        showEmpty();
        resultsCount.textContent = 'No jobs found';
        return;
    }
    
    hideEmpty();
    resultsCount.textContent = `${jobs.length} job${jobs.length !== 1 ? 's' : ''} found`;
    
    jobsContainer.innerHTML = jobs.map(job => `
        <div class="job-card" onclick="showJobDetail(${job.id})">
            <div class="job-card-header">
                <h3 class="job-title">${job.title}</h3>
                <p class="job-company">${job.company}</p>
            </div>
            
            <div class="job-meta">
                <span class="job-badge">📍 ${job.location}</span>
                <span class="job-badge">💼 ${job.type}</span>
                <span class="job-badge">📊 ${job.experience}</span>
            </div>
            
            <p class="job-description">${job.description.substring(0, 120)}...</p>
            
            <div class="job-skills">
                ${job.skills.slice(0, 4).map(skill => `
                    <span class="skill-tag">${skill}</span>
                `).join('')}
                ${job.skills.length > 4 ? `<span class="skill-tag">+${job.skills.length - 4} more</span>` : ''}
            </div>
            
            <div class="job-footer">
                <span class="job-salary">${job.salary}</span>
                <span class="job-posted">🕒 ${job.posted}</span>
            </div>
        </div>
    `).join('');
}

// Show job detail in modal
function showJobDetail(jobId) {
    const job = allJobs.find(j => j.id === jobId);
    
    if (job) {
        document.getElementById('modalBody').innerHTML = `
            <h2 class="modal-job-title">${job.title}</h2>
            <p class="modal-job-company">${job.company}</p>
            
            <div class="modal-section">
                <div class="job-meta">
                    <span class="job-badge">📍 ${job.location}</span>
                    <span class="job-badge">💼 ${job.type}</span>
                    <span class="job-badge">📊 ${job.experience}</span>
                    <span class="job-badge">💰 ${job.salary}</span>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>About the Role</h3>
                <p>${job.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>Required Skills</h3>
                <div class="job-skills">
                    ${job.skills.map(skill => `
                        <span class="skill-tag">${skill}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <p style="color: #999;">Posted ${job.posted}</p>
            </div>
            
            <button class="apply-btn" onclick="applyJob(${job.id})">
                Apply Now 🚀
            </button>
        `;
        
        jobModal.style.display = 'block';
    }
}

// Apply for job (demo function)
function applyJob(jobId) {
    const job = allJobs.find(j => j.id === jobId);
    alert(`🎉 Application submitted for ${job.title} at ${job.company}!\n\nIn a real app, this would:\n• Send your CV to the company\n• Add job to your applications\n• Send confirmation email\n\nThis is just a demo! 😊`);
    closeModal();
}

// Close modal
function closeModal() {
    jobModal.style.display = 'none';
}

// Clear all filters
function clearFilters() {
    searchInput.value = '';
    locationFilter.value = '';
    experienceFilter.value = '';
    typeFilter.value = '';
    displayJobs(allJobs);
}

// Show/hide loading state
function showLoading() {
    loadingState.style.display = 'block';
    jobsContainer.style.display = 'none';
    emptyState.style.display = 'none';
}

function hideLoading() {
    loadingState.style.display = 'none';
    jobsContainer.style.display = 'grid';
}

// Show/hide empty state
function showEmpty() {
    emptyState.style.display = 'block';
    jobsContainer.style.display = 'none';
}

function hideEmpty() {
    emptyState.style.display = 'none';
}

// Add some fun animations on page load
setTimeout(() => {
    document.querySelectorAll('.job-card').forEach((card, index) => {
        card.style.animation = `slideUp 0.5s ease forwards ${index * 0.1}s`;
    });
}, 100);