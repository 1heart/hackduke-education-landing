var navbarPos = 0;
var isDesktop = true;

$(window).ready(function() {
  updateNavbarPos();
});

$(window).on('resize', function() {
  updateNavbarPos();
});

function updateNavbarPos() {
  isDesktop = window.innerWidth > 1000;
  if (isDesktop) {
    if ($("#navbar-main").hasClass("navbar-fixed-top")) {
      $("#navbar-main").removeClass("navbar-fixed-top");
      navbarPos = $("#navbar-main").position().top;
      $("#navbar-main").addClass("navbar-fixed-top");
    }
    else {
      navbarPos = $("#navbar-main").position().top;
    }
  }
  else {
    navbarPos = 0;
  }
}

$(window).bind('scroll', function(e) {
  updateNavbarPos();
  if ($(window).scrollTop() > navbarPos) {
    $('#navbar-main').addClass('navbar-fixed-top');
  }
  else {
    $('#navbar-main').removeClass('navbar-fixed-top');
  }
});

$(document).ready(function() {
  widthChangeContent();
  widthChangeNavbar();
});
$(window).on('resize', function(){
  widthChangeContent();
  widthChangeNavbar();
});

function widthChangeContent() {
  // var isDesktop = window.innerWidth >= 1000;
  // navbarPos = isDesktop ? $("#navbar-main").position().top : 0;
  var mobileElems = document.getElementsByClassName('mobile')
  var desktopElems = document.getElementsByClassName('desktop')
  var inlineDesktopElems = document.getElementsByClassName('inline-desktop')
  for(var i = 0; i < mobileElems.length; i++) {
    mobileElems[i].style.display = isDesktop ? 'none' : 'block';
  }
  for(var i = 0; i < desktopElems.length; i++) {
    desktopElems[i].style.display = isDesktop? 'block' : 'none';
  }
  for(var i = 0; i < inlineDesktopElems.length; i++) {
    inlineDesktopElems[i].style.display = isDesktop? 'inline-block' : 'none';
  }
}

function widthChangeNavbar() {
  var isDesktop = window.innerWidth >= 768;
  var mobileElems = document.getElementsByClassName('mobile-navbar');
  var desktopElems = document.getElementsByClassName('desktop-navbar');
  for(var i = 0; i < mobileElems.length; i++) {
    mobileElems[i].style.display = isDesktop ? 'none' : 'block';
  }
  for(var i = 0; i < desktopElems.length; i++) {
    desktopElems[i].style.display = isDesktop? 'block' : 'none';
  }
}

$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top-50
    }, 1000, 'swing');
    event.preventDefault();
  });
});
