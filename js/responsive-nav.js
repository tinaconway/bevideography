$.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};


jQuery(document).ready(function(){
	"use strict";

	jQuery('#menu-button').click(function() {
			jQuery('#main-nav').slideFadeToggle();
			jQuery('#menu-close-button').toggleClass('toggle-inline');
			jQuery('#nav-button, span.hide').toggle();
	});

	if ( jQuery(window).width() < 960) {
	jQuery('#main-nav li a').click(function() {
			jQuery('#main-nav').slideFadeToggle();
			jQuery('#menu-close-button').toggleClass('toggle-inline');
			jQuery('#nav-button, span.hide').toggle();
	});
	}
  if ($(location).attr('href').indexOf('portfolio') > -1) {
    $('#show').removeClass('hide');
  }
  if ($(location).attr('href').indexOf('about') > -1) {
    $('#aboutSection').removeClass('hide');
  }
  // if ($(location).attr('href').indexOf('home') > -1) {
  //   $('#aboutSection').addClass('hide');
  // }


});
