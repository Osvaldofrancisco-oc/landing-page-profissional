// Menu hamburguer
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
const nav = document.querySelector<HTMLElement>('header nav')

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('active')

    nav.classList.toggle('active')
    menuToggle.setAttribute('aria-expanded', String(!isOpen))
  })
}

// Highlight do link ativo no scroll
const sections = document.querySelectorAll<HTMLElement>('main section[id]')
const navLinks = document.querySelectorAll<HTMLAnchorElement>('header nav a')

const highlightActiveLink = () => {
  let currentSection = ''

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id') ?? ''
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active')
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active')
    }
  })
}

window.addEventListener('scroll', highlightActiveLink)