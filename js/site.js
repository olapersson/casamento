"use-strict";

// Typekit
(function() {
  var config = {
    kitId: 'edc4ori',
scriptTimeout: 3000
  };
  var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
})();

// Google Map
function initMap() {
  if ($("#map").length < 1)
    return;

  var map;
  var centerPosition = new google.maps.LatLng(57.672032,11.814423),
      lillaBommenPosition = new google.maps.LatLng(57.711644, 11.966171),
      elfsborgPosition = new google.maps.LatLng(57.685544,11.838375)
      bottoPosition = new google.maps.LatLng(57.64884,11.719762);

  var style = [{
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road",
  "stylers": [{
    "visibility": "off"
  }, {
    "color": "#ffffff"
  }]
  }, {
    "featureType": "road.arterial",
  "stylers": [{
    "visibility": "off"
  }, {
    "color": "#fee379"
  }]
  }, {
    "featureType": "road.highway",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#dddddd"
    }]
  }, {
    "featureType": "landscape",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#f3f4f4"
    }]
  }, {
    "featureType": "water",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#333333"
    }]
  }, {}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [{
      "visibility": "off"
    }, {
      "color": "#83cead"
    }]
  }, {
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [{
      "weight": 0.9
    }, {
      "visibility": "off"
    }]
  }]

  var options = {
    zoom: 10,
    center: centerPosition,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map($('#map')[0], options);
  map.setOptions({
    styles: style
  });

  var image = {
    url: '/images/marker-a.png',
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(12, 42)
  };

  var shadow = {
    url: '/images/marker-shadow.png',
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(5, 35)
  };

  var markerB = $.extend({}, image, { url: '/images/marker-b.png' }),
      markerC = $.extend({}, image, { url: '/images/marker-c.png' });

  var lillaBommen = new google.maps.Marker({
    position: lillaBommenPosition,
      map: map,
      icon: image,
      shadow: shadow
  });

  var elfsborg = new google.maps.Marker({
    position: elfsborgPosition,
      map: map,
      icon: markerB,
      shadow: shadow
  });

  var botto = new google.maps.Marker({
    position: bottoPosition,
      map: map,
      icon: markerC,
      shadow: shadow
  });


}

var menu = {

  toggle: $(".menu .title"),

  menu: $(".menu li").not(".title"),

  init: function() {
    this.setInitialStatus();
    $(window).resize($.proxy(this.setInitialStatus, this));
    this.toggle.on("click", $.proxy(this.toggleMenu, this));
  },

  toggleMenu: function() {
    (this.toggle.hasClass("closed")) ?
      this.open() : this.close();
  },

  close: function() {
    this.menu.hide();
    this.toggle.addClass("closed");
  },

  open: function() {
    this.menu.show();
    this.toggle.removeClass("closed");
  },

  setInitialStatus: function(e) {
    var width = $(window).width();

    (width > 768) ? this.open() : this.close();
  }

}


//Init stuff
jQuery(document).ready(function () {
  initMap();
  menu.init();
});

