/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(window).scroll(function(){$(".navbar").offset().top>50?($(".navbar-fixed-top").addClass("top-nav-collapse"),$(".navbar-brand").css("visibility","visible")):($(".navbar-fixed-top").removeClass("top-nav-collapse"),$(".navbar-brand").css("visibility","hidden"))}),$(function(){$("a.page-scroll").bind("click",function(a){var o=$(this);$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top},1500,"easeInOutExpo"),a.preventDefault()})}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$("a").mouseup(function(){$(this).blur()}),$("body").scrollspy({target:".navbar-fixed-top"}),$("div.modal").on("show.bs.modal",function(){var a=this,o=a.id;window.location.hash=o,window.onhashchange=function(){location.hash||$(a).modal("hide")}});