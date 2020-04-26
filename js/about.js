'use strict';

var splashScreen = document.getElementById("splashScreen");
var body = document.getElementById("body");
var nav = document.getElementById("nav");

var pos = 0;
var menuIcon = document.getElementById("menuIcon");
var menuSp = document.getElementById("menuSp");

window.onload = function () {
    splashScreen.style.display = "none";
    removeClass();
    addNavAnimation();
}

function addNavAnimation() {
    nav.classList.add("navAnimation");
}

function drower() {
    switch(pos){
      case 0 :
        menuSp.style.transform = "translateX(0)";
        pos = 100;
        menuIcon.classList.add('active');
        body.classList.add('hidden');
        break;
      case 100:
        menuSp.style.transform = "translateX(-205px)";
        pos = 0;
        menuIcon.classList.remove('active');
        body.classList.remove('hidden');
        break;
    }
  }

function removeClass() {
    body.classList.remove('noScroll');
}