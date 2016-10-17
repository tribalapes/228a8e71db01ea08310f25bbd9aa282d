/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(window).scroll(function(){$(".navbar").offset().top>250?$(".brand-logo").css("visibility","visible"):$(".brand-logo").css("visibility","hidden")}),$(function(){$("a.page-scroll").bind("click",function(o){var i=$(this);$("html, body").stop().animate({scrollTop:$(i.attr("href")).offset().top},1500,"easeInOutExpo"),o.preventDefault()})}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$("a").mouseup(function(){$(this).blur()}),$("body").scrollspy({target:".navbar-fixed-top"}),$("div.modal").on("show.bs.modal",function(){var o=this,i=o.id;window.location.hash=i,window.onhashchange=function(){location.hash||$(o).modal("hide")}});