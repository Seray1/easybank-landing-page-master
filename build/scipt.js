const header = document.querySelector("header")
const linksContainer = document.querySelector("nav")
const links = document.querySelector(".link")
const sections = document.querySelectorAll("section")
const sectionOne = document.getElementById("section-one")
const sectionTwo = document.getElementById("section-two")
const sectionThree = document.getElementById("section-three")
const firstSection = document.querySelector("article")
const inviteBtn = document.querySelector("btn-1")
const images = document.querySelector(".images")

console.log(images)

//Sticky navigation

const firstSectionObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.3,
})

function stickyNav(ent) {
  let entries = ent[0]

  if (!entries.isIntersecting) {
    header.classList.add("sticky")
    // images.classList.add("hidden")
    // images.classList.remove("lg:block")
  } else {
    header.classList.remove("sticky")
    // images.classList.remove("hidden")
    // images.classList.add("block")
  }
}

firstSectionObserver.observe(firstSection)

//Reveal on scroll

console.log(sections)

const revealSection = new IntersectionObserver(scrollReveal, {
  root: null,
  threshold: 0,
})

function scrollReveal(ent) {
  let entries = ent[0]
  if (entries.isIntersecting) {
    entries.target.classList.remove("section-hidden")
  }
  //else {
  //     entries.target.classList.add("section-hidden")
  //   }
}

for (i = 0; i < sections.length; i++) {
  sections[i].classList.add("section-hidden")
  revealSection.observe(sections[i])
}

//Smooth scrolling

linksContainer.addEventListener("click", function (e) {
  e.preventDefault()
  console.log("clicked")
  if (e.target.classList.contains("link")) {
    const toScroll = e.target.getAttribute("href")
    document.querySelector(toScroll).scrollIntoView({
      behavior: "smooth",
    })
  }
})
