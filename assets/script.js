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

const arrow_left = document.querySelector(".arrow_left")
const arrow_right = document.querySelector(".arrow_right")
const banner_img = document.querySelector(".banner-img")
const banner_txt = document.querySelector(".banner-txt")
const dots = document.querySelector(".dots")
const src_img = "./assets/images/slideshow/"
const nbSliders = slides.length

let i = 0

function updateCarrousel(i) {
	banner_img.setAttribute("src", src_img + slides[i].image)
	banner_txt.innerHTML = slides[i].tagLine
	
	for (compter = 0; compter < slides.length; compter++) {
		allDots[compter].classList.remove("dot_selected")		
	}
	allDots[i].classList.add("dot_selected")
}

//fleches 
arrow_left.addEventListener("click", () => {
	if (i > 0){
		i--
	} else {
		i = nbSliders - 1
	}
	updateCarrousel(i)
	console.log(i)
})

arrow_right.addEventListener("click", () => {
	if (i < nbSliders - 1 ) {
		i++		
	} else {
		i = 0
	}
	updateCarrousel(i)	
	console.log(i)
})



// dots
for (let compter = 0; compter < slides.length; compter++){
	let dot = document.createElement("div")
	dots.appendChild(dot) // mettre la balise div dans la balise avec la class dots
	dot.classList.add("dot") // ajouter la class dot
	if (compter === 0) {
		dot.classList.add("dot_selected")
	}	
}

const allDots = document.querySelectorAll(".dot")


