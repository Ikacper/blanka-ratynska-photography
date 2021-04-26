const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav__links');
const navSocialMedia = document.querySelector('.nav__socialmedia');
const cross = document.querySelector('.nav__links > li');

burger.addEventListener('click', ()=> {
	navLinks.classList.toggle('nav-active');
	navSocialMedia.classList.toggle('nav-active');
	cross.classList.toggle('cross-rotate');
})

cross.addEventListener('click', () => {
	navLinks.classList.toggle('nav-active');
	navSocialMedia.classList.toggle('nav-active');
	cross.classList.toggle('cross-rotate');
})
