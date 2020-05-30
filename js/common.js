$(document).ready(function() {

/* main 페이지 */
	$(".main").hover(function(){
		$(".logo").animate({
			opacity:1
		}, 2000, function() {
		});
		$("#more").animate({
			bottom:"90px",
			opacity:1
		}, 1000, function() {
		});
		$("#more").hover(function(){
		  $("#more").effect("bounce", { direction:'down', times:20 }, 3000);
		});
	});
	$("header > h1").click(function(){
		$(".logo").animate({
			opacity:1
		}, 2000, function() {
		});
		$("#more").animate({
			bottom:"90px",
			opacity:1
		}, 1000, function() {
		});
		$("#more").hover(function(){
		  $("#more").effect("bounce", { direction:'down', times:20 }, 3000);
		});
	});
	
/* gallery 페이지 */
	$(".a1").click(function(){
		$(this).attr("src", "images/a1_3.jpg");
	});
	$(".a2").click(function(){
		$(this).attr("src", "images/a2_2.jpg");
	});
	$(".a3").click(function(){
		$(this).attr("src", "images/a3_3.jpg");
	});
	$(".a4").click(function(){
		$(this).attr("src", "images/a4_2.jpg");
	});
	$(".a5").click(function(){
		$(this).attr("src", "images/a6_2.jpg");
	});
	$(".a6").click(function(){
		$(this).attr("src", "images/a6_3.jpg");
	});

/* capability 페이지 */
	$("#capability_cilck").click(function(){
		$(".as").effect("bounce", { direction:'down', times:20 }, 3000);
	});
	$(".acc1").click(function(){
		$(".acc1").effect("bounce", { direction:'down', times:10 }, 3000);
	});
	$(".acc2").click(function(){
		$(".acc2").effect("bounce", { direction:'top', times:4 }, 3000);
	});
	$(".acc3").click(function(){
		$(".acc3").effect("bounce", { direction:'top', times:15 }, 3000);
	});
	$(".acc4").click(function(){
		$(".acc4").effect("bounce", { direction:'down', times:10 }, 3000);
	});
	$(".acc5").click(function(){
		$(".acc5").effect("bounce", { direction:'down', times:20 }, 3000);
	});

/* portfolio 페이지 */
	var current = 0; 
    var currentB = 0;
    var targetB;
	$(".itemList .wrapBox > ul >li").click(function(){
		current = $(this).index();
	  
		imageSet();
		thumbSet();
	});
	function imageSet() {
		$(".itemViewLeft .itemBig > div").each(function(i){
			if(i == current){
				$(this).fadeIn(500);         
         	}else{
            	$(this).hide();      
         	};
		});   
	};
	function thumbSet(){
		$(".itemList .wrapBox > ul > li").each(function(i){
			if(i == current){
				$(this)	.addClass("on");
			}else{
				$(this).removeClass("on");
			};
        });
	};
	imageSet();
	
/* account 페이지 */
	$(".account_txt1").hover(function(){
		$(".account_txt1").css({
			"font-size":"26px", "text-wight":"bold"
		}, 800, function() {
		});
	});	
	$(".account_txt2").hover(function(){
		$(".account_txt2").css({
			"font-size":"26px", "text-wight":"bold"
		}, 800, function() {
		});
	});	
	$(".account_txt3").hover(function(){
		$(".account_txt3").css({
			"font-size":"26px", "text-wight":"bold"
		}, 800, function() {
		});
	});	
	

	var targetH = 900;
		$("header > h1").click(function(){
			$("body, html").stop().animate({scrollTop :1}, 1000 ,"easeInOutQuint");
		});
		$(".prtfolio4").click(function(){
			$("body, html").stop().animate({scrollTop :1}, 1000 ,"easeInOutQuint");
		});
		$("header > nav > ul >li:eq(0)").click(function(){
			$("body, html").stop().animate({scrollTop : targetH *1}, 1000 ,"easeInOutQuint");
		});
		$("#more").click(function(){
			$("body, html").stop().animate({scrollTop : targetH *1}, 1000 ,"easeInOutQuint");
		});
		$("header > nav > ul >li:eq(1)").click(function(){
			$("body, html").stop().animate({scrollTop : targetH *2+-25}, 1000 ,"easeInOutQuint");
		});
		$("header > nav > ul >li:eq(2)").click(function(){
			$("body, html").stop().animate({scrollTop : targetH *3+-45}, 1000,"easeInOutQuint");
		});
		$("header > nav > ul >li:eq(3)").click(function(){
			$("body, html").stop().animate({scrollTop : targetH *4+-110}, 1000,"easeInOutQuint");
		});
		$("header > nav > ul >li:eq(4)").click(function(){
			$("body, html").stop().animate({scrollTop : targetH *5+-500}, 1000,"easeInOutQuint");
		});
		$("header > nav > ul >li:eq(5)").click(function(){
			$("body, html").stop().animate({scrollTop : targetH *6+-450}, 1000,"easeInOutQuint");
		});
		$(window).scroll(function () { 
			console.log($(window).scrollTop());
		});

	$(window).scroll(function(){
		if($(document).scrollTop() > 0 && $(document).scrollTop() < 836){
			$("header > nav > ul >li:eq(0) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"})
			$("header > nav > ul >li:eq(1) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(2) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(3) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(4) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(5) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			
		}else if($(document).scrollTop() > 836 && $(document).scrollTop() < 1713){
		    $("header").show();
		  	$("header > nav > ul >li:eq(0) > a ").css({"font-weight":"bold", "text-decoration":"underline", "color":"#fff"});
			$("header > nav > ul >li:eq(1) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(2) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(3) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(4) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(5) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			
			$("#intro").animate({
				bottom:"60px",
				opacity:1
			}, 800, function() {
			});
			$("#intro_img").animate({
				left:"1010px",
				opacity:1
			}, 1700, function() {
			});
			$("#intro_txt").animate({
				right:"430px",
				opacity:1
			}, 1500, function() {
			});
		
		}else if($(document).scrollTop() > 1713 && $(document).scrollTop() < 2604){
			
		    $("header").show();
			$("header > nav > ul >li:eq(0) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(1) > a ").css({"font-weight":"bold", "text-decoration":"underline", "color":"#fff"});
			$("header > nav > ul >li:eq(2) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(3) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(4) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(5) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});

			$("#gallery").animate({
				bottom:"40px",
				opacity:1
			}, 300, function() {
			});
			$("#gallery_ul").animate({
				bottom:"120px",
				opacity:1
			}, 800, function() {
			});
		
		}else if($(document).scrollTop() > 2604 && $(document).scrollTop() < 3488){
			$("header").show();
			$("header > nav > ul >li:eq(0) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(1) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(2) > a ").css({"font-weight":"bold", "text-decoration":"underline", "color":"#fff"});
			$("header > nav > ul >li:eq(3) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(4) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(5) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			
			$(".txt").animate({
				bottom:"80px",
				opacity:1
			}, 300, function() {
			});
			$(".as").animate({
				bottom:"140px",
				opacity:1
			}, 800, function() {
			});

		}else if($(document).scrollTop() > 3488 && $(document).scrollTop() < 3989){
			$("header").show();
			$("header > nav > ul >li:eq(0) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(1) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(2) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(3) > a ").css({"font-weight":"bold", "text-decoration":"underline", "color":"#fff"});
			$("header > nav > ul >li:eq(4) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			$("header > nav > ul >li:eq(5) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			
			$(".account_wrap").animate({
				bottom:"50px",
				opacity:1
			}, 800, function() {
			});
			
		}else if($(document).scrollTop() > 3989 && $(document).scrollTop() < 4880){
			 $("header").show();
			 $("header > nav > ul >li:eq(0) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			 $("header > nav > ul >li:eq(1) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			 $("header > nav > ul >li:eq(2) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			 $("header > nav > ul >li:eq(3) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			 $("header > nav > ul >li:eq(4) > a ").css({"font-weight":"bold", "text-decoration":"underline", "color":"#fff"});
			 $("header > nav > ul >li:eq(5) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			 
			 $(".prtfolio h2, .prtfolio p").animate({
				bottom:"120px",
				opacity:1
			}, 300, function() {
			});
			$(".itemViewLeft").animate({
				bottom:"120px",
				opacity:1
			}, 800, function() {
			});
			 
		}else if($(document).scrollTop() > 4880 && $(document).scrollTop() < 5180){
			$("header").show();
			 $("header > nav > ul >li:eq(0) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			 $("header > nav > ul >li:eq(1) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			 $("header > nav > ul >li:eq(2) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			 $("header > nav > ul >li:eq(3) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			 $("header > nav > ul >li:eq(4) > a ").css({"font-weight":"normal", "text-decoration":"none", "color":"#30c891"});
			 $("header > nav > ul >li:eq(5) > a ").css({"font-weight":"bold", "text-decoration":"underline", "color":"#fff"});
			 
			 $(".contact_txt").animate({
				bottom:"80px",
				opacity:1
			}, 300, function() {
			});
			$(".form").animate({
				bottom:"80px",
				opacity:1
			}, 800, function() {
			});
		}
	});
});