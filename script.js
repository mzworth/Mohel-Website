// script.js - Toronto Mohel Website

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
  }

  // Close mobile nav when a link is clicked
  const mobileLinks = document.querySelectorAll('.nav-mobile a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach(function (i) { i.classList.remove('open'); });
        // Open clicked if it was closed
        if (!isOpen) { item.classList.add('open'); }
      });
    }
  });

  // Contact form submission handler
  // NOTE: This form currently does not send emails.
  // To enable form submission, replace the action attribute in contact.html
  // with your email service endpoint (e.g., Formspree, EmailJS, or your own backend).
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO: Replace this with actual form submission logic
      // e.g., fetch('/submit', { method: 'POST', body: new FormData(contactForm) })
      alert('Thank you for your message. We will be in touch shortly.');
      contactForm.reset();
    });
  }
});