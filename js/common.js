$(document).ready(function() {


//прилипающие меню
var $menu = $(".ns_header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("ns_default") ){
		$menu.removeClass("ns_default").addClass("ns_fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("ns_fixed")) {
		$menu.removeClass("ns_fixed").addClass("ns_default");
	}
	
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("ns_default") ){
	$menu.removeClass("ns_default").addClass("ns_fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("ns_fixed")) {
	$menu.removeClass("ns_fixed").addClass("ns_default");
}
	//кнопка sandwich
	$(".ns_btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".ns_nav").is(":hidden")) {
			$(".ns_nav").slideDown(200);
		} else {
			$(".ns_nav").slideUp(200);
		}
		
	});

	$(".ns_nav a").click(function() {
		$(".ns_nav").slideUp(200);
		$(".sandwich").removeClass("active");
	});


	$("#fl_inp").change(function(){
		var filename = $(this).val().replace(/.*\\/, "");
		$("#fl_nm").html(filename);
	});
	/*высота блока по экрану*/
	function heightDetect() {
		$('.ns_nav').css("height", $(window).height() -$(".ns_header").height() + 40);
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//слайдер

	$('.ns_slider-billbord').slick({
		arrows: false,
		dots: false,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.ns_slider-production').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.ns_slider-for').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		asNavFor: '.ns_slider-nav',
		slidesToScroll: 1,

	});

	$('.ns_slider-nav').slick({
		slidesToShow: 3,
		vertical: true,
		verticalSwiping: true,
		slidesToScroll: 1,
		asNavFor: '.ns_slider-for',
		arrows: true,
		dots: false,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				vertical: false,
				verticalSwiping: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				vertical: false,
				verticalSwiping: false,
			}
		}
		]
	});

	$('.ns_slider-video').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.ns_slider-portfolio').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.ns_slider-partners').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 993,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
			}
		}
		]
	});

	/*видео в слайдере*/
	$('.ns_slider-video').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$('.slick-current iframe').attr('src', $('.slick-current iframe').attr('src'));
		$('.slick-current .ns_slider-video__item').removeClass("active");
	});

	$('.ns_slider-video__item').click(function() {
		$(this).addClass("active");


	});

	$('.ns_tabs-main li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".ns_tab-container-main").find(".ns_tab-pane-main").removeClass("active");
		var selectTab = $(this).attr("href");
		$(selectTab).addClass("active");
	});


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
    helpers:  {
      overlay : {
        locked : false
      }
    }
  });

	$(".ns_btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();

});

/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


