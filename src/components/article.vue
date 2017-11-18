<template>
	<div class="container">
		<div class="innercontainer">
			<div class="position">
	    		<p><router-link to="/">首页</router-link> > <span><router-link :to="topdir" v-model="maincon">{{maincon.typename}}</router-link></span></p>
	    	</div>
	    	<div class="mainarticle">
	    			<h1>{{title}}</h1>
	    			<div v-html="maincon.body">
	    				
	    			</div>
	    	</div>
	    	<div class="mainbody-note">
	    		<p><b>温馨提示：</b>治疗青春痘，切勿贪便宜，请慎重选择。若有其他疑问，欢迎点击在线咨询，或者拨打免费咨询电话：<strong style="color: #FE513E;">0832-5197777</strong>，获得更贴心的回答!</p>
	    	</div>
	    	<div class="ask">
	    		<p><i>问病情  </i> 您现在的情况是？问问病情更放心！</p>
	    		<div class="ask-item">
		    		<a href="#"><b>未确诊</b><br />已出现症状</a>
		    		<a href="#"><b>已确诊</b><br />未采取治疗</a>
		    		<a href="#"><b>治疗过</b><br />治疗效果差</a>
		    		<a href="#"><b>想治愈</b><br />正寻求治疗方案</a>
	    		</div>
	    	</div>
		</div>
		
		<div class="innercontainer">
			<section class="sec0">
		    	<a href="#"><img src="../assets/images/article-call.png" width="100%"/></a>
		    </section>
		</div>
		
		<div class="innercontainer">
			<section class="sec0">
		    	<section class="article-about">
		    		<h1>相关文章 <a href="#">查看更多</a></h1>
		    		<ul>
		    			<li v-for="(item,index) in likart" v-if="index<4">
		    				<router-link :to="item.id">{{item.title}}</router-link>
		    			</li>
		    			
		    		</ul>
		    		<a href="#" class="clickmore">点击在线咨询</a>
		    	</section>
		    </section>
		</div>
		
		<div class="innercontainer">
			<section class="sec0">
		    	<section class="sec4">
		    		<h1><img src="../assets/images/list-title4.png"/></h1>
		    		<div class="doctor">
		    			<img src="../assets/images/list-doc1.png" alt="" style="width: 1.2rem;" />
		    			<div class="docinfo">
		    				<p><b>李永明  </b>皮肤科 副主任医师<a href="#" class="doctalk">在线咨询</a></p> 
		    				<p><strong>擅长：</strong>痤疮、皮炎、湿疹、荨麻疹、白癜风、银屑病、真菌病、病毒性疱疹、等多种皮肤病。</p>
		    				<img src="../assets/images/list-stars.png" alt="" style="width: .96rem;"/>
		    				<img src="../assets/images/list-bestdoc.png" style="width: .93rem; margin-left: .2rem;"/>
		    			</div>
		    			<div class="clear"></div>
		    		</div>
		    		<div class="doctor">
		    			<img src="../assets/images/list-doc2.png" alt="" style="width: 1.2rem;" />
		    			<div class="docinfo">
		    				<p><b>廖乐义  </b>皮肤科 副主任医师<a href="#" class="doctalk">在线咨询</a></p> 
		    				<p><strong>擅长：</strong>牛皮癣(银屑病)、湿疹、痤疮、白癜风、神经性皮炎、带状疱疹等。</p>
		    				<img src="../assets/images/list-stars.png" alt="" style="width: .96rem;"/>
		    				<img src="../assets/images/list-bestdoc.png" style="width: .93rem; margin-left: .2rem;"/>
		    			</div>
		    			<div class="clear"></div>
		    		</div>
		    		<div class="doctor">
		    			<img src="../assets/images/list-doc3.png" alt="" style="width: 1.2rem;" />
		    			<div class="docinfo">
		    				<p><b>蒋章俊  </b>皮肤科 主治医师<a href="#" class="doctalk">在线咨询</a></p> 
		    				<p><strong>擅长：</strong>痤疮(青春痘)、鱼鳞病、过敏性皮肤病、脱发、灰指甲、病毒性皮肤病及斑痕等疑难杂症。</p>
		    				<img src="../assets/images/list-stars.png" alt="" style="width: .96rem;"/>
		    				
		    			</div>
		    			<div class="clear"></div>
		    		</div>
		    	</section>
		    	<div class="inform">
					<span>重要通知 |</span>
					<p class="inform-run" style="top: 0.15rem;opacity: 1;">李永明 副主任医师  今日专家号<span style="color: #fe513e;">剩余5个</span></p>
					<p class="inform-run" style="top: 0.78rem;opacity: 0;">廖乐义 副主任医师  今日专家号<span style="color: #fe513e;">剩余5个</span></p>
					<p class="inform-run" style="top: -0.42rem;opacity: 0;">蒋章俊 副主任医师  今日专家号<span style="color: #fe513e;">剩余5个</span></p>
					<a href="#"><img src="../assets/images/list-freeyuyue.png" style="width: .66rem;"/></a>
				</div>
		    </section>
		</div>
		
		<div class="innercontainer">
			<section class="sec0">
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
				
			</section>
		</div>
		
		<div class="innercontaienr">
			<section class="sec0">
				<section class="sec7">
					<h1><img src="../assets/images/list-title7.png"/></h1>
					<div class="solution">
						<div class="solution-item">
							<img src="../assets/images/list-icon1.png"/>
							<p>中西结合</p>
							<p>高效抗复发</p>
						</div>
						<div class="solution-item">
							<img src="../assets/images/list-icons2.png"/>
							<p>复合彩光</p>
							<p>痘印去无踪</p>
						</div>
						<div class="solution-item">
							<img src="../assets/images/list-icons3.png"/>
							<p>男女分治</p>
							<p>更具个性化</p>
						</div>
						<div class="solution-item">
							<img src="../assets/images/list-icons4.png"/>
							<p>内调外治</p>
							<p>祛痘更靠谱</p>
						</div>
						<div class="clear"></div>
					</div>
				</section>
				
			</section>
		</div>
		<div class="innercontainer">
			<section class="sec0">
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
	import Vue from 'vue'
	export default {
		name:'article',
		data(){
			return {
				msg:'hello world！',
				maincon:'',
				artid:'',
				topdir:'',
				title:'',
				likart:'',
				pagestart:null,
      			pageend:null
			}
		}, 
		created () {
		  
		},
		 watch: {
		   '$route' (to, from) {
		     //banner lunbo
			 	$(".list-anli .flexslider").flexslider({
			    	animation : "slide"
			    });
			    
			   this.artid = (this.$route.path).substring(5);
			   
			   let _this =this;
			   let nid =this.artid;
			   //页面开始时间
			   _this.$data.pagestart = (new Date()).getTime();
			   //loading动画
  			 	let loading = Vue.prototype.$loading({text:"玩命加载中...",background:"#80bd01",spinner:'el-icon-loading'});
			   
			    //数据请求
			    $.ajax({
					type : "POST",
				    url : "http://m.0832pifu.com/test/test1.php",
				    data:{'artid':nid},
				    dataType : "jsonp",
				    jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
				    jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
				    success : function(res){
				    	let str = res[0].body;
				    	//图片路径修改。str.replace应用
				    	res[0].body = str.replace(/\/uploads/g,"http://m.0832pifu.com/uploads");
				    	//赋值maincon为文章主题内容
						_this.$data.maincon =res[0];
						//获取文章上级路径
						$.each(diseaseList, function(idx,obj) {
							if(res[0].typename==obj.typename){
								_this.topdir =obj.typedir;
							}
						});	
						//获取上级栏目名称
						let a =_this.maincon.typename;
						//从缓存中取出相关数据
						let b =JSON.parse(storage.getItem(a));
						let c;
							_this.$data.likart =b;
						$.each(b, function(idx,obj) {
							if(_this.$route.path == obj.id){
								_this.$data.title = obj.title;
								c =obj;
							}
						});
						for(let i=0; i<b.length; i++) {
					    if(b[i] == c) {
						      b.splice(i, 1);
						      break;
						    }
						  }
						
						_this.$data.likart =b;
						
						_this.$data.pageend =(new Date()).getTime();
						let loadingtime = (_this.$data.pageend -_this.$data.pagestart)>1000 ? 0:500;
						
						setTimeout((function(){loading.close()}),loadingtime);
					
				    },
				    error:function(){
				        alert('fail');
				    }
				});
				
				 $('body,html').animate({ scrollTop: 0 }, 0);
		     
		   }
		 },
		 
		mounted(){
			//banner lunbo
		 	$(".list-anli .flexslider").flexslider({
		    	animation : "slide"
		    });
		    
		   this.artid = (this.$route.path).substring(5);
		   
		   let _this =this;
		   let nid =this.artid;
	      //页面开始时间
		   _this.$data.pagestart = (new Date()).getTime();
		   //loading动画
		 	let loading = Vue.prototype.$loading({text:"玩命加载中...",background:"#80bd01",spinner:'el-icon-loading'});
		  
		    //数据请求
		    $.ajax({
				type : "POST",
			    url : "http://m.0832pifu.com/test/test1.php",
			    data:{'artid':nid},
			    dataType : "jsonp",
			    jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
			    jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
			    success : function(res){
			    	let str = res[0].body;
			    	//图片路径修改。str.replace应用
			    	res[0].body = str.replace(/\/uploads/g,"http://m.0832pifu.com/uploads");
			    	
					_this.$data.maincon =res[0];
					$.each(diseaseList, function(idx,obj) {
						if(res[0].typename==obj.typename){
							_this.topdir =obj.typedir;
						}
					});	
					let a =_this.maincon.typename;
					let b =JSON.parse(storage.getItem(a));
					let c;
						
					$.each(b, function(idx,obj) {
						
						if(obj.id ==_this.$route.path ){
							_this.$data.title = obj.title;
							c =obj;
						}
					});
					 for(let i=0; i<b.length; i++) {
					    if(b[i] == c) {
					      b.splice(i, 1);
					      break;
					    }
					  }
					 
					_this.$data.likart =b;
					
						_this.$data.pageend =(new Date()).getTime();
						let loadingtime = (_this.$data.pageend -_this.$data.pagestart)>1000 ? 0:500;
						
						setTimeout((function(){loading.close()}),loadingtime);
					
					
					
			    },
			    error:function(){
			        alert('fail');
			    }
			});
			 $('body,html').animate({ scrollTop: 0 }, 0);
		}
	}
</script>

<style>
	
</style>