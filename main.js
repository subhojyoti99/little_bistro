// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    menuToggle.textContent = '✕';
  } else {
    menuToggle.textContent = '☰';
  }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.textContent = '☰';
  });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Intersection Observer for Scroll Animations (Fade-up)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(element => {
  fadeObserver.observe(element);
});

// Menu Tabs Logic
const tabBtns = document.querySelectorAll('.menu-tab-btn');
const tabCategories = document.querySelectorAll('.menu-category');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    tabBtns.forEach(b => b.classList.remove('active'));
    tabCategories.forEach(c => c.classList.remove('active'));
    
    // Add active class to clicked button and target category
    btn.classList.add('active');
    const targetId = btn.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});
// Testimonial Rotation Logic
const reviews = [
  { name: "Shalu", initial: "S", rating: "⭐⭐⭐⭐⭐", text: "I love this place. Rated Food 5, Service 5, Atmosphere 5." },
  { name: "Md Anwarhussain", initial: "MA", rating: "⭐⭐⭐⭐⭐", text: "Food 5, Service 5, Atmosphere 5; dinner, approximately ₹200–400/person." },
  { name: "Zeeshan Hashmi", initial: "ZH", rating: "⭐⭐⭐⭐⭐", text: "Cozy ambience and attentive staff. Highly recommend the Chicken Momo and Brownie with Ice Cream." },
  { name: "Sagnik B", initial: "SB", rating: "⭐⭐⭐⭐⭐", text: "Loved the latte, flat white, pepperoni pizza, brownie and crispy chilli babycorn. Excellent freshly baked brownie!" },
  { name: "Sana A", initial: "SA", rating: "⭐⭐⭐⭐⭐", text: "A warm, cozy café. The desserts, hot chocolate, and pizza are amazing." },
  { name: "Punyak G", initial: "PG", rating: "⭐⭐⭐⭐⭐", text: "Highly recommend the Adna Kebab, Krapow Pizza, and Kunafa. Great mocktails and cappuccino!" },
  { name: "Umme S", initial: "US", rating: "⭐⭐⭐⭐⭐", text: "Perfect for working from a café or spending time over coffee. Must-tries include Khao Suey and Pancakes." },
  { name: "Mithu Karmakar", initial: "MK", rating: "⭐⭐⭐⭐⭐", text: "A new world-cuisine café with amazing Turkish and Burmese influences." },
  { name: "Anya Sheikh", initial: "AS", rating: "⭐⭐⭐⭐⭐", text: "Cozy Karaya Road café, great for working or spending quality time over coffee." },
  { name: "Sana Ahmed", initial: "SA", rating: "⭐⭐⭐⭐⭐", text: "Warm and cozy, not over-the-top. Praised the desserts, hot chocolate, and chicken strips." },
  { name: "Fabiha Hussain", initial: "FH", rating: "⭐⭐⭐⭐⭐", text: "Very good and budget-friendly. Food quality is great for the prices, and the staff is extremely cooperative." },
  { name: "Alokesh Samadder", initial: "AS", rating: "⭐⭐⭐⭐⭐", text: "Great variety of world cuisine, large space, and beautiful ambience. Highly recommended for friends and family." },
  { name: "Zain Khan", initial: "ZK", rating: "⭐⭐⭐⭐", text: "A nice, cozy place near Karaya Road. Great combo offers, quality, and service." },
  { name: "Avik Mukherjee", initial: "AM", rating: "⭐⭐⭐⭐⭐", text: "Chef Zara's Thai delicacies are amazing. A hidden Park Circus gem suitable for dates." }
];

const rText = document.getElementById('review-text');
const rName = document.getElementById('review-name');
const rAvatar = document.getElementById('review-avatar');
const rRating = document.getElementById('review-rating');

if (rText && reviews.length > 0) {
  let rIndex = 0;
  setInterval(() => {
    rIndex = (rIndex + 1) % reviews.length;
    const r = reviews[rIndex];
    rText.style.opacity = 0;
    setTimeout(() => {
      rText.textContent = `"${r.text}"`;
      rName.textContent = r.name;
      rAvatar.textContent = r.initial;
      rRating.textContent = r.rating;
      rText.style.opacity = 1;
    }, 300);
  }, 5000);
  rText.style.transition = 'opacity 0.3s ease';
}
