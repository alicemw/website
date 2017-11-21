<template>
	
	<div class="container">
		<header1></header1>
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
		                   		<template v-for="(item,index) in data" v-if="index >=12 &&index<21 ">
		                   			<router-link :to="item.typedir" >{{item.typename}}</router-link>
		                   		</template>
		                   </li>
		                   
		                   <div class="clear"></div>
		                </ul>
		               <div class="clear"></div>
		                
		             
		        </div>
		        
		        <div class="beauty_total">
		                <div class="beauty_picture"><img src="../assets/images//meirong.png"/><p>皮肤美容</p></div>
		                <ul>
		                   <li>
		                   		<template v-for="(item,index) in data" v-if="index >=21 &&index<27 ">
		                   			<router-link :to="item.typedir" >{{item.typename}}</router-link>
		                   		</template>
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
		
		<div class="innercontainer">
			<section class="passage_five">
		        <div class="consult">
		           <div class="consult_left">人性化服务 一对一就诊 </div>
		           <div class="consult_right"><a href="#">咨询入口&nbsp;&nbsp;＞</a></div>
		        </div>
		        
		        <ul>
		           <li style="margin-right:0.1rem;"><p><img src="../assets/images/icon1.png" /><b>全年无假日医院</b><em>365天无休，为您健康护航</em></p></li>
		           <li style="margin-left:0.1rem;"><p><img src="../assets/images/icon2.png" /><b>一对一私密诊室</b><em>患者为本全程导医服务</em></p></li>
		           <li style="margin-right:0.1rem; margin-bottom:0; margin-top:0;"><p><img src="../assets/images/icon3.png" /><b>医生亲诊</b><em>天天都有医生坐诊</em></p></li>
		           <li style="margin-left:0.1rem; margin-bottom:0; margin-top:0;"><p><img src="../assets/images/icon4.png" /><b>就医隐私保护
					</b><em>保证患者就医资料私密</em></p></li>
		           <li style="margin-right:0.1rem;"><p><img src="../assets/images/icon5.png" /><b>24小时电话预约</b><em>足不出户解决看病难题</em></p></li>
		           <li style="margin-left:0.1rem;"><p><img src="../assets/images/icon6.png" /><b>公开透明收费</b><em>医保定点医院 收费透明</em></p></li>
		           <div class="clear"></div>
		        </ul>
		        
		        <!--中间灰色部分-->
		     
		     
		     </section>
		</div>
		
		<div class="innercontainer">
			<section class="passage_six">
		        <div class="title4"><img src="../assets/images/title4.png" /></div> 
		        <div class="register">
		            <img src="../assets/images/logo2.png" />
		            <p>注：您的信息已加密，仅用于网络挂号，请放心填写</p>
		            <form class="test_list" action="http://m.0832pifu.com/plus/diy.php" enctype="multipart/form-data" method="post">
		              <input type="hidden" name="action" value="post">
						<input type="hidden" name="diyid" value="1">
						<input type="hidden" name="do" value="2">
		              <b>*&nbsp;患者姓名：</b><input type="text" name="name" id="name" placeholder="请输入您的真实姓名"  /><br />
		               <b>*&nbsp;联系方式：</b><input type="text" name="call" id="call" placeholder="请输入您的电话号码"  /><br />
		               <b>*&nbsp;预约日期：</b><el-date-picker
										      v-model="value1"
										      type="date"
										      name = "datetime"
										      id ="datetime"
										      placeholder="选择日期">
										    </el-date-picker><br/>
		               <b>*&nbsp;病情描述：</b><input style="height:0.98rem;" type="text" name="discrib" id="discrib" placeholder="请简单描述您的病情或其他描述"  />
		          		<input type="hidden" name="dede_fields" value="name,text;call,text;datenow,datetime;discrib,text">
		          		<input type="hidden" name="dede_fieldshash" value="5da00fd6b0bd806ebe6dd292e3337f13">
		          		<input type="button" class="jmtj" @click="open()" value="加密提交"/>
		            </form>
		        	
		            <p class="prompt">温馨提示：我院收到您的详细信息后，会及时给您回电。确认之后，发出专家号及详细来院路线到您的手机，请注意查收。</p>
		            <!--中间灰色部分-->
		            
		           <!--<el-progress type="circle" :percentage="percentage" :status="success" ></el-progress>-->
		        
		        </div>
		        
		     </section>
		</div>
		<foot></foot>
	</div>
</template>

<script>
import header1 from './header1.vue'
import foot from './foot.vue'

export default {
  components:{
  	header1,
  	foot
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data:'',
      value1:'',
      percentage:0,
      success:null
      
    }
  },
  created(){
  	let that = this;
  	window.onload = () => { this.data = diseaseList 
  		
  		/*let timer =	setInterval((function(){
  			that.percentage ++;
  			if(that.percentage == 100){
  				clearInterval(timer);
  				that.success = 'success'
  			}
  		}),100);*/
  		
  	}
  },
  mounted (){
  	this.data =diseaseList;
  
 //banner lunbo
 	$(".banner_2 .flexslider").flexslider({
    	animation : "slide"
    	
    });
  },
  methods:{
  	open:function(){
  		var re= /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
		var name =$.trim($("input[name='name']").val()),
			call =$.trim($("input[name='call']").val()),
			datenow =$.trim($("input[name='datenow']").val()),
			discrib =$.trim($("input[name='discrib']").val());
			
			if(re.test(name)||re.test(call)||re.test(datenow)||re.test(discrib)){
				this.$message({
					 	type: 'warning',
      				      message: '请勿输入非法字符!'
					 });
				return false;
			}else {
				if(name.length ==0){
					 this.$message({
					 	type: 'error',
      				      message: '请输入 姓名!'
					 });
					return false;
				}else if(name.length>10||!name.match(/^[\u4e00-\u9fa5]+$/)){
					this.$message({
					 	type: 'error',
      				      message: '请输入正确姓名!'
					 });
					$("input[name='name']").val("");
					return false;
				}else {
					if(call.length==0){
						this.$message({
					 	type: 'error',
      				      message: '请输入电话!'
					 });
						return false;
					}else if(!call.match(/^1[34578]\d{9}$/)){
						this.$message({
					 	type: 'error',
      				      message: '请输入正确电话!'
					 });
						return false;
					}else {
						if(discrib.length==0){
							this.$message({
							 	type: 'error',
		      				      message: '请描述症状!'
							 });
							return false;
						}else {
							$("form").submit();
						}
							
					}
				
			}
		}
  	}
  }
}
</script>

<style>
.el-input__prefix {
	left:0.2rem
}
.el-date-editor.el-input {
	width: 3.5rem;
}
</style>