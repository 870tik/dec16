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
    var bookId = GetBookId();
    var photoNum = GetPhotoNumber();
    for (var i = 0; i < photoNum; i++) {
        view(bookId, i + 1);
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

function GetBookId() {
    if (1 < window.location.search.length) {
      // 最初の1文字 (?記号) を除いた文字列を取得する
      var parameter = document.location.search.slice(1);
      return parameter;
    }
    return null;
  }

function GetPhotoNumber() {
if (1 < window.location.hash.length) {
    // 最初の1文字 (?記号) を除いた文字列を取得する
    var parameter = document.location.hash.slice(1);
    return parameter;
}
return null;
}

function view(data, i) {
    contentList.insertAdjacentHTML('beforeend','<img id="bookImg" src=../data/lookbook/' + data + '/lookbook' + [i] + '.jpg />');
}