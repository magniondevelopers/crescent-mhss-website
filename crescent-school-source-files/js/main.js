/**
 * Crescent Matriculation Higher Secondary School
 * Interactive functionality & UI features
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Bar & Header Shadow
  const mainHeader = document.querySelector('.main-header');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 2. Hero Section Slider Carousel
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator-dash');
  const prevBtn = document.querySelector('.hero-nav-arrow.prev');
  const nextBtn = document.querySelector('.hero-nav-arrow.next');
  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    if (!slides.length) return;
    slides.forEach((slide) => slide.classList.remove('active'));
    indicators.forEach((ind) => ind.classList.remove('active'));

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide]?.classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });

    indicators.forEach((indicator, idx) => {
      indicator.addEventListener('click', () => {
        showSlide(idx);
        resetInterval();
      });
    });

    function startInterval() {
      slideInterval = setInterval(nextSlide, 6000);
    }

    function resetInterval() {
      clearInterval(slideInterval);
      startInterval();
    }

    startInterval();

    const heroSection = document.querySelector('.hero-section');
    heroSection?.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroSection?.addEventListener('mouseleave', () => startInterval());
  }

  // 3. Mobile Navigation Drawer
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileOverlay = document.querySelector('.mobile-drawer-overlay');
  const mobileCloseBtn = document.querySelector('.mobile-drawer-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-drawer-links .nav-link');

  function openDrawer() {
    mobileDrawer?.classList.add('open');
    mobileOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove('open');
    mobileOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openDrawer);
  mobileCloseBtn?.addEventListener('click', closeDrawer);
  mobileOverlay?.addEventListener('click', closeDrawer);

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // 4. Modal Dialogs (Enquire Now / Contact)
  const enquiryModal = document.getElementById('enquiryModal');
  const openEnquiryButtons = document.querySelectorAll('[data-open-enquiry]');
  const modalCloseButtons = document.querySelectorAll('[data-close-modal]');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openEnquiryButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(enquiryModal);
    });
  });

  modalCloseButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      closeModal(modal);
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal(e.target);
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (activeModal) closeModal(activeModal);
      const activeLightbox = document.querySelector('.lightbox-backdrop.active');
      if (activeLightbox) closeLightbox();
      closeDrawer();
    }
  });

  // Form submission handler
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        alert('Thank you for your enquiry! Crescent Admissions Office will get in touch with you shortly.');
        enquiryForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        closeModal(enquiryModal);
      }, 1000);
    });
  }

  // 5. Interactive Lightbox for Gallery
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('[data-lightbox-src]');

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-lightbox-src');
      const caption = item.getAttribute('data-lightbox-caption') || '';
      if (lightboxImg && lightboxCaption && lightboxModal) {
        lightboxImg.src = src;
        lightboxCaption.textContent = caption;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    lightboxModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxCloseBtn?.addEventListener('click', closeLightbox);
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  // 6. Active Navigation Link on Scroll
  const navSections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-menu .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    navSections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
