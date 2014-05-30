// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .

$(document).ready(function() { 

	$.fn.followTo = function (pos) {
    var $this = this,
      $window = $(window);

  $window.scroll(function (e) {
    if ($window.scrollTop() > pos) {
      $this.css({
          position: 'absolute',
          top: pos
       });
    } else {
        $this.css({
          position: 'fixed',
          top: 0
        });
      }
    });
	};

	$('.name').followTo(710);

});
