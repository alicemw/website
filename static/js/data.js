var storage =window.localStorage;
var diseaseList,diseaseCon;

if (!storage.getItem("diseaseList")||storage.getItem("diseaseList")==0) {
	$.ajax({
	    type : "post",
	    url : "http://m.0832pifu.com/test/test.php",
	    dataType : "jsonp",
	    jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
	    jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
	    success : function(res){
			$.each(res, function(idx,obj) {
				obj.typedir =obj.typedir.substring(9);
			});
			diseaseList = res;
			var b = JSON.stringify(diseaseList);
		
			storage.setItem("diseaseList",b);
	    },
	    error:function(){
	        alert('fail');
	    }
	});
}else{	
	
	diseaseList =JSON.parse(storage.getItem("diseaseList"));//必须格式转换
}




