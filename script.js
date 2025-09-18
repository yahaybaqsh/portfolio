
    // Add animations and interactions
    document.addEventListener('DOMContentLoaded', function() {
      // Scroll animations
      const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);
      
      // Apply animations to sections and cards
      document.querySelectorAll('.section, .project-card, .education-card, .skill-item, .language-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
      });
      
      // Add hover effect to specialization tags
      const specializationTags = document.querySelectorAll('.specialization-tag');
      specializationTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-5px)';
        });
        
        tag.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
        });
      });
      
      // Add parallax effect to header on scroll
      window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const avatarContainer = document.querySelector('.avatar-container');
        if (avatarContainer) {
          avatarContainer.style.transform = `translateY(${scrollPosition * 0.05}px) scale(1.05)`;
        }
      });
    });
