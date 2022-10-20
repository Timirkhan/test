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
