 document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section');
            
            const checkVisibility = () => {
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (sectionTop < windowHeight - 150) {
                        section.classList.add('active');
                    }
                });
            };
            
            // Initial check
            checkVisibility();
            
            // Check on scroll
            window.addEventListener('scroll', checkVisibility);
            
            // Replace placeholder images with your actual images
            // document.querySelector('img').src = 'twoje_zdjecie.jpg';
        });