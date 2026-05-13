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
 
let indexActuel = 0
 
 

// Initialisation
 
function init() {
	createDots()
	updateCarrousel(0)
}

// Fonctions
 
function updateCarrousel(index) {
	updateBanner(index)
	updateDots(index)
}

function updateBanner(index) {
	bannerImg.setAttribute("src", srcImg + slides[index].image)
	bannerTxt.innerHTML = slides[index].tagLine
}
 
function createDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot)
	}
}

function updateDots(index) {
	const allDots = document.querySelectorAll(".dot")
	for (let i = 0; i < allDots.length; i++) {
		allDots[i].classList.remove("dot_selected")
	}
	allDots[index].classList.add("dot_selected")
}
 
// Événements
 
arrowLeft.addEventListener("click", () => {
	if (indexActuel > 0){
		indexActuel--
	} else {
		indexActuel = nbSliders - 1
	}
	updateCarrousel(indexActuel)
})

arrowRight.addEventListener("click", () => {
	if (indexActuel < nbSliders - 1 ) {
		indexActuel++		
	} else {
		indexActuel = 0
	}
	updateCarrousel(indexActuel)
})
 
// Lancement
 
init()