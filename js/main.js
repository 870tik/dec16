'use strict';

var itemList = document.getElementById("itemList");

const pics_src = ["data/assets/top_img_1.jpg","data/assets/top_img_2.jpg"];
let num = 0;

var splashScreen = document.getElementById("splashScreen");
var body = document.getElementById("body");
var nav = document.getElementById("nav");

var pos = 0;
var menuIcon = document.getElementById("menuIcon");
var menuSp = document.getElementById("menuSp");

window.onload = function () {
    setInterval(slideshow_timer, 5000);
    setTimeout(removeSplashscreen, 1700);
    setTimeout(removeClass, 3000);
    setTimeout(addNavAnimation, 2300);
    var data = reiwa_2_ss;
    for (var i = 0; i < data.length; i++) {
        view(data[i]);
    }
}

function view(data) {
    if(data.status === 0){
        itemList.insertAdjacentHTML('beforeend','<div class="item"><a href=' + data.url + ' class="onSale" target="blank"><img id="itemImg" src=' + data.photo + ' /><p id="itemTitle">' + data.name + '</p><p id="itemPrice">' + data.price + '</p></a></div>');
    } else if(data.status === 1){
        itemList.insertAdjacentHTML('beforeend','<div class="item"><div class="soldout"><img id="itemImg" src=' + data.photo + ' /><p id="itemTitle">' + data.name + '</p><p id="itemPrice">' + data.price + '</p></div><p id="itemStatus" class="red">SOLD OUT</p></div>');
    } else {
        itemList.insertAdjacentHTML('beforeend','<div class="item"><div class="commingsoon"><img id="itemImg" src=' + data.photo + ' /><p id="itemTitle">' + data.name + '</p><p id="itemPrice">' + data.price + '</p></div><p id="itemStatus" class="red">SOLD OUT<br>近日入荷予定</p></div>');
    }
  }

function slideshow_timer(){
    if (num === 3){
        document.getElementById("myImg1").style.opacity = 0;
        document.getElementById("myImg2").style.opacity = 0;
        document.getElementById("myImg3").style.opacity = 3;
        num = 0;
    } else if (num === 2) {
        document.getElementById("myImg1").style.opacity = 1;
        document.getElementById("myImg2").style.opacity = 0;
        document.getElementById("myImg3").style.opacity = 0;
        num ++;
    } else if (num === 1) {
        document.getElementById("myImg1").style.opacity = 0;
        document.getElementById("myImg2").style.opacity = 1;
        document.getElementById("myImg3").style.opacity = 0;
        num ++;
    } else {
        document.getElementById("myImg1").style.opacity = 1;
        document.getElementById("myImg2").style.opacity = 0;
        document.getElementById("myImg3").style.opacity = 0;
        num ++;
    }
}

function removeSplashscreen() {
    $('#splashScreen').addClass('animation');
}

function addNavAnimation() {
    $('nav').addClass('navAnimation');
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

function removeClass() {
    body.classList.remove('noScroll');
}