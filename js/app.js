let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('[data-slayd]')
    const dots = document.querySelectorAll('[data-slayd-content]');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
let i = 1;
    setInterval(function(){
    currentSlide(i)
    i++;
    if (i == 7)
    {
        i = 1;
    }
},5000)

// ----- anchor(snoothScroll) -----

let smoothScroll = document.querySelectorAll('[data-scroll]');
for (anchor of smoothScroll) {
    if (anchor) {
        anchor.addEventListener('click', function(event){
            event.preventDefault();
            anchorID = this.getAttribute('data-scroll');
            document.querySelector(anchorID).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        })
    }
}

// ----- header fixed -----
	
let header = document.getElementById('header');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

	if( document.body.scrollTop > 100 // если количество прокрученных пикселей от вверха элемента body больше чем scrollPos 
		|| document.documentElement.scrollTop > 100) //позволяет получить доступ к коренному элементу документа/к вершине DOM-дерева. P.S. без этого не робит
	{
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
};

// ----- burger menu -----
 
const navToggle = document.querySelector('#nav_toggle');
const nav = document.querySelector('#nav');
    
navToggle.addEventListener('click', function(){
    navToggle.classList.toggle('active');
    nav.classList.toggle('active');
});
    