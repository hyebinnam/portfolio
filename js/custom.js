$(document).ready(function(){
	
	/* 미션1 */

	//변수 ht에 브라우저의 높이값을 지정
	var ht = $(window).height();
	//브라우저의 높이값을 section
	$("section").height(ht);

	/* 미션2 */

	//리사이즈
	$(window).on("resize",function(){
		var ht = $(window).height();
		//alert(ht);
		$("section").height(ht);
	});

	/* 미션3 */
	//클릭하면 페이지만 바꾸기
	//메뉴 버튼 클릭시
	$("#menu li").on("click",function(){
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();

		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index();

		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;

		$("html, body").stop().animate({"scrollTop":nowTop},1400); //크로스브라우징 때문에 html, body
	});

	/* 미션4 */
	//스크롤 이벤트를 적용하여 스크롤이 내려갈때 #menu가 알아서 바껴주기

	/*
	$(window).on('scroll', function(){
	  
	  var h = $('section').height();  //974
	  //console.log(h);
	  var t = $(window).scrollTop();
	  //console.log(t);  
	  $('#menu li').removeClass('on');

	  //0~974, 974~974*2, 974*2~974*3, 974*3~974*4
	  if(t>=0 && t<h*1) {
	   $('#menu li').eq(0).addClass('on');
	  }
	  else if(t>=h*1 && t<h*2) {
	   $('#menu li').eq(1).addClass('on');
	  }
	  else if(t>=h*2 && t<h*3) {
	   $('#menu li').eq(2).addClass('on');
	  }
	  else if(t>=h*3 && t<h*4) {
	   $('#menu li').eq(3).addClass('on');
	  }
	 });
	 */

	//마우스 휠 이벤트처리 선생님꺼

	$(window).on('scroll', function(){
	//변수 scroll에 현재 문서가 스크롤된 거리 저장
	var scroll = $(window).scrollTop();
	
	for(var i=0; i<4; i++){
		if(scroll>ht*i && scroll< ht*(i+1)){
			$("#menu li").removeClass();
			$('#menu li').eq(i).addClass('on');
		}
	}
	});

	/* 미션 5 */
	//마우스 휠 이벤트 적용
	/*
	$(window).mousemove(function(e){
		var i = e.pageX;
		//alert(i);
		$("section img").animate({
			"margin-left":i/5
		},1400);
	});
	*/
	
	/*
	//마우스 휠 이벤트 처리
   $("section").on("mousewheel",function(event,delta){
    //마우스 휠이 움직일 총범위 지정
    var range = $("body");
    var length_h = $(this).height();
    console.log(range.scrollTop() );


    if(delta<0){
     $(range).stop().animate({scrollTop:range.scrollTop() + length_h},1400,"easeOutBounce");
     return false;
    }else if(delta>0){
     $(range).stop().animate({scrollTop:range.scrollTop() - length_h},1400,"easeOutBounce");
     return false;
    }
   });
*/
	   // 마우스 휠 이벤트 처리
	   /*
	 $("section").on("mousewheel",function(event,delta){
	  
	  var i = $(this).index(); // section 순서값


	  if(delta > 0 && i!=0){ //마우스 휠 올리고 section의 순서 0번째를 제외한
	   var prev = $(this).prev().offset().top; // section의 이전요소 top 좌표값
	   $("html,body").stop().animate({scrollTop:prev},1400,"easeOutBounce");
	  }else if(delta < 0 && i!=3) { //마우스 휠 내리고 section의 순서 3번째를 제외한 
	   var next = $(this).next().offset().top; // section의 다음요소 top 좌표값
	   $("html,body").stop().animate({scrollTop:next},1400,"easeOutBounce");
	  }
	 


	 });*/
	$("section").on("mousewheel",function(event,delta){
		if (delta > 0){//마우스휠을 올렸을 때
			var prev;
			if($(this).index()!=0) prev = $(this).prev().offset().top;
			else prev = $(this).offset().top;
			$("html,body").stop().animate({scrollTop:prev},1400,"easeOutBounce");
		} else id (delta < 0)  //마우스 휠을 내렸을 때
			var next;
			if($(this).index() < 3) next = $(this).prev().offset().top;
			else next = $(this).offset().top;
			$("html,body").stop().animate({scrollTop:next},1400,"easeOutBounce");
		
	});

	/*
	$("#menu li:nth-child(1) a").click(function(){
		//alert(sT);
		$("html, body").stop().animate({
			"scrollTop":0
		},1400);
	});
	$("#menu li:nth-child(2) a").click(function(){
		//alert(sT);
		$("html, body").stop().animate({
			"scrollTop":974
		},1400);
	});
	$("#menu li:nth-child(3) a").click(function(){
		//alert(sT);
		$("html, body").stop().animate({
			"scrollTop":974*2
		},1400);
	});
	$("#menu li:nth-child(4) a").click(function(){
		//alert(sT);
		$("html, body").stop().animate({
			"scrollTop":974*3
		},1400);
	});
	*/



});