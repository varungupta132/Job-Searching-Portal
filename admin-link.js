// Add admin link to main site
document.addEventListener('DOMContentLoaded', function() {
    // Add admin button to main site
    const header = document.querySelector('.header');
    if (header && !document.querySelector('.admin-access')) {
        const adminLink = document.createElement('div');
        adminLink.className = 'admin-access';
        adminLink.innerHTML = `
            <a href="admin.html" class="admin-btn" title="Admin Panel">
                🔐 Admin
            </a>
        `;
        
        // Add styles for admin button
        const style = document.createElement('style');
        style.textContent = `
            .admin-access {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
            }
            
            .admin-btn {
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 10px 15px;
                border-radius: 25px;
                text-decoration: none;
                font-weight: 600;
                font-size: 0.9rem;
                backdrop-filter: blur(10px);
                border: 2px solid rgba(255, 255, 255, 0.2);
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .admin-btn:hover {
                background: rgba(255, 107, 107, 0.9);
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
                border-color: rgba(255, 255, 255, 0.4);
            }
            
            @media (max-width: 768px) {
                .admin-access {
                    top: 10px;
                    right: 10px;
                }
                
                .admin-btn {
                    padding: 8px 12px;
                    font-size: 0.8rem;
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(adminLink);
    }
});