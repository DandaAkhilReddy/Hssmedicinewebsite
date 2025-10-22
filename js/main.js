// ============================================
// HSS HOSPITAL SPECIALISTS - MAIN JAVASCRIPT
// Professional, Clean Functionality
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ========== SMOOTH SCROLL FOR NAVIGATION LINKS ==========
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // ========== MOBILE MENU TOGGLE ==========
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // ========== NAVBAR SCROLL EFFECT ==========
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ========== ACTIVE NAV LINK ON SCROLL ==========
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function activateNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);

    // ========== LOCATIONS MAP INTERACTIVITY ==========
    const locationMapFrame = document.getElementById('locationsMap');
    const locationLinks = document.querySelectorAll('.location-link');
    const detailCard = document.getElementById('locationDetail');
    const detailName = document.getElementById('locationDetailName');
    const detailCity = document.getElementById('locationDetailCity');
    const detailSummary = document.getElementById('locationDetailSummary');
    const detailServices = document.getElementById('locationDetailServices');

    const updateLocationDetail = (link) => {
        if (!detailCard) return;
        const name = link.dataset.name || link.textContent.trim();
        const city = link.dataset.city || '';
        const summary = link.dataset.summary || '';
        const services = link.dataset.services || '';

        if (detailName) detailName.textContent = name;
        if (detailCity) detailCity.textContent = city;
        if (detailSummary) detailSummary.textContent = summary;

        if (detailServices) {
            detailServices.innerHTML = '';
            services.split(';').map(item => item.trim()).filter(Boolean).forEach(service => {
                const li = document.createElement('li');
                li.textContent = service;
                detailServices.appendChild(li);
            });
        }

        detailCard.classList.add('visible');
    };

    if (locationMapFrame && locationLinks.length) {
        const buildMapSrc = (link) => {
            const lat = link.dataset.lat;
            const lng = link.dataset.lng;
            const fallbackQuery = link.dataset.map || link.dataset.name || link.textContent.trim();

            if (lat && lng) {
                return `https://maps.google.com/maps?q=${lat},${lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
            }

            return `https://maps.google.com/maps?q=${encodeURIComponent(fallbackQuery)}&t=&z=12&ie=UTF8&iwloc=&output=embed`;
        };

        locationLinks.forEach(link => {
            link.addEventListener('click', () => {
                locationLinks.forEach(item => item.classList.remove('active'));
                link.classList.add('active');
                locationMapFrame.src = buildMapSrc(link);
                updateLocationDetail(link);
            });
        });

        const activeLink = document.querySelector('.location-link.active') || locationLinks[0];
        if (activeLink) {
            locationMapFrame.src = buildMapSrc(activeLink);
            updateLocationDetail(activeLink);
        }
    }

    // ========== CONTACT FORM SUBMISSION ==========
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Validate required fields
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Get submit button
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                // Send data to serverless function
                const response = await fetch('/api/submit-contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    // Show success message
                    alert('✅ ' + result.message);

                    // Reset form
                    this.reset();

                    // Log if in development
                    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                        console.log('✅ Contact form submitted successfully');
                        console.log('Email sent:', result.emailSent);
                        console.log('Timestamp:', result.timestamp);
                    }
                } else {
                    // Show error message
                    alert('❌ ' + (result.error || `Failed to send message (Status: ${response.status})`));
                }

            } catch (error) {
                console.error('❌ Form submission error:', error);
                alert('❌ Network error. Please check your connection and try again.');
            } finally {
                // Re-enable submit button
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    // ========== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const fadeElements = document.querySelectorAll(
        '.about-card, .service-card, .diff-item, .location-card, ' +
        '.quality-card, .timeline-item, .leadership-item, ' +
        '.financial-option, .education-info, .testimonial-card'
    );

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });

    // ========== COUNTER ANIMATION FOR STATS ==========
    function animateCounter(element, target, duration = 1500, suffix = '') {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = formatNumber(target) + suffix;
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(current)) + suffix;
            }
        }, 16);
    }

    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    }

    function parseStatNumber(text) {
        // Remove commas and parse
        const cleanText = text.replace(/,/g, '');

        if (cleanText.includes('%')) {
            return { value: parseInt(cleanText), suffix: '%' };
        } else if (cleanText.includes('K')) {
            return { value: parseInt(cleanText) * 1000, suffix: '' };
        } else if (cleanText.includes('M')) {
            return { value: parseInt(cleanText) * 1000000, suffix: '' };
        } else if (cleanText.includes('+')) {
            return { value: parseInt(cleanText), suffix: '+' };
        } else {
            return { value: parseInt(cleanText), suffix: '' };
        }
    }

    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');

                if (statNumber && statNumber.textContent) {
                    const originalText = statNumber.textContent.trim();
                    const parsed = parseStatNumber(originalText);

                    // Start animation
                    statNumber.textContent = '0' + parsed.suffix;
                    animateCounter(statNumber, parsed.value, 1500, parsed.suffix);

                    // Only observe once
                    statsObserver.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });

    // Observe stat items
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(stat => {
        statsObserver.observe(stat);
    });

    // ========== SCROLL TO TOP FUNCTIONALITY (OPTIONAL) ==========
    // Create scroll-to-top button dynamically
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '&uarr;';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(90deg, #E8A0A0 0%, #F4A582 100%);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    document.body.appendChild(scrollTopBtn);

    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect for scroll-to-top button
    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // ========== FORM INPUT ENHANCEMENTS ==========
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

    formInputs.forEach(input => {
        // Add focus class to parent
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // ========== CONSOLE LOG (REMOVE IN PRODUCTION) ==========
    console.log('%c HSS Hospital Specialists Website Loaded Successfully! ',
                'background: linear-gradient(90deg, #E8A0A0, #F4A582); color: white; padding: 10px; font-size: 14px; font-weight: bold;');
    console.log('%c Founded by physicians, for physicians. ',
                'color: #003366; font-size: 12px; font-style: italic;');

});

// ========== HANDLE EXTERNAL LINK CLICKS ==========
document.addEventListener('click', function(e) {
    // Open external links in new tab
    if (e.target.tagName === 'A' && e.target.href &&
        !e.target.href.includes('#') &&
        !e.target.href.includes(window.location.hostname)) {
        e.target.setAttribute('target', '_blank');
        e.target.setAttribute('rel', 'noopener noreferrer');
    }
});

// ========== LAZY LOADING FOR IMAGES (WHEN ADDED) ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========== PERFORMANCE MONITORING (OPTIONAL) ==========
window.addEventListener('load', function() {
    // Log page load time for performance monitoring
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page Load Time: ${pageLoadTime}ms`);
    }
});
