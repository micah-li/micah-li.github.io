// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Add scroll effect to navbar
  const navbar = document.querySelector(".navbar")
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 255, 255, 0.95)"
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.8)"
      }
    })
  }

  // Simple blog post routing (for demo purposes)
  const urlParams = new URLSearchParams(window.location.search)
  const slug = urlParams.get("slug")

  if (slug && window.location.pathname.includes("blog-post.html")) {
    // In a real application, you would fetch the post data based on the slug
    // For this demo, we're just showing the same content
    console.log("Loading blog post:", slug)
  }

  // Add fade-in animation to cards
  const cards = document.querySelectorAll(".card, .blog-post-card")
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })

  // Add typing effect to hero title (optional enhancement)
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.innerHTML
    heroTitle.innerHTML = ""

    let i = 0
    const typeWriter = () => {
      if (i < originalText.length) {
        heroTitle.innerHTML += originalText.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500)
  }

  // Enhanced mobile optimization
  // Add touch-friendly interactions
  const touchFriendlyCards = document.querySelectorAll(".card, .blog-post-card, .portfolio-item")

  touchFriendlyCards.forEach((card) => {
    // Add touch feedback
    card.addEventListener("touchstart", function () {
      this.style.transform = "scale(0.98)"
    })

    card.addEventListener("touchend", function () {
      this.style.transform = ""
    })
  })

  // Improve mobile navigation
  const mobileNavLinks = document.querySelectorAll(".nav-link")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("touchstart", function () {
      this.style.backgroundColor = "#f3f4f6"
    })

    link.addEventListener("touchend", function () {
      setTimeout(() => {
        this.style.backgroundColor = ""
      }, 150)
    })
  })

  // Add swipe gesture for mobile navigation (basic implementation)
  let touchStartX = 0
  let touchEndX = 0

  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  })

  function handleSwipe() {
    const swipeThreshold = 50
    const swipeDistance = touchEndX - touchStartX

    if (Math.abs(swipeDistance) > swipeThreshold) {
      // Basic swipe detection - could be enhanced for navigation
      console.log(swipeDistance > 0 ? "Swiped right" : "Swiped left")
    }
  }

  // Optimize images for mobile (lazy loading simulation)
  const images = document.querySelectorAll(".portfolio-image")
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        imageObserver.unobserve(entry.target)
      }
    })
  })

  images.forEach((img) => {
    img.style.opacity = "0.8"
    img.style.transition = "opacity 0.3s ease"
    imageObserver.observe(img)
  })

  // Add mobile-specific performance optimizations
  if (window.innerWidth <= 768) {
    // Reduce animation complexity on mobile
    const animatedElements = document.querySelectorAll(".portfolio-item")
    animatedElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`
    })

    // Optimize scroll performance
    let ticking = false

    function updateScrollEffects() {
      // Simplified scroll effects for mobile
      const scrolled = window.pageYOffset
      const navbar = document.querySelector(".navbar")

      if (scrolled > 50) {
        navbar.style.background = "rgba(255, 255, 255, 0.95)"
        navbar.style.backdropFilter = "blur(10px)"
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.8)"
      }

      ticking = false
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects)
        ticking = true
      }
    })
  }
})

// Contact form handling (if you add a contact form later)
function handleContactForm(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to a server
  console.log("Contact form submitted:", data)
  alert("Thank you for your message! I'll get back to you soon.")
}

// Utility function for smooth animations
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("active")
    }
  })
}

// Add scroll listener for animations
window.addEventListener("scroll", animateOnScroll)

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", animateOnScroll)
