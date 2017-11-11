
$(document).ready(function(){
	//banner lunbo
     	$(".banner .flexslider").flexslider({
	    	animation : "slide"
	    	
	    });
	    //banner lunbo
     	$(".banner_2 .flexslider").flexslider({
	    	animation : "slide"
	    	
	    });
	    //案例轮播
	    $(".list-anli .flexslider").flexslider({
	    	animation : "slide",
	    	lideshow: true
	    });
	    
	    //学术研究轮播
	    $(".flexslider_academic .flexslider").flexslider({
	    	animation : "slide"
	    	
	    });
	    
	    //tab选项卡
	    $('.demo2').Tabs({

		event:'click'

	});
	/*列表页选项卡*/
	$(".tab>ul>li").each(function(i){
		$(this).click(function(){
			$(".tab ul li").css({'color':"white",'background':'#55b0ff',"fontWeight":'normal'});
			$(this).css({'color':"#55b0ff",'background':'#e6f3ff',"fontWeight":'bold'})
			$(".tab-item").css("display",'none');
			$(".tab-item").eq(i).css("display",'block');
		})
	})
	/*文章页选项卡*/
	$(".tab>div>ul>li").click(function(){
		$(this).css({"background":"#fff","border":"1px solid #ccc"}).siblings().css({"background":"#f6f6f6","border":"none"});
		$(".tab>.tab-item").eq($(this).index()).css("display","block").siblings(".tab-item").css("display","none");
	})
	$(".flex-control-nav li a").text("");
	/*首页选项卡*/
	$(".activity_title>div").click(function(){
    $(this).css({"color":"#55b0ff","border-bottom":"1px solid #55b0ff"}).siblings().css({"color":"#656565","border-bottom":"none"});
    $(".activity>ul").eq($(this).index()).css("display","block").siblings("ul").css("display","none");
  })
	/*提交表单验证*/
	$(".jmtj").click(function(){
		var re= /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
		var name =$.trim($("input[name='name']").val()),
			call =$.trim($("input[name='call']").val()),
			datenow =$.trim($("input[name='datenow']").val()),
			discrib =$.trim($("input[name='discrib']").val());
			if(re.test(name)||re.test(call)||re.test(datenow)||re.test(discrib)){
				alert("请勿输入非法字符！");
				return false;
			}else {
				if(name.length ==0){
					alert("请输入姓名！");
					return false;
				}else if(name.length>10||!name.match(/^[\u4e00-\u9fa5]+$/)){
					alert("请输入正确姓名！");
					$("input[name='name']").val("");
					return false;
				}else {
					if(call.length==0){
						alert("请输入电话！");
						return false;
					}else if(!call.match(/^1[34578]\d{9}$/)){
						alert("请输入正确的电话！");
						return false;
					}else {
						if(discrib.length==0){
							alert("请描述症状");
							return false;
						}else {
							return true;
						}
							
					}
				
			}
		}
	})
	

	
	
})
