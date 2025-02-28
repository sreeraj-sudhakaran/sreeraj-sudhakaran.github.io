document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-menu') && !event.target.closest('.menu-toggle')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking a link
                navMenu.classList.remove('active');
            }
        });
    });

    const tabBtns = document.querySelectorAll('.tab-btn');
    const skillsGrids = document.querySelectorAll('.skills-grid');
   
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and grids
            tabBtns.forEach(b => b.classList.remove('active'));
            skillsGrids.forEach(grid => grid.classList.remove('active'));
           
            // Add active class to current button
            this.classList.add('active');
           
            // Show corresponding grid
            const targetGrid = document.getElementById(this.getAttribute('data-target'));
            if (targetGrid) {
                targetGrid.classList.add('active');
            }
        });
    });
    
    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Project filtering
    // Skills filtering - Similar to projects
    const skillsFilterButtons = document.querySelectorAll('.skills-filter-btn');
    const skillsCards = document.querySelectorAll('.skill-category');
    
    skillsFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            skillsFilterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            skillsCards.forEach(card => {
                if (card.getAttribute('data-category') === 'common' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                // } 
                // else if(filterValue === 'all' && card.getAttribute('data-default') === 'true') {
                //     card.style.display = 'block';
                }else {
                    card.style.display = 'none';
                }
            });
        });
    });
    

    document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault();
    
        const formData = new FormData(this);
        
        const response = await fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
    
        if (response.ok) {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        } else {
            alert('There was an error submitting the form. Please try again.');
        }
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        }
    });
    
    // Skills marquee duplication for infinite loop
    const marqueeContent = document.querySelector('.marquee-content');
    
    if (marqueeContent) {
        // Clone the marquee content
        const clone = marqueeContent.cloneNode(true);
        marqueeContent.appendChild(clone.children[0]);
        
        // Double the content for seamless looping
        const originalImages = marqueeContent.querySelectorAll('img');
        originalImages.forEach(img => {
            const clone = img.cloneNode(true);
            marqueeContent.appendChild(clone);
        });
    }
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.skill-category, .timeline-item, .project-card, .achievement-card');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animations
    function handleScrollAnimations() {
        animateElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.animation = 'fadeInUp 0.5s ease forwards';
            }
        });
    }
    
    // Add animation styles
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .skill-category, .timeline-item, .project-card, .achievement-card {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
    
    // Initial check and event listener
    handleScrollAnimations();
    window.addEventListener('scroll', handleScrollAnimations);


    
});

// document.addEventListener('DOMContentLoaded', function() {
//     const tabBtns = document.querySelectorAll('.tab-btn');
//     const skillsGrids = document.querySelectorAll('.skills-grid');
    
//     tabBtns.forEach(btn => {
//         btn.addEventListener('click', function() {
//             // Remove active class from all buttons and grids
//             tabBtns.forEach(b => b.classList.remove('active'));
//             skillsGrids.forEach(grid => grid.classList.remove('active'));
            
//             // Add active class to current button
//             this.classList.add('active');
            
//             // Show corresponding grid
//             const targetGrid = document.getElementById(this.getAttribute('data-target'));
//             if (targetGrid) {
//                 targetGrid.classList.add('active');
//             }
//         });
//     });
// });


//handling multiple titles
const titles = [
    "Curious Software Engineer",
    "Professional Software Engineer",
    "Creative Software Engineer",
    "Passionate Software Engineer"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; // Typing speed

function type() {
    const currentTitle = titles[titleIndex];
    const displayedTitle = currentTitle.substring(0, charIndex);

    document.getElementById("dynamic-title").textContent = displayedTitle;

    if (isDeleting) {
        charIndex--;
        if (charIndex < 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length; // Move to the next title
        }
    } else {
        charIndex++;
        if (charIndex > currentTitle.length) {
            isDeleting = true;
        }
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
}

// Start typing effect
type();


