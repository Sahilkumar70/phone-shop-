// Import GSAP library
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Smooth scroll function
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target)
  const targetPosition = targetElement.getBoundingClientRect().top
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href")
    smoothScroll(targetId, 1000)
  })
})

// Reveal animations for sections
gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  })
})

// Animate skill items
gsap.from(".skills li", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".skills",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
})

// Animate project items
gsap.from(".project", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
})

// Parallax effect for hero section
gsap.to(".hero", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
})

// Animate form inputs on focus
const formInputs = document.querySelectorAll("input, textarea")
formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    gsap.to(input, { scale: 1.05, duration: 0.3 })
  })
  input.addEventListener("blur", () => {
    gsap.to(input, { scale: 1, duration: 0.3 })
  })
})

// Cursor animation
const cursor = document.createElement("div")
cursor.classList.add("cursor")
document.body.appendChild(cursor)

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
  })
})

document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 1.5, duration: 0.3 })
  })
  el.addEventListener("mouseleave", () => {
    gsap.to(cursor, { scale: 1, duration: 0.3 })
  })
})

