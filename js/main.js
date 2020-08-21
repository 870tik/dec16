'use strict';

var pos = 0;
var menuIcon = document.getElementById("menuIcon");
var menuSp = document.getElementById("menuSp");

var decLogo = document.getElementById("logo__Dec");
var topSlider = document.getElementById("top__slider");
var itemSlider = document.getElementById("item__slider");
var itemInfo = document.getElementById("item__info");

var items = item

if(window.innerWidth < 900) {
    var data = top_slider_sp;
} else {
    var data = top_slider_pc;
}
var deg = 0

$(document).ready(function(){
    for (let i = 0; i < items.length; i++) {
        $('#item__slider').append('<a class="item" href="' + items[i].url + '"><img src=' + items[i].photo + ' /><p class="item__slider__name">' + items[i].name + '</p><p class="item__slider__price">' + items[i].price + '</p></a>');
    }
    for (let i = 0; i < data.length; i++) {
        $('#top__slider').append('<img src="' + data[i].top + '" alt="' + data[i].name + '" />');
    }
    $('#top__slider').slick({
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img class="slick-arrow-img" src="./data/assets/arrow_left.svg" alt="矢印左" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="slick-arrow-img" src="./data/assets/arrow_right.svg" alt="矢印右" /></button>'
    });
    $('#top__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        itemInfo.innerHTML = 
            '<div class="item__info__textBox"><p class="item__info__textBox-season">' + data[currentSlide].season + '</p><p class="item__info__textBox-name">' + data[currentSlide].name + '</p><p class="item__info__textBox-price">' + data[currentSlide].price + '</p></div><img src="' + data[currentSlide].photo + '" alt="' + data[currentSlide].name + '" />'
        deg = -180 * -currentSlide
        decLogo.style.transform = "rotate(" + deg + "deg)"
    });
});
