'use strict';

var splashScreen = document.getElementById("splashScreen");
var body = document.getElementById("body");
var nav = document.getElementById("nav");

var pos = 0;
var menuIcon = document.getElementById("menuIcon");
var menuSp = document.getElementById("menuSp");


var contentList = document.getElementById("contentList");
var data = lookbook;

window.onload = function () {
    splashScreen.style.display = "none";
    removeClass();
    addNavAnimation();
    for (var i = 0; i < data.length; i++) {
        view(data[i]);
    }
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

function view(data) {
    contentList.insertAdjacentHTML('beforeend','<a href="./book.html?' + data.id + '#' + data.photonum + '" class="thumnailBox" target="blank" ><img id="bookImg" src=' + data.thumnail + ' /><p id="bookTitle">' + data.name + '</p></a>');
}