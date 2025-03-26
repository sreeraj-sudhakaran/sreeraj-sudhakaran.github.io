document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navMenu = document.querySelector('.nav-menu');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const logo = document.querySelectorAll('.logo');
    
    burger.addEventListener('click', () => {
        
        // Toggle Burger Animation
        burger.classList.toggle('active');
        // Toggle Navigation
        navMenu.classList.toggle('nav-active');
        
    });

    // const burger_icon = document.querySelector('.burger');
    // burger_icon.onclick = function() {
    //         this.classList.toggle('active');
    //         navMenu.classList.toggle('nav-active');
    //     };

    // Close menu when clicking outside
    // document.addEventListener('click', function(event) {
    //     if (!event.target.closest('.nav-menu') && !event.target.closest('.menu-toggle')) {
    //         navMenu.classList.remove('nav-active');
    //         burger.classList.remove('active');
    //     }
    // });

    // Close navbar when a link is clicked (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-active');
            burger.classList.remove('active');
        });
    });
    
    // Close navbar when the logo is clicked (mobile)
    logo.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-active');
            burger.classList.remove('active');
        });
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
    

    // document.getElementById('contact-form')
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', async function(e) {
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
    
    // // Skills marquee duplication for infinite loop
    // const marqueeContent = document.querySelector('.marquee-content');
    
    // if (marqueeContent) {
    //     // Clone the marquee content
    //     const clone = marqueeContent.cloneNode(true);
    //     // marqueeContent.appendChild(clone.children[0]);
    //     marqueeContent.appendChild(clone);

        
    //     // Double the content for seamless looping
    //     const originalImages = marqueeContent.querySelectorAll('img');
    //     if (marqueeContent.children.length === originalImages.length) {
    //         originalImages.forEach(img => {
    //             const clone = img.cloneNode(true);
    //             marqueeContent.appendChild(clone);
    //         });
    //     }
        
    //     // originalImages.forEach(img => {
    //     //     const clone = img.cloneNode(true);
    //     //     marqueeContent.appendChild(clone);
    //     // });
    // }
    

    
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .achievement-card');
    
    // Function to check if element is in viewport
    // function isInViewport(element) {
    //     const rect = element.getBoundingClientRect();
    //     return (
    //         rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.bottom >= 0
    //     );
    // }
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight * 0.9) && // Trigger when 90% of viewport height
            rect.bottom >= (window.innerHeight * 0.1) // Ensure 10% of element is visible
        );
    }
    
    
    // Function to handle scroll animations
    function handleScrollAnimations() {
        animateElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
                // , 'fade-in-up');
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
        
        .skill-category, .project-card, .achievement-card {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
    
    // Initial check and event listener
    handleScrollAnimations();
    window.addEventListener('scroll', handleScrollAnimations);

    
});

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


async function downloadFile(fileUrl) {
    try {
        const response = await fetch(fileUrl, { method: "HEAD" }); // Check if file exists

        if (response.ok) {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.setAttribute("download", "");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            alert("Download started successfully!");
        } else {
            alert("Error: The file does not exist or cannot be downloaded.");
        }
    } catch (error) {
        alert("Error: Unable to start download. Please try again. \n" + error.message);
    }
}

// function generateCodeLines() {
//     const codeLines = document.getElementById('codeLines');
//     const codeSnippets = [
//         // '// Embedded Systems Logic',
//         '#define HIGH 1',
//         '#define LOW 0',
//         'void initMicrocontroller() {',
//         '    configureGPIO(PIN_13, OUTPUT);',
//         '}',
        
//         // '// Python Backend with Django',
//         'from django.db import models',
//         'class Project(models.Model):',
//         '    name = models.CharField(max_length=100)',
//         '    description = models.TextField()',
    
//         // '// AI/ML Model Training',
//         'from sklearn.ensemble import RandomForestClassifier',
//         'model = RandomForestClassifier(n_estimators=100)',
//         'model.fit(X_train, y_train)',
    
//         // '// Realtime Data Processing',
//         'sensor_data = read_sensor()',
//         'processed_data = preprocess(sensor_data)',
//         'send_to_cloud(processed_data)',
    
//         'if (cpu_usage > 80) {',
//         '    optimizeThreads();',
//         '}',
        
//         // '// Logging and Debugging',
//         'import logging',
//         'logging.basicConfig(level=logging.INFO)',
//         'logging.info("System initialized successfully")',
    
//         // '// Problem-Solving Mindset',
//         'while (challengesExist) {',
//         '    findSolution();',
//         '    implementSolution();',
//         '}',
//     ];

//     for (let i = 0; i < 50; i++) {
//         const line = document.createElement('div');
//         line.classList.add('code-line');
//         line.style.left = `${Math.random() * 100}%`;
//         line.style.animationDelay = `${Math.random() * 10}s`;
//         line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
//         codeLines.appendChild(line);
//     }
// }

// generateCodeLines();


function generateCodeLines() {
    const codeLines = document.getElementById('codeLines');
    const codeSnippets = [
        '#define HIGH 1',
        '#define LOW 0',
        'void initMicrocontroller() {',
        '    configureGPIO(PIN_13, OUTPUT);',
        '}',
        
        'from django.db import models',
        'class Project(models.Model):',
        '    name = models.CharField(max_length=100)',
        '    description = models.TextField()',
    
        'from sklearn.ensemble import RandomForestClassifier',
        'model = RandomForestClassifier(n_estimators=100)',
        'model.fit(X_train, y_train)',
    
        'sensor_data = read_sensor()',
        'processed_data = preprocess(sensor_data)',
        'send_to_cloud(processed_data)',
    
        'if (cpu_usage > 80) {',
        '    optimizeThreads();',
        '}',
        
        'import logging',
        'logging.basicConfig(level=logging.INFO)',
        'logging.info("System initialized successfully")',
    
        'while (challengesExist) {',
        '    findSolution();',
        '    implementSolution();',
        '}',
    ];

    // Colors for syntax highlighting
    const colors = {
        'keyword': 'rgb(255, 99, 132)', // Keywords like 'if', 'import', etc.
        'variable': 'rgb(100, 255, 210)', // Variables or constants like HIGH, LOW
        'function': 'rgb(102, 204, 255)', // Function names like 'initMicrocontroller'
        'string': 'rgb(255, 215, 0)', // Strings, often strings in code (e.g., 'System initialized')
        'number': 'rgb(144, 238, 144)', // Numbers or other literals
        'default': 'white'
    };

    // Function to escape HTML characters
    function escapeHTML(text) {
        return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    for (let i = 0; i < 50; i++) {
        const line = document.createElement('div');
        line.classList.add('code-line');
        line.style.left = `${Math.random() * 100}%`;
        line.style.animationDelay = `${Math.random() * 10}s`;

        // Choose a random snippet
        let snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

        // Create a span for each part of the code for syntax highlighting
        let coloredLine = document.createElement('span');

        // Apply syntax highlighting to different code parts
        snippet.split(' ').forEach((word) => {
            let span = document.createElement('span');
            // Applying different color for different parts
            if (/(void|from|class|if|import|while|def|return)/g.test(word)) {
                span.style.color = colors['keyword'];
            } else if (/\d+/g.test(word)) {
                span.style.color = colors['number'];
            } else if (/".*"/g.test(word)) {
                span.style.color = colors['string'];
            } else if (/\(/.test(word)) {
                span.style.color = colors['function'];
            } else {
                span.style.color = colors['variable'];
            }

            span.textContent = `${word} `;
            coloredLine.appendChild(span);
        });

        line.appendChild(coloredLine);
        codeLines.appendChild(line);
    }
}

generateCodeLines();

