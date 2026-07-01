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
    let ticking = false
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 50) {
            navbar.style.background = "rgba(255, 255, 255, 0.95)"
            navbar.style.backdropFilter = "blur(10px)"
          } else {
            navbar.style.background = "rgba(255, 255, 255, 0.8)"
            navbar.style.backdropFilter = ""
          }
          ticking = false
        })
        ticking = true
      }
    })
  }

  // Local photo pile controls
  const albumCategories = Array.from(document.querySelectorAll(".album-category"))
  const albumPiles = Array.from(document.querySelectorAll(".album-pile"))

  if (albumCategories.length > 0 && albumPiles.length > 0) {
    const pileStates = new Map()

    const updatePile = (pile) => {
      const photos = Array.from(pile.querySelectorAll(".loose-photo"))
      const state = pileStates.get(pile.dataset.album) || { offset: 0 }
      const currentPhoto = pile.querySelector("[data-current-photo]")

      photos.forEach((photo, index) => {
        const depth = (index - state.offset + photos.length) % photos.length
        photo.style.setProperty("--stack-depth", depth)
        photo.classList.toggle("is-top", depth === 0)
        photo.setAttribute("aria-pressed", depth === 0 ? "true" : "false")
      })

      if (currentPhoto) {
        currentPhoto.textContent = String(state.offset + 1)
      }
    }

    const setActiveAlbum = (album) => {
      albumCategories.forEach((category) => {
        const isActive = category.dataset.albumTarget === album
        category.classList.toggle("active", isActive)
        category.setAttribute("aria-pressed", isActive ? "true" : "false")
      })

      albumPiles.forEach((pile) => {
        const isActive = pile.dataset.album === album
        pile.hidden = !isActive
        pile.classList.toggle("active", isActive)

        if (isActive) {
          updatePile(pile)
        }
      })
    }

    albumPiles.forEach((pile) => {
      pileStates.set(pile.dataset.album, { offset: 0 })
      updatePile(pile)

      pile.addEventListener("click", (event) => {
        const photo = event.target.closest(".loose-photo")
        if (!photo || !photo.classList.contains("is-top")) return

        const photos = Array.from(pile.querySelectorAll(".loose-photo"))
        const state = pileStates.get(pile.dataset.album)
        photo.classList.add("is-moving")

        window.setTimeout(() => {
          state.offset = (state.offset + 1) % photos.length
          photo.classList.remove("is-moving")
          updatePile(pile)
        }, 160)
      })
    })

    albumCategories.forEach((category) => {
      category.addEventListener("click", () => {
        setActiveAlbum(category.dataset.albumTarget)
      })
    })
  }

  // Add fade-in animation to cards
  const cards = document.querySelectorAll(".card")
  if (cards.length > 0) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    cards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(card)
    })
  }

  // Add typing effect to hero title
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
})
