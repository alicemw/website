<template>
	<div class="container" id="list_article">
		<div class="innercontainer">
			<div class="qcd">
    	<div class="position">
    		<p><router-link to="/">首页</router-link>> <router-link to="/list">{{name}}</router-link>></p>
		    	</div>
		    	<section class="sec4">
		    		
		    		<div class="doctor" v-for="con in diseases">
		    			<img :src="con.litpic" alt="" style="width: 1.8rem;" />
		    			<div class="docinfo">
		    				<p><b>{{con.title}}</b></p> 
		    				<p>{{con.description}} ... <a href="#" style="color: #FE513E;">【详情】</a></p>
		    				<a href="#">在线咨询</a>
		    			</div>
		    			<div class="clear"></div>
		    		</div>
		    		
		    		<div class="page">
		    			
		    		</div>
		    	</section>
		    </div>
		</div>
		
		<div class="innercontainer">
			<a href="#"><img src="../assets/images/list_know.jpg" style="display: block;width: 100%;"/></a>
		</div>
		
		<div class="innercontainer">
			<section class="sec1">
		    	<h1 class="hotpoint">热门关注 <a href="#">查看更多</a></h1>
		    	<ul class="title1_list">
		           <li style="width:2.65rem; margin-right:0.05rem;"><a href="#">如何快速祛痘效果好</a></li>
		           <li style="width:3.3rem"><a href="#">内江和润医院挂号</a></li>
		           <li style="width:3.14rem; margin-right:0.05rem;"><a href="#">身上起红疙瘩很痒</a></li>
		           <li style="width:2.8rem"><a href="#">脸上过敏发红发痒</a></li>
		           <li style="width:2.25rem; margin-right:0.05rem;"><a href="#">荨麻疹反复发作</a></li>
		           <li style="width:3.69rem"><a href="#">狐臭可以彻底根治吗</a></li>
		           <span class="clear" style="display: block;"></span>
		        </ul>
		        <a href="#">点击在线咨询</a>
		    </section>
		</div>
		
		<div class="innercontainer">
			<section class="sec2">
	    		<h1><img src="../assets/images/la_title_05.jpg" style="width: 100%;"/></h1>
	    		<div class="tab">
	    			
	    			<div class="tab-item">
	    				<img src="../assets/images/article_doc3_03.jpg" alt="" />
	    				<p><b>李永明 </b>皮肤科&nbsp;副主任医师</p>
	    				<p><b style="color: #656565;">擅长：</b>痤疮、皮炎、湿疹、荨麻疹、白癜风、银屑病、真菌病、疱疹等多种皮肤病。</p>
	    				<p>
	    					<a href="#">查看详情</a>
	    					<a href="#">直接对话</a>
	    				</p>
	    				<div class="clear"></div>
	    			</div>
	    			<div class="tab-item" style="display: none;">
	    				<img src="../assets/images/article_doc2_03.jpg" alt="" />
	    				<p><b>廖乐义 </b>皮肤科&nbsp;副主任医师</p>
	    				<p><b style="color: #656565;">擅长：</b>牛皮癣（银屑病）、湿疹、痤疮、白癜风、鱼鳞病、黄褐斑等各种顽固性皮肤病。</p>
	    				<p>
	    					<a href="#">查看详情</a>
	    					<a href="#">直接对话</a>
	    				</p>
	    				<div class="clear"></div>
	    			</div>
	    			<div class="tab-item" style="display: none;">
	    				<img src="../assets/images/article_doc1_09.jpg" alt="" />
	    				<p><b>蒋章俊 </b>皮肤科&nbsp;执业医师</p>
	    				<p><b style="color: #656565;">擅长：</b>痤疮(青春痘)、鱼鳞病、过敏性皮肤病、灰指甲、病毒性皮肤病及斑痕等疑难杂症。</p>
	    				<p>
	    					<a href="#">查看详情</a>
	    					<a href="#">直接对话</a>
	    				</p>
	    				<div class="clear"></div>
	    			</div>
	    			<div class="article-nav">
	    				<ul>
		    				<li style="background: #FFFFFF;border: 1px solid #ccc;"> 
		    					<img src="../assets/images/article_doc1.png"/>
		    					<p><b>李永明</b><br />副主任医师</p>
		    				</li>
		    				<li> 
		    					<img src="../assets/images/article_doc2.png"/>
		    					<p><b>廖乐义</b><br />副主任医师</p>
		    				</li>
		    				<li> 
		    					<img src="../assets/images/article_doc3.png"/>
		    					<p><b>蒋章俊</b><br />执业医师</p>
		    				</li>
		    			</ul>
	    			</div>
	    			
	    			<div class="clear"></div>
	    		</div>
	    	</section>
		</div>
		
		<div class="innercontainer">
			<section class="sec6">
				<h1><img src="../assets/images/list-title6.png"/></h1>
				<div class="list-anli" style="background: #f3f3f3;">
					<div class="flexslider">
		    			<ul class="slides">
		    				<li>
		    					<div class="lunbo">
									<div class="lunbo-l">
										<h2>治疗实例</h2>
										<p><b>姓名：</b>小王</p>
										<p><b>类型：</b>丘疹脓包型痘痘</p>
										<p><b>治疗次数：</b>三次</p>
										<a href="#">查看详情</a>
									</div>
									<div class="lunbo-r">
										<img src="../assets/images/list-pic6.png"/>
									</div>
									<div class="clear"></div>
								</div>
		    				</li>
		    				<li>
		    					<div class="lunbo">
									<div class="lunbo-l">
										<h2>治疗实例</h2>
										<p><b>姓名：</b>小王</p>
										<p><b>类型：</b>丘疹脓包型痘痘</p>
										<p><b>治疗次数：</b>三次</p>
										<a href="#">查看详情</a>
									</div>
									<div class="lunbo-r">
										<img src="../assets/images/list-pic6.png"/>
									</div>
									<div class="clear"></div>
								</div>
		    				</li>
		    				<li>
		    					<div class="lunbo">
									<div class="lunbo-l">
										<h2>治疗实例</h2>
										<p><b>姓名：</b>小王</p>
										<p><b>类型：</b>丘疹脓包型痘痘</p>
										<p><b>治疗次数：</b>三次</p>
										<a href="#">查看详情</a>
									</div>
									<div class="lunbo-r">
										<img src="../assets/images/list-pic6.png"/>
									</div>
									<div class="clear"></div>
								</div>
		    				</li>
		    			</ul>	
					</div>
					<div class="clear"></div>
				</div>
				
				<a href="#" class="clickmore">点击查看更多</a>
			</section>
		</div>
		
		<div class="innercontainer">
			<section class="sec8">
				<h1><img src="../assets/images/list-title8.png"/></h1>
				<div class="evaluate">
		           <ul class="evaluate_treat" style="border-bottom:1px dashed #dddddd">
		               <li class="score" style="width:1.6rem;padding-bottom:0.12rem; margin-top:0.34rem;">
		                   <p>总体评分</p>
		                   <p style="color:#fe513e">4.96分</p>
		               </li>
		               <li style="width:3.02rem;">
		                  <ul class="treat">
		                       <li>治疗效果：很好&nbsp;&nbsp; <strong>4.91分</strong></li>
		                       <li>服务态度：很好&nbsp;&nbsp; <strong>4.98分</strong></li>
		                       <li>就医环境：很好&nbsp;&nbsp; <strong>4.87分</strong></li>
		                   </ul> 
		               </li>
		               <li class="haoping">
		                   <a href="#">在线咨询</a>
		               </li>
		               <div class="clear"></div>
		           
		           </ul>
		           <div class="evaluate_item">
			           	<span>医生比较尽职</span>
			           	<span>就医环境温馨</span>
			           	<span>护士态度好</span>
		           </div>
		           <div class="evaluate_item">
		           		<span>交通便利</span>
			           	<span>治疗效果好</span>
			           	<span>收费合理</span>
		           </div>
		        </div>
		        <div class="comment">
		        	<div class="comment-item">
		        		<img src="../assets/images/list-avtar.png" alt="" style="width: .81rem;margin-top: .2rem;" />
		    			<div class="docinfo" style="width: 5rem;">
		    				<p style="padding-bottom: .1rem;">技术：
		    					<img src="../assets/images/list-stars2.png" alt="" />
		    					服务：<img src="../assets/images/list-stars2.png" alt="" />
		    					价格：<img src="../assets/images/list-stars2.png" alt="" />
		    				</p> 
		    				<p  style="color: #262626;padding-bottom: .1rem;">我当时来诊疗的时候，刚开始有点顾虑，但是看到医生接诊时的情况，我才敢坦白，在这里病人的隐私能很好的保护起来，减少病人的顾虑。</p>
		    				<span style="color: #909090;margin-top: .15rem;font-size: .18rem;">2天前</span><span style="color: #909090;margin-top: .15rem;font-size: .18rem;margin-left: .4rem;"><img src="../assets/images/list-good.png" style="width: .18rem;"/>&nbsp;69</span>
		    			</div>
		    			<div class="clear"></div>
		        	</div>
		        	<div class="comment-item">
		        		<img src="../assets/images/list-avtar.png" alt="" style="width: .81rem;margin-top: .2rem;" />
		    			<div class="docinfo" style="width: 5rem;">
		    				<p style="padding-bottom: .1rem;">技术：
		    					<img src="../assets/images/list-stars2.png" alt="" />
		    					服务：<img src="../assets/images/list-stars2.png" alt="" />
		    					价格：<img src="../assets/images/list-stars2.png" alt="" />
		    				</p> 
		    				<p style="color: #262626;padding-bottom: .1rem;">我当时来诊疗的时候，刚开始有点顾虑，但是看到医生接诊时的情况，我才敢坦白，在这里病人的隐私能很好的保护起来，减少病人的顾虑。</p>
		    				<span style="color: #909090;margin-top: .15rem;font-size: .18rem;">2天前</span><span style="color: #909090;margin-top: .15rem;font-size: .18rem;margin-left: .4rem;"><img src="../assets/images/list-good.png" style="width: .18rem;"/>&nbsp;69</span>
		    			</div>
		    			<div class="clear"></div>
		        	</div>
		        </div>
		        <a href="#" class="clickmore">点击查看更多</a>
			</section>
		</div>
		
		<footer>
	         <p>地址：内江市市中区双苏路综合楼126号 </p>
	         <p>健康咨询电话：0832-5197777 </p>
	         <p>内江和润皮肤病医院 版权所有 本</p>
	         <p>网站信息仅做健康参考，具体诊疗请遵医师意见 </p>
	         <p><a href="#" style="color: white;">备案/许可证号:蜀ICP备16013218号</a></p>
	     </footer>
	</div>
	
</template>

<script>


export default {
  name: 'list',
  data () {
    return {
      msg: '列表页',
      name:'列表页',
      nameid:'',
      diseases:''
    }
  },
  mounted (){
  	
  	let path = this.$route.path;
  	
  	let _this =this;
  	 	$.each(diseaseList, function(index,value) {
  		if(value.typedir == path){
  			_this.$data.name =value.typename;
  			_this.$data.nameid = value.id;
  		}
  	 });
  	 var nid = this.nameid;
  	 if (!storage.getItem(this.name)||storage.getItem(this.name)==0) {
	  	 	$.ajax({
			type : "POST",
		    url : "http://m.0832pifu.com/test/test1.php",
		    data:{'typeid':nid},
		    dataType : "jsonp",
		    jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
		    jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
		    success : function(res){
				/*$.each(res, function(idx,obj) {
					obj.typedir =obj.typedir.substring(9);
				});*/
				$.each(res, function(idx,obj) {
					//拼接图片地址
					obj.litpic ='http://m.0832pifu.com'+obj.litpic;
					//字符串字数限制
					obj.description= obj.description.substr(0,20);
				});
				_this.$data.diseases =res;
				
				var b = JSON.stringify(_this.$data.diseases);
			
				storage.setItem(_this.$data.name,b);
		    },
		    error:function(){
		        alert('fail');
		    }
		});
  	 }else {
  	 	this.diseases =JSON.parse(storage.getItem(this.name));//必须格式转换
  	 }
  	 
 //banner lunbo
 	$(".list-anli .flexslider").flexslider({
    	animation : "slide"
    	
    });

  },

  methods:{
 	
 }
}	
</script>

<style>
</style>