'use strict';

var splashScreen = document.getElementById("splashScreen");
var body = document.getElementById("body");
var nav = document.getElementById("nav");

var pos = 0;
var menuIcon = document.getElementById("menuIcon");
var menuSp = document.getElementById("menuSp");

var photoNum;
var bookId;

var contentList = document.getElementById("contentList");
var contentImg = document.getElementById("contentImg");
var data = lookbook;

window.onload = function () {
    splashScreen.style.display = "none";
    removeClass();
    addNavAnimation();
    bookId = GetBookId();
    photoNum = GetPhotoNumber();
    view(bookId);
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
  for (var i = 0; i < photoNum; i++) {
    var imgNum = i + 1;
    contentList.insertAdjacentHTML('beforeend','<img id="bookImg" src=../data/lookbook/' + data + '/lookbook' + imgNum + '.jpg onclick=changeImg("' + data + '","' + imgNum + '") />');
  }
  contentImg.insertAdjacentHTML('beforeend','<img id="content" src=../data/lookbook/' + data + '/lookbook1.jpg />');
}

function changeImg(data, i){
    document.getElementById("content").src = "../data/lookbook/" + data + "/lookbook" + i + ".jpg";
};