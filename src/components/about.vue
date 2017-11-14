<template>
	<div class="container">
		<div class="innercontainer">
			<section class="passage_one">
		        <div class="classification">
		            <div class="classification_total">
		                <div class="classification_left"><router-link to="/list">疾病分类</router-link></div>
		                <div class="classification_right"><a href="#">更多 ＞</a></div>
		                <div class="clear"></div>
		            </div>
		        </div>
		        
		        <div class="Seasonal">
		           <div class="Seasonal_total">
		                <div class="Seasonal_picture"><img src="../assets/images//wether.png"/><p>季节高发</p></div>
		                <ul>
		                   <li>
		                   		<template v-for="(item,index) in data" v-if="index <12">
		                   			<router-link :to="item.typedir" >{{item.typename}}</router-link>
		                   			
		                   		</template>
		                   </li>
		                   
		                   <div class="clear"></div>
		                </ul>
		               <div class="clear"></div>
		             
		        </div>
		        <div class="disease_total">
		                <div class="disease_picture"><img src="../assets/images//diease.png"/><p>常见疾病</p></div>
		                <ul>
		                   <li>
		                   		<a href="#">皮肤过敏</a>
		                   		<a href="#">体癣</a>
		                   		<a href="#">疥疮</a>
		                   </li>
		                   <li>	
		                   		<a href="#">皮肤瘙痒</a>
		                   		<a href="#">手足癣</a>
				                <a href="#">寻常疣</a>
		                   </li>
		                   <li>
			                   	<a href="#">白癜风</a>
			                   	<a href="#">腋臭</a>
			                   	<a href="#">皮炎</a>
		                   </li>
		                   <div class="clear"></div>
		                </ul>
		               <div class="clear"></div>
		                
		             
		        </div>
		        
		        <div class="beauty_total">
		                <div class="beauty_picture"><img src="../assets/images//meirong.png"/><p>皮肤美容</p></div>
		                <ul>
		                   <li>
		                   		<a href="#">疤痕</a>
		                   		<a href="#">红血丝</a>
		                   </li>
		                   <li>
		                   		<a href="#">洗纹身</a>
		                   		<a href="#">酒槽鼻</a>
		                   </li>
		                   	
		                   <li>
		                   		<a href="#">痘印</a>
		                   		<a href="#">色素痣</a>  
		                   </li>
		                   <div class="clear"></div>
		                </ul>
		               <div class="clear"></div>
		        </div>
		        
		        <div class="nav_foot"><a href="#"><img src="../assets/images//zxpf.png" /></a></div>
		      </div>
		    </section>
		</div>
		<div class="innercontainer">
			<!--passage_two开始-->
		    <section class="passage_two">
		        <div class="title1"><img src="../assets/images//title1.png" /></div>
		        <ul class="title1_list">
		           <li style="width:2.65rem; margin-right:0.05rem;"><a href="#">如何快速祛痘效果好</a></li>
		           <li style="width:3.3rem"><a href="#">内江和润医院挂号</a></li>
		           <li style="width:3.14rem; margin-right:0.05rem;"><a href="#">身上起红疙瘩很痒</a></li>
		           <li style="width:2.8rem"><a href="#">脸上过敏发红发痒</a></li>
		           <li style="width:2.25rem; margin-right:0.05rem;"><a href="#">荨麻疹反复发作</a></li>
		           <li style="width:3.69rem"><a href="#">狐臭可以彻底根治吗</a></li>
		           <li style="width:3.85rem; margin-right:0.05rem;"><a href="#">掉头发很厉害</a></li>
		           <li style="width:2.10rem"><a href="#">湿疹怎么治疗</a></li>
		        </ul>
		        <div class="clear"></div>
		        <a href="#">点击查看更多</a>
		        
		        <ul class="title1_nav">
		           <li><a style="border-right:1px solid #dddddd"><img  src="../assets/images//nav5.png" /><p>咨询病情</p></a></li>
		           <li><a style="border-right:1px solid #dddddd"><img  src="../assets/images//nav6.png" /><p>咨询费用</p></a></li>
		           <li><a style="border-right:1px solid #dddddd"><img  src="../assets/images//nav7.png" /><p>电话咨询</p></a></li>
		           <li><a><img src="../assets/images//nav8.png" /><p>预约挂号</p></a></li>
		           
		        </ul>
		        <div class="clear"></div>
		        <!--中间灰色部分-->
		        <div class="nav_3"></div>
		       	<div style="position: relative;">
		       		<img style="width:100%;" src="../assets/images//zxpf2.png" />
		       		<a href="tel:0832-5197777" style="position: absolute;width: 1.7rem;height: 0.46rem;top: 0.3rem;right: 0.4rem;"></a>
		       	</div>
		    </section>
		</div>
		<div class="innercontainer">
			<section class="passage_three">
		        <div class="title2"><img src="../assets/images//title2.png" /></div>
		        <div class="banner_2">
		        	<div class="flexslider">
		        		<ul class="slides">
		        			<li>
		        				<a href="#"><img src="../assets/images//banner2.png" /></a>
		        			</li>
		        			<li>
		        				<a href="#"><img src="../assets/images//banner2.png" /></a>
		        			</li>
		        			<li>
		        				<a href="#"><img src="../assets/images//banner2.png" /></a>
		        			</li>
		        		</ul>
		        	</div>
		        	
		        	
		        </div>
		        <div class="inform">
					<span><img src="../assets/images//tongzhi.png"/>重要通知 |</span>
					<p class="inform-run" style="top: 0.15rem;opacity: 1;">李永明 副主任医师  今日专家号<span style="color: #fe513e;">剩余5个</span></p>
					<p class="inform-run" style="top: 0.78rem;opacity: 0;">廖乐义 副主任医师  今日专家号<span style="color: #fe513e;">剩余5个</span></p>
					<p class="inform-run" style="top: -0.42rem;opacity: 0;">蒋章俊 副主任医师  今日专家号<span style="color: #fe513e;">剩余5个</span></p>
					<a href="#"><img src="../assets/images//list-freeyuyue.png" style="width: .66rem;"/></a>
				</div>
		      
		      
		        
		        <div class="activity">
		            <div class="activity_title">
		                 <div class="activity_title_left">学术交流</div>
		                  <div class="activity_title_right">公益活动</div>
		                  <div class="clear"></div>
		            </div>
		            
		            <ul>
		               <li style="margin-right:0.1rem;"><img  src="../assets/images//gysy.png" /><p>全国知名专家齐聚一堂，共研皮肤诊疗技术<a href="#"><strong>[详情]</strong></a></p></li>
		               <li style="margin-left:0.1rem;"><img  src="../assets/images//gysy2.png" /><p>全国知名专家齐聚一堂，共研皮肤诊疗技术<a href="#"><strong>[详情]</strong></a></p></li>
		               <li style="margin-right:0.1rem;"><img  src="../assets/images//gysy.png" /><p>全国知名专家齐聚一堂，共研皮肤诊疗技术<a href="#"><strong>[详情]</strong></a></p></li>
		               <li style="margin-left:0.1rem;"><img  src="../assets/images//gysy2.png" /><p>全国知名专家齐聚一堂，共研皮肤诊疗技术<a href="#"><strong>[详情]</strong></a></p></li>
		            </ul>
		            <div class="clear"></div>
		            <ul style="display: none;">
		               <li style="margin-right:0.1rem;"><img  src="../assets/images//gysy.png" /><p>全国知名专家齐聚一堂，共研皮肤诊疗技术<a href="#"><strong>[详情]</strong></a></p></li>
		               <li style="margin-left:0.1rem;"><img  src="../assets/images//gysy2.png" /><p>全国知名专家齐聚一堂，共研皮肤诊疗技术<a href="#"><strong>[详情]</strong></a></p></li>
		               <li style="margin-right:0.1rem;"><img  src="../assets/images//gysy.png" /><p>全国知名专家齐聚一堂，共研皮肤诊疗技术<a href="#"><strong>[详情]</strong></a></p></li>
		               
		            </ul>
		            <div class="clear"></div>
		            <a>查看更多&nbsp;&nbsp;＞</a>
		            <!--中间灰色部分-->
		        </div>
		    </section>
		</div>
	</div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data:''
      
    }
  },
  created(){
  	window.onload = () => { this.data = diseaseList } 
  },
  mounted (){
  	this.data =diseaseList;
  	
 //banner lunbo
 	$(".banner_2 .flexslider").flexslider({
    	animation : "slide"
    	
    });
  }
}
</script>

<style>
	
</style>