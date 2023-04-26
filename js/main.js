// 
// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');
let liHeader = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', rotateBurger); 

for(let i = 0; i < liHeader.length; i++ ) {
	if (window.innerWidth < 990 ) {
		liHeader[i].addEventListener('click', rotateBurger);
	}
}


function rotateBurger() { 
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
// ===============================

let portfolio2ImageBox = document.querySelectorAll('.portfolio2__image-box');
let portfolio2ImageBoxActive = document.querySelector('.portfolio2__image-box-active');
let body = document.querySelector('body');

for (let i = 0; i < portfolio2ImageBox.length; i++) {
	portfolio2ImageBox[i].addEventListener('click', portPrev);

	function portPrev() {

		if (window.innerWidth < 768 ) {
			body.classList.remove('body-popap');
			portfolio2ImageBox[i].classList.remove('portfolio2__image-box-active');
		} else {
			portfolio2ImageBox[i].classList.toggle('portfolio2__image-box-active');
			body.classList.toggle('body-popap');
		}

		// if (typeof portfolio2ImageBox === 'undefined') {
		// 	body.style.background = "#b2b2b2";
		// 	body.style.overflow = 'hidden';
		// }
	
	}
}





// for (let i = 0; i < portfolio2ImageBox.length; i++) {
// 	portfolio2ImageBox[i].addEventListener('click', portPrev);

// 	function portPrev() {
// 		for (let j = 0; j < portfolio2ImageBox.length; j++) {
// 			portfolio2ImageBox[j].classList.remove('portfolio2__image-box-active');
// 		}
// 		this.classList.add('portfolio2__image-box-active');
// 		console.log('kkkkk');
// 		body.style.background = "red";
// 		body.style.overflow = 'hidden';
// 	}
// }











	// portfolio2ImageBox[i].style.background = "red";
	// portfolio2ImageBox[i].style.padding = "5px";
	// window.onscroll = () => { window.scroll(0, 0); };
	// portfolio2ImageBoxActive[i].style.overflow = 'hidden';
	// if (portfolio2ImageBox === portfolio2__image-box-active) {
	// }
// ===============================

// ===========================================
// ========= slyder ==========
$('.slyder__box').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	arrow: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
		  breakpoint: 1400,
		  settings: {
			 slidesToShow: 2,
			 slidesToScroll: 1,
			 infinite: true,
			 dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1
		  }
		}
	 ]
 });

// =========== открыть отзыв ========

// let btnOtz = document.querySelectorAll('.slyder__btn');
// let textOtz = document.querySelectorAll('.slyder__item-text');
// let vrapOtz = document.querySelectorAll('.slyder__box-vrap');

// for (let i = 0; i < btnOtz.length; i++) {
// 	btnOtz[i].addEventListener('click', funcOtz);
// 	function funcOtz() {
// 		textOtz[i].style.overflow = 'auto';

// 		if (window.innerWidth > 400) {
// 			textOtz[i].style.paddingRight = '15px';
// 			vrapOtz[i].style.paddingLeft = '35px';
// 			vrapOtz[i].style.paddingRight = '10px';
// 		}
// 		if (window.innerWidth <= 400) {
// 			textOtz[i].style.paddingRight = '25px';
// 			vrapOtz[i].style.paddingLeft = '25px';
// 			vrapOtz[i].style.paddingRight = '3px';
// 		}

		
// 	}
// }



// отправка формы =============>
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо. Ваша заявка была отправлена.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
// ============================
// ===============================================

