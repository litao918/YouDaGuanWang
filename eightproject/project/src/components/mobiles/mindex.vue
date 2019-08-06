<template>
  <div class="hello">
    <!-- 移動端 -->
    <div id="mobile">
      <!-- 头部 -->
      <div class="titleimg">
        <div class="title">
          <div class="icon1">
            <img src="../../images/indeximg/icon1.png" alt style="height:100%;width:100%;" />
          </div>
          <div class="icon2">
            <img src="../../images/indeximg/youdariyu.png" alt style="height:100%;width:100%;" />
          </div>
          <div class="icon3">
            <img src="../../images/indeximg/gerenzhongxin.png" alt style="height:100%;width:100%;" />
          </div>
        </div>
      </div>

      <!-- 标题 -->
      <div class="titletext">
        <div>专业日语课程体系</div>
        <div>定制专业高效的日语学习方案，满足多元化学习需求</div>
      </div>

      <!-- 类型 -->
      <div class="menubox">
        <div class="menuimg1">
          <span>能力考试</span>
        </div>
        <div class="menuimg2">
          <span>高考日语</span>
        </div>
      </div>

      <div class="menuclick">
        <div>领取体验课</div>
        <div>领取体验课</div>
      </div>

      <div class="menubox">
        <div class="menuimg3">
          <span>少儿日语</span>
        </div>
        <div class="menuimg4">
          <span>企业培训</span>
        </div>
      </div>

      <div class="menuclick">
        <div>领取体验课</div>
        <div>领取体验课</div>
      </div>

      <!-- 标题 -->
      <div class="titletext">
        <div>为什么选择友达日语</div>
        <div>达为您提供轻松高效的学习体验</div>
      </div>

      <swiper :options="swiperOption" class="swiper-wrap">
        <swiper-slide>
          <div class="lunboimgbox">
            <div class="lunbotitle">严格筛选中外教团队，并由您来为我们的教师团队打分</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="lunboimgbox">
            <div class="lunbotitle">严格筛选中外教团队，并由您来为我们的教师团队打分</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="lunboimgbox">
            <div class="lunbotitle">严格筛选中外教团队，并由您来为我们的教师团队打分</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="lunboimgbox">
            <div class="lunbotitle">严格筛选中外教团队，并由您来为我们的教师团队打分</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="lunboimgbox">
            <div class="lunbotitle">严格筛选中外教团队，并由您来为我们的教师团队打分</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="lunboimgbox">
            <div class="lunbotitle">严格筛选中外教团队，并由您来为我们的教师团队打分</div>
          </div>
        </swiper-slide>

        <!-- 小圆点 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <!-- 了解友达日语 -->
      <div class="liaojie">
        <div class="titletext">
          <div class="pt20">一分钟了解友达日语</div>
          <div>启您的专属日语课堂</div>
        </div>
        <div class="shiping">
          <div class="bofang">
            <img style="height:100%;width:100%;" src="../../images/indeximg/bofang.png" alt />
          </div>
        </div>

        <div class="menuclick">
          <div class="mt30">领取体验课</div>
        </div>
      </div>

      <!-- 高标准严选 -->
      <div class="gbys pt20" style>
        <div class="titletext mt0 mb22">
          <div>高标准严选中外教</div>
          <div>为每位学员提供高品质教学服务</div>
        </div>

        <div class="zizhooo">
          <div style="display:flex">
            <div class="yanxuanimg mb10 yanxuanimg1">
              
            </div>
            <div class="h176 w130">
              <div class="yanxuantitle">教师资质</div>
              <div class="yanxuantext">80%硕士学历</div>
              <div class="yanxuantext">中日名校毕业</div>
            </div>
          </div>

          <div style="display:flex;">
            <div class="yanxuanimg yanxuanimg2">
              
            </div>
            <div class="h176 w130">
              <div class="yanxuantitle">教学能力</div>
              <div class="yanxuantext">听说读写多维度</div>
              <div class="yanxuantext">注重实际运用能力</div>
            </div>
          </div>
        </div>

        <div class="zizhooo">
          <div style="display:flex;">
            <div class="yanxuanimg yanxuanimg3">
              
            </div>
            <div class="h176 w130">
              <div class="yanxuantitle">沟通能力</div>
              <div class="yanxuantext">鼓励思考激发互动</div>
              <div class="yanxuantext">提高学习积极性</div>
            </div>
          </div>

          <div style="display:flex;">
            <div class="yanxuanimg yanxuanimg4">
              
            </div>
            <div class="h176 w130">
              <div class="yanxuantitle">专业能力</div>
              <div class="yanxuantext">丰富教学经验,因材</div>
              <div class="yanxuantext">施教，确保高效学习</div>
            </div>
          </div>
        </div>

        <div class="menuclick">
          <div class="mt35">领取体验课</div>
        </div>
      </div>

      <!-- 标题 -->
      <div class="titletext mb30 mt20">
        <div>个性化定制学习内容</div>
        <div>依托大数据、AI等高新科技</div>
      </div>

      <!-- 试听 -->
      <div class="shiting">
        <div class="ml24 mr8 pt5 h69w69">
          <img style="height:100%;width:100%;" src="../../images/indeximg/g1.png" alt />
        </div>
        <div>
          <div class="ft17 lh24 pb5" style="color:#573E41;">1对1专属中外教主修课</div>
          <div class="lh24 ft14" style="color:#979797;">1对1专属中外教上课，零基础到高级别</div>
          <div class="lh24 ft14" style="color:#979797;">共12个提升级别，送全彩权威教材</div>
        </div>
      </div>

      <div class="shiting">
        <div class="ml24 mr8 pt5 h69w69">
          <img style="height:100%;width:100%;" src="../../images/indeximg/g2.png" alt />
        </div>
        <div>
          <div class="ft17 lh24 pb5" style="color:#573E41;">1对4专项提升课</div>
          <div class="lh24 ft14" style="color:#979797;">涵盖外教口语、写作、听力等专项课程</div>
          <div class="lh24 ft14" style="color:#979797;">以及旅游、交通等趣味课程</div>
        </div>
      </div>

      <div class="shiting">
        <div class="ml24 mr8 pt5 h69w69">
          <img style="height:100%;width:100%;" src="../../images/indeximg/g3.png" alt />
        </div>
        <div>
          <div class="ft17 lh24 pb5" style="color:#573E41;">实时互动直播课</div>
          <div class="lh24 ft14" style="color:#979797;">一对多听力强化课，一边是有趣的课程</div>
          <div class="lh24 ft14" style="color:#979797;">引导，一边是热烈的同学之间交流</div>
        </div>
      </div>

      <div class="shiting">
        <div class="ml24 mr8 pt5 h69w69">
          <img style="height:100%;width:100%;" src="../../images/indeximg/g4.png" alt />
        </div>
        <div>
          <div class="ft17 lh24 pb5" style="color:#573E41;">课后作业与评价系统</div>
          <div class="lh24 ft14" style="color:#979797;">每节课能对老师进行评价，老师会将每</div>
          <div class="lh24 ft14" style="color:#979797;">节课的作业认真批改后及时反馈学员</div>
        </div>
      </div>
      <div class="menuclick">
        <div class="mt0">了解更多</div>
      </div>

      <!-- 缺少背景图片 -->
      <div class="fuwu">
        <div class="ft20 lh27" style="color:#fff;">全程高质、免费的日本留学服务</div>
        <div class="ft14 lh27 mb35" style="color:#E4E4E4;">一站式解决您的留学留考问题</div>

        <div class="fuwubox">
          <div class="w170">
            <div class="iconfw iconfw1">
              
            </div>
            <div class="yello">精英海归顾问团队</div>
            <div class="ftle">留日成功率100%</div>
          </div>

          <div class="w170">
            <div class="iconfw iconfw2">
             
            </div>
            <div class="yello">100多所日本学校直联</div>
            <div class="ftle">全程协助手续办理</div>
          </div>
        </div>

        <div class="fuwubox">
          <div class="w170">
            <div class="iconfw iconfw3">
              
            </div>
            <div class="yello">设日本办事处</div>
            <div class="ftle">解决赴日学生后顾之忧</div>
          </div>

          <div class="w170">
            <div class="iconfw iconfw4">
            
            </div>
            <div class="yello">全程免费服务</div>
            <div class="ftle">不收取任何中介费</div>
          </div>
        </div>

        <div class="menuclick">
          <div class="mt40" style="background:#fff;color:#4E3939">了解更多</div>
        </div>
      </div>

      <div class="shitingbox">
        <!-- 标题 -->
        <div class="titletext1 mt0 mb30">
          <div>如何免费体验友达试听课？</div>
          <div>为每位学员提供高品质教学服务</div>
        </div>

        <!-- 试听 -->
        <div class="shiting">
          <div class="h69w63 mtb30 pt5">
            <img style="height:100%;width:100%;" src="../../images/indeximg/s1.png" alt />
          </div>
          <div>
            <div class="ft17 lh24" style="color:#573E41;">在线注册免费</div>
            <div class="ft17 lh24 pb5" style="color:#573E41;">领取价值288元试听课</div>
            <div class="ft14 lh24" style="color:#979797;">注册完成后我们会尽快与您联系</div>
          </div>
        </div>

        <div class="shiting">
          <div class="h69w63 mtb30 pt5">
            <img style="height:100%;width:100%;" src="../../images/indeximg/s2.png" alt />
          </div>
          <div>
            <div class="ft17 lh24 pb5" style="color:#573E41;">预约试听课时间</div>
            <div class="ft14 lh24" style="color:#979797;">您的专属课程老师将会联系您，安排</div>
            <div class="ft14 lh24" style="color:#979797;">适合您的的课程内容和课程时间</div>
          </div>
        </div>

        <div class="shiting">
          <div class="h69w63 mtb30 pt5">
            <img style="height:100%;width:100%;" src="../../images/indeximg/s3.png" alt />
          </div>
          <div>
            <div class="ft17 lh24 pb5" style="color:#573E41;">进入在线教室开始上课</div>
            <div class="ft14 lh24" style="color:#979797;">下载上课软件，根据预约的时间，进</div>
            <div class="ft14 lh24" style="color:#979797;">入一对一在线教室开始学习日语</div>
          </div>
        </div>

        <div class="menuclick pb60">
          <div class="mt0">了解更多</div>
        </div>
      </div>

      <!-- 合作伙伴 -->

      <div class="pt70">
        <h3 class="ft20" style="text-align: center;color:#2B2B2B;">合作伙伴</h3>
        <div class="hezuohuoban">
          <div :style="note[0]"></div>
          <div :style="note[1]"></div>
        </div>

        <div class="hezuohuoban">
          <div :style="note[2]"></div>
          <div :style="note[3]"></div>
        </div>

        <div class="hezuohuoban">
          <div :style="note[4]"></div>
          <div :style="note[5]"></div>
        </div>

        <div class="hezuohuoban">
          <div :style="note[6]"></div>
          <div :style="note[7]"></div>
        </div>
      </div>

      <!-- 企業榮譽 -->
      <div class="shitingbox2">
        <h3 class="ft20 mt0 pb40" style="text-align: center;color:#2B2B2B;">合作伙伴</h3>
        <div class="hero">
          <div class="w160">
            <div class="heroimg">
              <img style="height:100%;width:100%;" src="../../images/indeximg/r1.png" alt />
            </div>
            <div class="mt13">2018年度</div>
            <div>互联网教育优秀示范企业</div>
          </div>
          <div class="w160">
            <div class="heroimg">
              <img style="height:100%;width:100%;" src="../../images/indeximg/r2.png" alt />
            </div>
            <div class="mt13">2019年度</div>
            <div>丰田（中国）合作伙伴</div>
          </div>
        </div>

        <div class="hero">
          <div class="w160">
            <div class="heroimg">
              <img style="height:100%;width:100%;" src="../../images/indeximg/r3.png" alt />
            </div>
            <div class="mt13">2018年度</div>
            <div>成长力优秀品牌</div>
          </div>
          <div class="w160">
            <div class="heroimg">
              <img style="height:100%;width:100%;" src="../../images/indeximg/r4.png" alt />
            </div>
            <div class="mt13">2018年度</div>
            <div>小语种创新品牌</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titles from '../../widget_component/titles.vue';
import footers from '../../widget_component/footers.vue';
import { swiper, swiperSlide } from "vue-awesome-swiper";

require("swiper/dist/css/swiper.css");
export default {
  components: { swiper, swiperSlide,titles,footers },
  data() {
    const that = this;
    return {
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 10000,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,

        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      },
      //合作伙伴
      note: [
        {
          backgroundImage: "url(" + require("../../images/indeximg/h1.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center center"
        },
        {
          backgroundImage: "url(" + require("../../images/indeximg/h2.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center center"
        },
        {
          backgroundImage: "url(" + require("../../images/indeximg/h3.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center center"
        },
        {
          backgroundImage: "url(" + require("../../images/indeximg/h4.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center center"
        },
        {
          backgroundImage: "url(" + require("../../images/indeximg/h5.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center center"
        },
        {
          backgroundImage: "url(" + require("../../images/indeximg/h6.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center center"
        },
        {
          backgroundImage: "url(" + require("../../images/indeximg/h7.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center center"
        },
        {
          backgroundImage: "url(" + require("../../images/indeximg/h8.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center center"
        }
      ],
      
    };
  },
  created(){
    console.log(window.innerWidth)
  },
  mounted() {
    
  },
  
    
  
};


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../style/Common_style.css";

    #mobile{
      display: block !important;
    }
    #pcWeb{
      display: none !important;
    }
  .titleimg {
    width: 100%;
    height: 6.2rem;
    background: url("../../images/indeximg/titlebackimg.png") no-repeat 100% 100%;
    background-size: 100% auto;
    .title {
      width: 100%;
      height: 1.5rem;
      display: flex;
      justify-content: space-between;
      line-height: 1.5rem;
      div {
        font-size: 0.2rem;
      }
    }
    .icon1 {
      height: 0.5rem;
      width: 0.5rem;
      padding-left: 0.15rem;
    }
    .icon2 {
      height: 0.5rem;
      width: 2.1rem;
    }
    .icon3 {
      height: 0.5rem;
      width: 0.5rem;
      padding-right:  0.15rem;
    }
  }
  .titletext {
    text-align: center;
    line-height: .54rem;
    padding-top: .56rem;
    margin-top: .2rem;
    margin-bottom: .44rem;
  }
  .titletext1 {
    text-align: center;
    line-height: .54rem;
    padding-top: 1.1rem;
    margin-bottom: .44rem;
  }
  .titletext1 div:nth-child(1) {
    color: #2b2b2b;
    font-size: .4rem;
    font-weight: bold;
  }
  .titletext1 div:nth-child(2) {
    color: #959595;
    font-size: .28rem;
  }
  .titletext div:nth-child(1) {
    color: #2b2b2b;
    font-size: .4rem;
    font-weight: bold;
  }
  .titletext div:nth-child(2) {
    color: #959595;
    font-size: .28rem;
  }
  .menubox {
    display: flex;
    justify-content: space-around;
    margin-top: .6rem;
    div {
      width: 2.66rem;
      height: 2.66rem;
      position: relative;
      span {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 0px;
        line-height: .58rem;
        color: #fff;
        font-size: .28rem;
      }
    }
    .menuimg1 {
      background: url("../../images/indeximg/menu1.png") no-repeat 100% 100%;
      background-size: 100% auto;
    }
    .menuimg2 {
      background: url("../../images/indeximg/menu2.png") no-repeat 100% 100%;
      background-size: 100% auto;
    }
    .menuimg3 {
      background: url("../../images/indeximg/menu3.png") no-repeat 100% 100%;
      background-size: 100% auto;
    }
    .menuimg4 {
      background: url("../../images/indeximg/menu4.png") no-repeat 100% 100%;
      background-size: 100% auto;
    }
  }

  .menuclick {
    display: flex;
    justify-content: space-around;
    line-height: .7rem;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: .28rem;
    div {
      width: 2.28rem;
      height: .7rem;
      border-radius: 2rem;
      margin-top: .34rem;
    }
  }
  .menuclick div:nth-child(1) {
    background: #ff4942;
  }
  .menuclick div:nth-child(2) {
    background: #ffc632;
  }

  .remove {
    height: 1rem;
  }

  // 轮播
  .lunboimgbox {
    height: 6.04rem;
    width: 6.66rem;
    margin: 0 auto;
    background: url("../../images/indeximg/lunbobnner.png") no-repeat 100% 100%;
    background-size: 100% auto;
    position: relative;
   
    box-shadow: 0px  .02rem .12rem .04rem rgba(203, 203, 203, 0.5);
    margin-top: .2rem;
    border-radius: .2rem;
    .lunbotitle {
      position: absolute;
      bottom: .3rem;
      font-size: .34rem;
      color: #573e41;
      line-height: .5rem;
      
      padding: 0px .3rem;
    }
  }
  .swiper-wrap {
    height: 355px;
  }

  // 了解
  .liaojie {
    height: 8.92rem;
    width: 100%;
    background: #fff5f5;
  }
  .shiping {
    margin: 0 auto;
    width: 90%;
    height: 4.04rem;
    background: url("../../images/indeximg/shiping.png") no-repeat 100% 100%;
    background-size: 100% auto;
    position: relative;
    .bofang {
      height: .7rem;
      width: .7rem;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

  // 严选
  .gbys {
    height: 8.78rem;
    background: #f8f8f8;
  }
  .zizhooo {
    display: flex;
    justify-content: space-around;
    margin-top: .8rem;
  }
  .yanxuantitle {
    color: #573e41;
    font-size: .34rem;
    line-height: .5rem;
    font-weight: bold;
  }
  .yanxuantext {
    font-size: .28rem;
    color: #989898;
    line-height: .5rem;
  }
  .yanxuanimg {
    height: .52rem;
    width: .52rem;
    margin-right: .16rem;
  }
  .yanxuanimg1{
     background: url('../../images/indeximg/yanxuan1.png') no-repeat center center;
        background-size: 100% 100%;
  }
  .yanxuanimg2{
     background: url('../../images/indeximg/yanxuan2.png') no-repeat center center;
        background-size: 100% 100%;
  }
  .yanxuanimg3{
     background: url('../../images/indeximg/yanxuan3.png') no-repeat center center;
        background-size: 100% 100%;
  }
  .yanxuanimg4{
     background: url('../../images/indeximg/yanxuan4.png') no-repeat center center;
        background-size: 100% 100%;
  }

  // 试听
  .shitingbox {
    background: #f8f8f8;
  }

  .shiting {
    display: flex;
    margin-bottom: .8rem;
  }

  // 留学服务
  .fuwubox {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 0 .2rem;
    margin-bottom: .6rem;
  }
  .fuwu {
    height: 8.86rem;
    width: 100%;
    background: rgb(189, 189, 189);
    text-align: center;
    padding-top: 1rem;
    margin-top: 1.4rem;
  }
  .yello {
    color: #ffc632;
    font-size: .34rem;
    line-height: .48rem;
  }
  .ftle {
    color: #f8f8f8;
    font-size: .28rem;
    line-height: .48rem;
  }
  .iconfw {
    height: .5rem;
    width: .5rem;
    text-align: center;
    margin: .1rem auto;

  }
  .iconfw1{
        background: url('../../images/indeximg/fw1.png') no-repeat center center;
        background-size: 100% 100%;
  }
  .iconfw2{
        background: url('../../images/indeximg/fw2.png') no-repeat center center;
        background-size: 100% 100%;
  }
  .iconfw3{
        background: url('../../images/indeximg/fw3.png') no-repeat center center;
        background-size: 100% 100%;
  }
  .iconfw4{
        background: url('../../images/indeximg/fw4.png') no-repeat center center;
        background-size: 100% 100%;
  }

  // 合作伙伴
  .hezuohuoban {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;

    div {
      width: 2rem;
      height: 1.28rem;
    }
  }

  // 企業榮譽
  .shitingbox2 {
    background: #f8f8f8;
    padding: .96rem 0;
  }
  .hero {
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: #2b2b2b;
    font-size: .28rem;
    padding: 0 .4rem;
    padding-bottom: .45rem;
    .heroimg {
      width: 2.54rem;
      height: 1.8rem;
      margin: 0 auto;
    }
  }
  




</style>


