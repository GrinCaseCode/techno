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
		arrows: true,
		dots: true,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.ns_tabs-main li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".ns_tab-container-main").find(".ns_tab-pane-main").hide();
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn();
	});


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


$(".ns_btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});