// Global variables
let allJobs = [];

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
    loadJobs();
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

// Load all jobs
async function loadJobs() {
    try {
        showLoading();
        const response = await fetch('/api/jobs');
        const data = await response.json();
        
        if (data.success) {
            allJobs = data.data;
            displayJobs(allJobs);
        }
    } catch (error) {
        console.error('Error loading jobs:', error);
        hideLoading();
        showEmpty();
    }
}

// Search jobs with filters
async function searchJobs() {
    try {
        showLoading();
        
        const query = searchInput.value.trim();
        const location = locationFilter.value;
        const experience = experienceFilter.value;
        const type = typeFilter.value;
        
        // Build query string
        const params = new URLSearchParams();
        if (query) params.append('q', query);
        if (location) params.append('location', location);
        if (experience) params.append('experience', experience);
        if (type) params.append('type', type);
        
        const response = await fetch(`/api/jobs/search?${params.toString()}`);
        const data = await response.json();
        
        if (data.success) {
            displayJobs(data.data);
        }
    } catch (error) {
        console.error('Error searching jobs:', error);
        hideLoading();
        showEmpty();
    }
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
    
    jobsContainer.innerHTML = jobs.map(job => {
        const jobId = job._id || job.id;
        return `
        <div class="job-card" onclick="showJobDetail('${jobId}')">`
    }).join('').replace(/`\n/g, '
            <div class="job-card-header">
                <h3 class="job-title">${job.title}</h3>
                <p class="job-company">${job.company}</p>
            </div>
            
            <div class="job-meta">
                <span class="job-badge">📍 ${job.location}</span>
                <span class="job-badge">💼 ${job.type}</span>
                <span class="job-badge">📊 ${job.experience}</span>
            </div>
            
            <p class="job-description">${job.description}</p>
            
            <div class="job-skills">
                ${job.skills.map(skill => `
                    <span class="skill-tag">${skill}</span>
                `).join('')}
            </div>
            
            <div class="job-footer">
                <span class="job-salary">${job.salary}</span>
                <span class="job-posted">🕒 ${job.posted}</span>
            </div>
        </div>
    `).join('');
}

// Show job detail in modal
async function showJobDetail(jobId) {
    try {
        const response = await fetch(`/api/jobs/${jobId}`);
        const data = await response.json();
        
        if (data.success) {
            const job = data.data;
            const displayId = job._id || job.id;
            
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
                
                <button class="apply-btn" onclick="applyJob('${displayId}')">
                    Apply Now 🚀
                </button>
            `;
            
            jobModal.style.display = 'block';
        }
    } catch (error) {
        console.error('Error loading job detail:', error);
        alert('Error loading job details');
    }
}

// Apply for job (placeholder function)
function applyJob(jobId) {
    alert(`Application feature coming soon! Job ID: ${jobId}\n\nIn a real app, this would redirect to the application form.`);
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
    loadJobs();
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
