document.addEventListener("DOMContentLoaded", function(event) {
    const menuMob = document.getElementById('menuMobBtn'),
          btnMenuWrap = document.getElementById('menuMob'),
          menuNav = document.getElementById('header__nav');


        menuMob.addEventListener('click', function(ev){
		    ev.preventDefault();
		    let parent = this.parentElement;
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
            } else {
                parent.classList.add('active');
            }
            if (menuNav.classList.contains('active')) {
                menuNav.classList.remove('active');
            } else {
                menuNav.classList.add('active');
            }
	});
});

$(document).ready(function(){
    $('.intro').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
});