/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll

$(window).on('load', function(){
    if ($(".navbar").offset().top > 250) {
        // $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".brand-logo").css({"visibility": "visible"});
        $(".nav-header-bar").css({"visibility": "visible"});
    } else {
        // $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".brand-logo").css({"visibility": "hidden"});
        $(".nav-header-bar").css({"visibility": "hidden"});
    };    
});

$(window).scroll(function() {
    if ($(".navbar").offset().top > 250) {
        // $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".brand-logo").css("visibility", "visible");
        $(".nav-header-bar").css("visibility", "visible");
    } else {
        // $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".brand-logo").css("visibility", "hidden");
        $(".nav-header-bar").css("visibility", "hidden");
    };
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
// http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
// http://jsfiddle.net/kevinPHPkevin/8tLdq/1/
// # [ 20161106 - 00:52:49 ] - Tribal Live
// 	 • http://www.triballive.com/prelaunch/
// # [ 20161106 - 00:52:49 ] - Tribal Live
// 	 • http://192.168.0.100/tl/index.html#streaming
// # [ 20161106 - 00:52:49 ] - javascript - offsetting an html anchor to adjust for fixed header - Stack Overflow
// 	 • http://stackoverflow.com/questions/10732690/offsetting-an-html-anchor-to-adjust-for-fixed-header
// # [ 20161106 - 00:52:49 ] - Better Scroll-To Anchor Links — Jonathan Suh
// 	 • https://jonsuh.com/blog/better-scroll-to-anchor-links/
// # [ 20161106 - 00:52:49 ] - .position() | jQuery API Documentation
// 	 • https://api.jquery.com/position/
// # [ 20161106 - 00:52:49 ] - .scrollTop() | jQuery API Documentation
// 	 • https://api.jquery.com/scrollTop/
// # [ 20161106 - 00:52:49 ] - javascript - Smooth scroll to div id jQuery - Stack Overflow
// 	 • http://stackoverflow.com/questions/19012495/smooth-scroll-to-div-id-jquery
// # [ 20161106 - 00:52:49 ] - Edit fiddle - JSFiddle
// 	 • http://jsfiddle.net/kevinPHPkevin/8tLdq/1/

// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         event.preventDefault();
//         // var $anchor = $(this);
        
//         console.log("$('a.page-scroll').bind('click', function(event)");
//         // $('html, body').stop().animate({
//         //     // scrollTop: $($anchor.attr('href')).offset().top
//         //     // scrollTop: $( $.attr(this, 'href') ).offset().top            
//         //     // scrollTop: $( this.hash + "-title" ).position().top
//         //     scrollTop: $( this.hash + "-title" )[0].offsetTop
//         //     // scrollTop: ($($.attr(this, 'href')).offset().top - 88)
//         //     // scrollTop: ($($.attr(this, 'href')).position().offset().top)
//         //     // scrollTop: ($($anchor.attr('href')).offset().top + $('.nav-header-bar').outerHeight())            
//         //     // scrollTop: ($($.attr(this, 'href')).offset().top + $('.nav-header-bar').outerHeight())
//         // }, 1500, 'easeInOutExpo');
//         // // }, 500);

//         // console.log("########################################");
//     }); // END jQuery bind
// }); // END jQuery Function

// function getSpanCoords() {
//     console.log("Animate: " );
//     var bodyRect = document.body.getBoundingClientRect();
//     var rect = document.getElementById('about-anchor').getBoundingClientRect();
//     var offset = rect.top - bodyRect.top;
//     console.log("about t       :", rect.top, "r:", rect.right, "b:", rect.bottom, "l:", rect.left, "o:", offset);
//     var rect = document.getElementById('streaming-anchor').getBoundingClientRect();
//     var offset = rect.top - bodyRect.top;
//     console.log("streaming t   :", rect.top, "r:", rect.right, "b:", rect.bottom, "l:", rect.left, "o:", offset);
//     var rect = document.getElementById('studio-anchor').getBoundingClientRect();
//     var offset = rect.top - bodyRect.top;
//     console.log("studio t      :", rect.top, "r:", rect.right, "b:", rect.bottom, "l:", rect.left, "o:", offset);
//     var rect = document.getElementById('recorded-anchor').getBoundingClientRect();
//     var offset = rect.top - bodyRect.top;
//     console.log("recorded t    :", rect.top, "r:", rect.right, "b:", rect.bottom, "l:", rect.left, "o:", offset);
//     var rect = document.getElementById('distribution-anchor').getBoundingClientRect();
//     var offset = rect.top - bodyRect.top;
//     console.log("distribution t:", rect.top, "r:", rect.right, "b:", rect.bottom, "l:", rect.left, "o:", offset);
//     var rect = document.getElementById('contact-anchor').getBoundingClientRect();
//     var offset = rect.top - bodyRect.top;
//     console.log("contact t     :", rect.top, "r:", rect.right, "b:", rect.bottom, "l:", rect.left, "o:", offset);
//     console.log("header   : " + $('header.main-header').height());
//     console.log("header   : " + $('header.main-header').innerHeight());
//     console.log("header   : " + $('header.main-header').outerHeight(true));
//     console.log("about    :" + $('div.about-section').height());
//     console.log("about    :" + $('div.about-section').innerHeight());
//     console.log("about    :" + $('div.about-section').outerHeight(true));
//     console.log("streaming: " + $('div.streaming-section').height());
//     console.log("streaming: " + $('div.streaming-section').innerHeight());
//     console.log("streaming: " + $('div.streaming-section').outerHeight(true));
//     console.log("studio   :" + $('div.studio-section').height());
//     console.log("studio   :" + $('div.studio-section').innerHeight());
//     console.log("studio   :" + $('div.studio-section').outerHeight(true));
//     console.log("----------------------------------------");
//     console.log(document.getElementById('distribution-anchor').offsetTop);
//     console.log($('#distribution-anchor').position().top);
//     console.log($('#distribution-anchor').offset().top);
//     console.log("########################################");    
// }

// function getOffsetSum(elem) {
//   var top=0, left=0
//   while(elem) {
//     top = top + parseInt(elem.offsetTop)
//     left = left + parseInt(elem.offsetLeft)
//     elem = elem.offsetParent        
//   }
   
//   return {top: top, left: left}
// }


// function getOffsetRect(elem) {
//     var box = elem.getBoundingClientRect()
    
//     var body = document.body
//     var docElem = document.documentElement
    
//     var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
//     var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
    
//     var clientTop = docElem.clientTop || body.clientTop || 0
//     var clientLeft = docElem.clientLeft || body.clientLeft || 0
    
//     console.log(box.top + " : " + scrollTop + " : " + clientTop);

//     var top  = box.top +  scrollTop - clientTop
//     var left = box.left + scrollLeft - clientLeft
    
//     return { top: Math.round(top), left: Math.round(left) }
// }

// function getOffset(elem) {
//     if (elem.getBoundingClientRect) {
//         return getOffsetRect(elem)
//     } else { // old browser
//         return getOffsetSum(elem)
//     }
// }


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	// Do not display modal hash in Location Bar
    // window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// // Google Maps Scripts
// // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);
// google.maps.event.addDomListener(window, 'resize', function() {
//     map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
// });

// function init() {
//     console.log("Loading Map");
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 15,

//         // The latitude and longitude to center the map (always required)
//         center: new google.maps.LatLng(40.6700, -73.9400), // New York

//         // Disables the default Google Maps UI components
//         disableDefaultUI: true,
//         scrollwheel: false,
//         draggable: false,

//         // How you would like to style the map. 
//         // This is where you would paste any style found on Snazzy Maps.
//         styles: [{
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }]
//         }, {
//             "featureType": "landscape",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 20
//             }]
//         }, {
//             "featureType": "road.highway",
//             "elementType": "geometry.fill",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }]
//         }, {
//             "featureType": "road.highway",
//             "elementType": "geometry.stroke",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 29
//             }, {
//                 "weight": 0.2
//             }]
//         }, {
//             "featureType": "road.arterial",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 18
//             }]
//         }, {
//             "featureType": "road.local",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 16
//             }]
//         }, {
//             "featureType": "poi",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 21
//             }]
//         }, {
//             "elementType": "labels.text.stroke",
//             "stylers": [{
//                 "visibility": "on"
//             }, {
//                 "color": "#000000"
//             }, {
//                 "lightness": 16
//             }]
//         }, {
//             "elementType": "labels.text.fill",
//             "stylers": [{
//                 "saturation": 36
//             }, {
//                 "color": "#000000"
//             }, {
//                 "lightness": 40
//             }]
//         }, {
//             "elementType": "labels.icon",
//             "stylers": [{
//                 "visibility": "off"
//             }]
//         }, {
//             "featureType": "transit",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 19
//             }]
//         }, {
//             "featureType": "administrative",
//             "elementType": "geometry.fill",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 20
//             }]
//         }, {
//             "featureType": "administrative",
//             "elementType": "geometry.stroke",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }, {
//                 "weight": 1.2
//             }]
//         }]
//     };

//     // Get the HTML DOM element that will contain your map 
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('map');

//     // Create the Google Map using out element and options defined above
//     map = new google.maps.Map(mapElement, mapOptions);

//     // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
//     var image = 'img/marker.png';
//     var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
//     var beachMarker = new google.maps.Marker({
//         position: myLatLng,
//         map: map
//         // icon: image
//     });
// }


// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         // event.preventDefault();
//         var $anchor = $(this);
//         console.log("Click Pos:");
//         console.log($(document).scrollTop());
//         console.dir($(this));
//         console.log($(this.hash).position().top);
//         console.log(this.hash + " Pos: " + $(this.hash).scrollTop());
//         console.log(this.hash + " Pos: " + $(this.hash).offset().top);
//         console.log(this.hash + " Pos: " + $(this.hash).position().top);
//         console.log("h2" + this.hash + "-title Pos: " + $("h2" + this.hash + "-title").scrollTop());
//         console.log("h2" + this.hash + "-title Pos: " + $("h2" + this.hash + "-title").offset().top);
//         console.log("h2" + this.hash + "-title Pos: " + $("h2" + this.hash + "-title").position().top);
        
//         // https://www.kirupa.com/html5/get_element_position_using_javascript.htm
//         var myElement = document.querySelector(this.hash);
//         var elPosition = getPosition(myElement);
//         console.log("The image is located at: " + elPosition.x + ", " + elPosition.y);
//         // https://www.kirupa.com/html5/get_element_position_using_javascript.htm
        
//         // getElPos(this.hash + "-title");
//         console.log("about       : ");
//         console.log(getCoords("about-title"));
//         console.log("streaming   : ");
//         console.log(getCoords("streaming-title"));
//         console.log("studio      : ");
//         console.log(getCoords("studio-title"));
//         console.log("recorded    : ");
//         console.log(getCoords("recorded-title"));
//         console.log("distribution: ");
//         console.log(getCoords("distribution-title"));
//         console.log("contact     : ");
//         console.log(getCoords("contact-title"));

//         console.log("----------------------------------------")

//         $('html, body').stop().animate({
//             // scrollTop: $($anchor.attr('href')).offset().top
//             // scrollTop: $( $.attr(this, 'href') ).offset().top            
//             scrollTop: $( this.hash + "-title" ).position().top
//             // scrollTop: ($($.attr(this, 'href')).offset().top - 88)
//             // scrollTop: ($($.attr(this, 'href')).position().offset().top)
//             // scrollTop: ($($anchor.attr('href')).offset().top + $('.nav-header-bar').outerHeight())            
//             // scrollTop: ($($.attr(this, 'href')).offset().top + $('.nav-header-bar').outerHeight())
//         }, 1500, 'easeInOutExpo');
//         // }, 500);

//         console.log("Animate: " );
//         console.log($(this.hash + "-title"));
//         var itmObj = $(this.hash + "-title")[0];
//         console.dir(itmObj);        
//         console.log(itmObj.offsetTop);
//         console.log(itmObj.ownerDocument);
//         console.log(itmObj.tagName);

//         console.log("########################################")        
//     });

// function getElPos(elID) {
//     console.log("Stream Title Pos         : " + $(elID).position().top);
//     console.log("Stream Title Pos         : " + $(elID).scrollTop());
//     console.log("Stream Title Offset      : " + $(elID).offset().top);
//     console.log("Stream Title Win / Doc   : " + $(window).scrollTop() + ":" + $(document).scrollTop());
//     console.log("Stream Title Offset - Win: " + ($(elID).offset().top - $(window).scrollTop()));
//     console.log("Stream Title Offset - Doc: " + ($(elID).offset().top - $(document).scrollTop()));
// }

// function getCoords(elem) { // crossbrowser version
    
//     var elemById = document.getElementById(elem);
//     var box = elemById.getBoundingClientRect();

//     var body = document.body;
//     var docEl = document.documentElement;

//     var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
//     var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

//     var clientTop = docEl.clientTop || body.clientTop || 0;
//     var clientLeft = docEl.clientLeft || body.clientLeft || 0;

//     var top  = box.top +  scrollTop - clientTop;
//     var left = box.left + scrollLeft - clientLeft;

//     return { top: Math.round(top), left: Math.round(left) };
// }

// // https://www.kirupa.com/html5/get_element_position_using_javascript.htm
// function getPosition(el) {
//   var xPos = 0;
//   var yPos = 0;
 
//   while (el) {
//     if (el.tagName == "BODY") {
//       // deal with browser quirks with body/window/document and page scroll
//       var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
//       var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
//       xPos += (el.offsetLeft - xScroll + el.clientLeft);
//       yPos += (el.offsetTop - yScroll + el.clientTop);
//       console.log("body");
//       console.log(el);
//       console.log("Top Offset : " + el.offsetTop);
//       console.log("Top Scroll : " + el.scrollTop);
//       console.log("Top Client : " + el.clientTop);      
//       console.log("Y Scroll   : " + yScroll);
//       console.log("Y Pos      : " + yPos);

//     } else {
//       // for all other non-BODY elements
//       xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//       yPos += (el.offsetTop - el.scrollTop + el.clientTop);
//       console.log("other");
//       console.log(el);
//       console.log("Top Offset : " + el.offsetTop);
//       console.log("Top Scroll : " + el.scrollTop);
//       console.log("Top Client : " + el.clientTop);      
//       console.log("Y Scroll   : " + yScroll);
//       console.log("Y Pos      : " + yPos);
//     }
 
//     el = el.offsetParent;
//   }

//   return {
//     x: xPos,
//     y: yPos
//   };
// }

// // // deal with the page getting resized or scrolled
// // window.addEventListener("scroll", updatePosition, false);
// // window.addEventListener("resize", updatePosition, false);
 
// // function updatePosition() {
// //   // add your code to update the position when your browser
// //   // is resized or scrolled
// // }

//     // $('a[href*="#"]:not([href="#"])').click(function() {
//     //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//     //         var target = $(this.hash);
//     //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     //         if (target.length) {
//     //         $('html, body').animate({
//     //             scrollTop: target.offset().top
//     //         }, 1000);
//     //         return false;
//     //         }
//     //     }
//     // });

// });
// $(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      anchorClick = $('a.page-scroll'),
      isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed === true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }

  anchorClick.bind('click', function(event) {
          
    event.preventDefault();
    var $anchor = $(this);

    isClosed = true;
    hamburger_cross();
    // padding-left: 220px;
    $('#wrapper').removeClass('toggled');
    
    console.log("anchorClick.bind('click', function(event)");

    console.log("setTimeOut");
    setTimeout(function() {
      // $('html, body').stop().animate({
      $('html, body').animate({
          scrollTop: $($anchor.attr('href')).offset().top
          // scrollTop: $( this.hash + "-title" ).position().top
          // scrollTop: $( this.hash + "-title" )[0].offsetTop
          // scrollTop: ($($.attr(this, 'href')).offset().top - 88)
          // scrollTop: ($($.attr(this, 'href')).position().offset().top)
          // scrollTop: ($($anchor.attr('href')).offset().top + $('.nav-header-bar').outerHeight())            
          // scrollTop: ($($.attr(this, 'href')).offset().top + $('.nav-header-bar').outerHeight())
      }, 1500, 'easeInOutExpo');
      console.log("animate end");
      console.log("########################################");
    }, 500);

    console.log($(this));    
    console.log(this.hash);
    console.log(this.href);

    if (history.pushState) {
        console.log("history.pushState");
        history.pushState(null, null, this.href);
    }
    else {
        console.log("window.location.hash");
        window.location.hash = this.href;
    };

    console.log("anchorClick.bind('click', function(event) END");

    event.preventDefault();
        
  }); // END anchorClick

  // $(document).on('keydown',function(evt) {
  //     if (evt.keyCode == 27) {
  //       alert('Esc key pressed.');
  //     }
  // });
  // $(document).on('keyup',function(evt) {
  //     if (evt.keyCode == 27) {
  //       alert('Esc key pressed.');
  //     }
  // });
  // $(document).keydown(function( event ) {
  //   if ( event.which == 13 ) {
  //     event.preventDefault();
  //   }
  //   var msg = "Handler for .keydown() called " + xTriggered + " time(s).";
  //   // $.print( msg, "html" );
  //   // $.print( event );
  // });

  $(document).keypress(function(e) { 
      if (e.keyCode === 27) { 
          // $("#popdiv").fadeOut(500);          
          // window.close();
        $('#wrapper').toggleClass('toggled');
        hamburger_cross();          
      } 
  });

  $('.overlay').click(function () {
        $('#wrapper').toggleClass('toggled');
        hamburger_cross();
  });

  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
  
  // $('[data-toggle="menuclose"]').click(function () {
  //       $('#wrapper').toggleClass('toggled');
  //       hamburger_cross();
  // });
// });
// (function( $ ){
    // $.fn.hoverGrid = function( options ) {  
    // var settings = $.extend( {
    //     'itemClass' : '.item'
    // }, options);

    // return this.each(function() {       
    //     var hoverGrid = $(this);
    //     hoverGrid.addClass('hover-grid');
    //     hoverGrid.find(settings.itemClass).addClass('hover-grid-item');
        
    //     $(hoverGrid).find(settings.itemClass).hover(function () {
    //         $(this).find('div.caption').stop(false, true).fadeIn(200);
    //     },
    //     function () {
    //         $(this).find('div.caption').stop(false, true).fadeOut(200);
    //     });
    // });
    // };

    var jsonp = function(url)
    {
        var script = window.document.createElement('script');
        script.async = true;
        script.src = url;
        script.onerror = function()
        {
            alert('Can not access JSONP file.')
        };
        var done = false;
        script.onload = script.onreadystatechange = function()
        {
            if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete'))
            {
                done = true;
                script.onload = script.onreadystatechange = null;
                if (script.parentNode)
                {
                    return script.parentNode.removeChild(script);
                }
            }
        };
        window.document.getElementsByTagName('head')[0].appendChild(script);
    };

    var parse = function(data)
    {
        var column_length = data.table.cols.length;
        if (!column_length || !data.table.rows.length)
        {
            return false;
        }
        var columns = [],
            result = [],
            row_length,
            value;
        for (var column_idx in data.table.cols)
        {
            columns.push(data.table.cols[column_idx].label);
        }
        for (var rows_idx in data.table.rows)
        {
            row_length = data.table.rows[rows_idx]['c'].length;
            if (column_length != row_length)
            {
                // Houston, we have a problem!
                return false;
            }
            for (var row_idx in data.table.rows[rows_idx]['c'])
            {
                if (!result[rows_idx])
                {
                    result[rows_idx] = {};
                }
                value = !!data.table.rows[rows_idx]['c'][row_idx].v ? data.table.rows[rows_idx]['c'][row_idx].v : null;
                result[rows_idx][columns[row_idx]] = value;
            }
        }
        return result;
    };

    // var query = function(sql, callback)
    var query = function()
    {
        var sql = 'select *'; 
        var callback = 'my_callback_02';
        
        var url = 'http://spreadsheets.google.com/a/google.com/tq?',
            params = {
                key: '1ByfbMat_iwRgkYvo9bX1CCpkUuko4czMOp3grN9y3eM',
                tq: encodeURIComponent(sql),
                tqx: 'responseHandler:' + callback
            },
            qs = [];
        for (var key in params)
        {
            qs.push(key + '=' + params[key]);
        }
        url += qs.join('&');
        return jsonp(url); // Call JSONP helper function
        
    }

    var my_callback_02 = function(data) {
        console.log("Query")
        data = parse(data); // Call data parser helper function
        console.log(data);
        console.log(data.length);
        console.log(Object.keys(data[0]));
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            
            var Timestamp = element["Timestamp"];
            var videoTitle = element["Video Title"];
            var videoSubtitle = element["Video Subtitle"];
            var projectDate = element["Project Date"];
            var client = element["Client"];
            var category = element["Category"];
            var videoThumbnail = element["Video Thumbnail"];
            var videoURL = element["Video URL"];
            var description = element["Description"];

            // var divItem  = "                    <div class=\"col-md-3 col-sm-6 gallery-item\">";
            var divItem  = "                    <div class=\"col-md-4 col-sm-6 gallery-item\">";
                // divItem += "                        <a href=\"#vidModal\" class=\"streaming-link\" data-toggle=\"modal\">";
                divItem += "                        <a href=\"" + videoURL + "\" class=\"gallery-link\" target=\"_blank\">";
                divItem += "                            <div class=\"gallery-hover\">";
                divItem += "                                <div class=\"gallery-hover-content\">";
                divItem += "                                    <i class=\"fa fa-plus fa-3x\"></i>";
                divItem += "                                </div>";
                divItem += "                            </div>";
                // divItem += "                            <img src=\"" + videoThumbnail + "\" class=\"img-responsive img-centered\" width=\"400px\" height=\"289px\" alt=\"" + videoTitle + "\" title=\"" + videoTitle + "\">";
                divItem += "                            <img src=\"" + videoThumbnail + "\" class=\"img-centered\" style=\"display: block; width: 100%; height: 100%;\" alt=\"" + videoTitle + "\" title=\"" + videoTitle + "\">";
                divItem += "                        </a>";
                divItem += "                        <div class=\"gallery-caption\">";
                divItem += "                            <h4>" + videoTitle + "</h4>";
                divItem += "                            <p class=\"text-muted videos\">" + description + "</p>";
                divItem += "                        </div>";
                divItem += "                    </div>";

            // var divItem  = "				<div class=\"item\">";
            //     divItem += "					<img width=\"181\" height=\"181\" src=\"" + videoThumbnail + "\" alt=\"" + videoTitle + "\" title=\"" + videoTitle + "\" />";
            //     divItem += "					<a href=\"" + videoURL + "\" target=\"_blank\">";
            //     divItem += "					<div class=\"caption\" style=\"display: none;\">";
            //     divItem += "						<h2>" + videoTitle + "</h2>";
            //     // divItem += "						<h3>" + videoSubtitle + "</h3>";
            //     divItem += "						<p>" + description + "</p>";
            //     divItem += "					</div>";
            //     divItem += "					</a>";
            //     divItem += "				</div>";

            $("#vidGrid").append(divItem);

            // for(property in element) {
            //     console.log(property + " = " + element[property]);
            // }
            // for(property in data[index]) {
            //     console.log(property + " = " + data[index][property]);
            // }
        } // END for
        // $('#vidGrid').hoverGrid();        
        $( "div" ).remove( "#vidLoader" );
    }

    // $(document).ready(function(){
        // query('select * where a = "hello" and b = "world" limit 20', 'my_callback_02');
        // query('select * limit 20', 'my_callback_02');
        // query('select *', 'my_callback_02');
    // });

// })( jQuery );