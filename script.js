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

});