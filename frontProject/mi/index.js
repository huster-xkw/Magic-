$(function() {
	$(".map .one").mouseenter(function() {
		var $sub = $(".nav .pop");
		$sub.stop();
		$sub.slideDown(500);

	});

	$(".map .one").mouseleave(function() {
		var $sub = $(".nav .pop");
		$sub.stop();
		$sub.slideUp(500);
	});

	// 购物车动态效果
	$(".car-box").mouseenter(function() {
		var $sub = $(".car-box .pop");
		$sub.stop();
		$sub.slideDown(500);

	});

	$(".car-box").mouseleave(function() {
		var $sub = $(".car-box .pop");
		$sub.stop();
		$sub.slideUp(500);
	});

	// 二维码动态效果
	$(".download").mouseenter(function() {
		var $sub = $(".down-box");
		$sub.stop();
		$sub.slideDown(500);

	});

	$(".download").mouseleave(function() {
		var $sub = $(".down-box");
		$sub.stop();
		$sub.slideUp(500);
	});
	
	// 轮播图
  var $bnLi = $('.bn-alp li');
  var index = 0;
  var timer;
  
  function auto() {
  	timer = setInterval(function() {
  		index++;
  
  		fn();
  	}, 2000);
  }
  function fn() {
	  if(index>5){
		  index=0;
	  }
  	// eq(index)列表中的第index个元素，从0开始算起
  	$bnLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
  }
  auto();

})
