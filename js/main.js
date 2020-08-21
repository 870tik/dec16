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
    console.log(items)
    for (let i = 0; i < items.length; i++) {
        $('#item__slider').append('<a class="item" href="' + items[i].url + '"><img src=' + items[i].photo + ' /><p class="item__slider__name">' + items[i].name + '</p><p class="item__slider__price">' + items[i].price + '</p></a>');
    }
    for (let i = 0; i < data.length; i++) {
        $('#top__slider').append('<img src="' + data[i].top + '" alt="' + data[i].name + '" />');
    }
    $('#top__slider').slick({
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>'
    });
    $('#top__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        itemInfo.innerHTML = 
            '<div class="item__info__textBox"><p class="item__info__textBox-season">' + data[currentSlide].season + '</p><p class="item__info__textBox-name">' + data[currentSlide].name + '</p><p class="item__info__textBox-price">' + data[currentSlide].price + '</p></div><img src="' + data[currentSlide].photo + '" alt="' + data[currentSlide].name + '" />'
        deg = -180 * -currentSlide
        decLogo.style.transform = "rotate(" + deg + "deg)"
    });
});


function view(data) {
    if(data.status === 0) {
        itemList.insertAdjacentHTML('beforeend','<div class="item"><a href=' + data.url + ' class="onSale" target="blank"><img id="itemImg" src=' + data.photo + ' /><p id="itemTitle">' + data.name + '</p><p id="itemPrice">' + data.price + '</p></a></div>');
    } else if(data.status === 1) {
        itemList.insertAdjacentHTML('beforeend','<div class="item"><div class="soldout"><img id="itemImg" src=' + data.photo + ' /><p id="itemTitle">' + data.name + '</p><p id="itemPrice">' + data.price + '</p></div><p id="itemStatus" class="red">SOLD OUT</p></div>');
    } else {
        itemList.insertAdjacentHTML('beforeend','<div class="item"><div class="commingsoon"><img id="itemImg" src=' + data.photo + ' /><p id="itemTitle">' + data.name + '</p><p id="itemPrice">' + data.price + '</p></div><p id="itemStatus" class="red">SOLD OUT<br>近日入荷予定</p></div>');
    }
  }


function drower() {
    switch(pos){
      case 0 :
        menuSp.style.transform = "translateX(0)";
        pos = 100;
        $('#menuIcon').addClass('active');
        $('body').addClass('hidden');
        break;
      case 100:
        menuSp.style.transform = "translateX(-205px)";
        pos = 0;
        $('#menuIcon').removeClass('active');
        $('body').removeClass('hidden');
        break;
    }
  }
