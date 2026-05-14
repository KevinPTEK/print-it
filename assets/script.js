const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft  = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const bannerImg  = document.querySelector(".banner-img")
const bannerTxt  = document.querySelector(".banner-txt")
const dots       = document.querySelector(".dots")
const srcImg     = "./assets/images/slideshow/"
const nbSliders  = slides.length
 
let currentIndex = 0
 
 
// Initialisation
 
function initCarousel() {
	createDots()
 
	arrowLeft.addEventListener("click", () => {
		currentIndex = previousIndex()
		renderCarousel()
	})
 
	arrowRight.addEventListener("click", () => {
		currentIndex = nextIndex()
		renderCarousel()
	})
 
	renderCarousel()  // affichage initial
}
 
 
// Fonctions utilitaires
 
function createDots() {
	for (let i = 0; i < nbSliders; i++) {
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot)
	}
}
 
function renderCarousel() {
	updateBanner()
	updateDots()
}
 
function updateBanner() {
	bannerImg.setAttribute("src", srcImg + slides[currentIndex].image)
	bannerTxt.innerHTML = slides[currentIndex].tagLine
}
 
function updateDots() {
	const allDots = document.querySelectorAll(".dot")
	for (let i = 0; i < allDots.length; i++) {
		allDots[i].classList.remove("dot_selected")
	}
	allDots[currentIndex].classList.add("dot_selected")
}

function nextIndex() {
	return (currentIndex + 1) % nbSliders
}

function previousIndex() {
	return (currentIndex - 1 + nbSliders) % nbSliders
}
 
 
// Lancement

initCarousel()