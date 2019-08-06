<template>
  <div class="hello">
    <div id="pcWeb">
      <div class="title01" style="height:30px;">
        <div class="btitle" style="width:1080px;margin:0 auto;line-height:30px;font-size:16px;">
          <div>
            <img
              style="height:13px;width:13px;margin-right:5px;"
              src="../../images/indeximg/p1.png"
              alt
            />
            <span>400-860-0101</span>
          </div>
          <div>
            <img
              style="height:13px;width:13px;margin-right:5px;"
              src="../../images/indeximg/p2.png"
              alt
            />
            <span>友达问答</span>
            <img
              style="height:13px;width:13px;margin-right:5px;margin-left:16px;"
              src="../../images/indeximg/p3.png"
              alt
            />
            <span>最新动态</span>
          </div>
        </div>
      </div>
      <!-- 頭部 -->
      <titles></titles>
      <!-- 轮播图 -->
      <div class="lunbo" style="height:520px;">
        <template>
          <el-carousel indicator-position="outside" height="520px" indicatorPosition>
            <el-carousel-item>
              <div class="lunbobox">
                <img src="../../images/indeximg/bnner01.png" alt />
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="lunbobox">
                <img src="../../images/indeximg/bnner01.png" alt />
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="lunbobox">
                <img src="../../images/indeximg/bnner01.png" alt />
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="lunbobox">
                <img src="../../images/indeximg/bnner01.png" alt />
              </div>
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>

      <!-- 标题 -->
      <div class="mintitle">
        <div style="font-size:42px;color:#2B2B2B">专业日语课程体系</div>
        <div style="font-size:24px;color:#959595">定制专业高效的日语学习方案，满足多元化学习需求</div>
      </div>

      <!-- 体系 -->
      <div class="sb bx tixi">
        <div>
          <div class="menu1">
            <div class="menutext">能力考试</div>
          </div>
          <div class="tixibtn">领取体验课</div>
        </div>
        <div>
          <div class="menu2">
            <div class="menutext">高考日语</div>
          </div>
          <div class="tixibtn" style="background:#FFC632">领取体验课</div>
        </div>
        <div>
          <div class="menu3">
            <div class="menutext">少儿日语</div>
          </div>
          <div class="tixibtn">领取体验课</div>
        </div>
        <div>
          <div class="menu4">
            <div class="menutext">企业培训</div>
          </div>
          <div class="tixibtn" style="background:#FFC632">领取体验课</div>
        </div>
      </div>

      <!-- 为什么选择 -->

      <div class="whyxuanze">
        <!-- 标题 -->
        <div class="mintitle">
          <div style="font-size:42px;color:#2B2B2B">为什么选择友达日语</div>
          <div style="font-size:24px;color:#959595">友达为您提供轻松高效的学习体验</div>
        </div>

        <div class="sb bx" style="margin-bottom:40px;margin-top:40px;">
          <div class="wmenu wmenu1">
            <div class="shuoming">严格筛选中外教团队，并由您来为我们 的教师团队打分。</div>
          </div>
          <div class="wmenu wmenu2">
            <div class="shuoming">严格筛选中外教团队，并由您来为我们 的教师团队打分。</div>
          </div>
          <div class="wmenu wmenu3">
            <div class="shuoming">严格筛选中外教团队，并由您来为我们 的教师团队打分。</div>
          </div>
        </div>

        <div class="sb bx">
          <div class="wmenu wmenu4">
            <div class="shuoming">严格筛选中外教团队，并由您来为我们 的教师团队打分。</div>
          </div>
          <div class="wmenu wmenu5">
            <div class="shuoming">严格筛选中外教团队，并由您来为我们 的教师团队打分。</div>
          </div>
          <div class="wmenu wmenu6">
            <div class="shuoming">严格筛选中外教团队，并由您来为我们 的教师团队打分。</div>
          </div>
        </div>
      </div>

      <!-- 一分钟了解 -->

      <div class="liaojie">
        <!-- 标题 -->
        <div class="mintitle" style="margin-bottom:65px;">
          <div style="font-size:42px;color:#2B2B2B">一分钟了解友达日语</div>
          <div style="font-size:24px;color:#959595">开启您的专属日语课堂</div>
        </div>

        <!-- 播放 -->
        <div class="sb bx">
          <div>
            <div class="bfangx bfangx1" style="margin-bottom:100px;margin-top:30px;">一对一在线中外教</div>
            <div class="bfangx bfangx2" style="margin-left:50px;">东京实地教研中心</div>
          </div>

          <div class="aotoplay">
            <div class="bofangclick"></div>
          </div>

          <div>
            <div class="bfangx bfangx3" style="margin-bottom:100px;">专业定制日语课程</div>
            <div class="bfangx bfangx4" style="margin-left:50px;">专业贴心的服务</div>
          </div>
        </div>

        <div class="btn">领取体验课</div>
      </div>

      <!-- 高标严选 -->
      <div class="gaobiaoyanx" >
            <div class="mintitle" style="margin-bottom:65px;">
              <div style="font-size:42px;color:#2B2B2B">高标准严选中外教 </div>
              <div style="font-size:24px;color:#959595">为每位学员提供高品质教学服务</div>
            </div>

              <div class="bx" style="position: relative;">
               <div style="position: relative;" >
                    <div class="sb1">
                          <div class="sb" >
                            <div class="gyanxuan1 mr20" style="height:30px;width:39px;"></div>
                            <div class="zizhi" style="height:120px;width:220px;">
                              <div class="zizhitiel l0" >教师资质 </div>
                              <div>80%硕士学历 </div>
                              <div>中日名校毕业</div>
                            </div>
                          </div>
                          <div></div>

                          <div class="sb" >
                            <div class="gyanxuan2 mr20" style="height:30px;width:30px;"></div>
                            <div class="zizhi" style="height:120px;width:220px;">
                              <div class="zizhitiel l0">教学能力 </div>
                              <div>听说读写多维度  </div>
                              <div>注重实际运用能力</div>
                            </div>
                          </div>
                          <div></div>
                    </div>

                     <div class="sb2">
                          <div class="sb" >
                            <div class="gyanxuan3 mr20" style="height:30px;width:30px;"></div>
                            <div class="zizhi" style="height:120px;width:220px;">
                              <div class="zizhitiel l0">沟通能力 </div>
                              <div>鼓励思考激发互动</div>
                              <div>提高学习积极性</div>
                            </div>
                          </div>
                          <div></div>

                          <div class="sb" >
                            <div class="gyanxuan4 mr20" style="height:33px;width:28px;"></div>
                            <div class="zizhi" style="height:120px;width:220px;">
                              <div class="zizhitiel l0">专业能力 </div>
                              <div>丰富教学经验,因材 </div>
                              <div>施教，确保高效学习</div>
                            </div>
                          </div>
                          <div></div>
                    </div>
               </div>


                <div class='meinv'></div>
              </div>



            <div class="btn" style="margin-top:400px;">领取体验课</div>


      </div>


      <!-- 个性化定制学习 -->
      <div>
        <div class="mintitle" style="margin-bottom:65px;">
              <div style="font-size:42px;color:#2B2B2B">高标准严选中外教 </div>
              <div style="font-size:24px;color:#959595">为每位学员提供高品质教学服务</div>
          </div>
          <div class="gexing">
              <div class="w254 position1">
                  <div style="font-size:20px;color:#2B2B2B;padding-bottom:20px;">1对1专属中外教主修课</div>
                  <div>1对1专属中外教上课，零基础到高级别共</div>
                  <div>12个提升级别，送全彩权威教材</div>
              </div>

               <div class="w254 position2">
                  <div style="font-size:20px;color:#2B2B2B;padding-bottom:20px;">1对4专项提升课</div>
                  <div>涵盖外教口语、写作、听力等专项课程以</div>
                  <div>及旅游、交通等趣味课程</div>
              </div>
              <div class="w254 position3">
                  <div style="font-size:20px;color:#2B2B2B;padding-bottom:20px;">实时互动直播课</div>
                  <div>一对多听力强化课，一边是有趣的课程引</div>
                  <div>导，一边是热烈的同学之间交流</div>
              </div>

              <div class="w254 position4">
                  <div style="font-size:20px;color:#2B2B2B;padding-bottom:20px;">课后作业与评价系统</div>
                  <div>每节课程能对老师进行评价，老师会将每</div>
                  <div>课的作业认真批改后及时反馈给学员。</div>
              </div>
          </div>

          <div class="btn">了解更多</div>          
      </div>

      <!-- 免费留学 -->
      <div class="liuxue">
             <div class="mintitle" style="margin-bottom:65px;padding-top:114px;">
              <div style="font-size:42px;color:#fff">高标准严选中外教 </div>
              <div style="font-size:24px;color:#E4E4E4">为每位学员提供高品质教学服务</div>
              </div>

          <div class="sb bx tc">
              <div>
                <div style="margin-bottom:25px;"><img style="height:52px;width:54px;" src="../../images/indeximg/liu1.png" alt=""></div>
                <div style="color:#FFC632;font-size:24px;line-height: 35px;">精英海归顾问团队</div>
                <div style="color:#F8F8F8;font-size:20px;line-height: 35px;">留日成功率100%</div>
              </div>
              <div>
                <div style="margin-bottom:25px;"><img style="height:50px;width:47px;" src="../../images/indeximg/liu2.png" alt=""></div>
                <div style="color:#FFC632;font-size:24px;line-height: 35px;">精英海归顾问团队</div>
                <div style="color:#F8F8F8;font-size:20px;line-height: 35px;">留日成功率100%</div>
              </div>
              <div>
                <div style="margin-bottom:25px;"><img style="height:47px;width:50px;" src="../../images/indeximg/liu3.png" alt=""></div>
                <div style="color:#FFC632;font-size:24px;line-height: 35px;">精英海归顾问团队</div>
                <div style="color:#F8F8F8;font-size:20px;line-height: 35px;">留日成功率100%</div>
              </div>
              <div>
                <div style="margin-bottom:25px;"><img style="height:43px;width:54px;" src="../../images/indeximg/liu4.png" alt=""></div>
                <div style="color:#FFC632;font-size:24px;line-height: 35px;">精英海归顾问团队</div>
                <div style="color:#F8F8F8;font-size:20px;line-height: 35px;">留日成功率100%</div>
              </div>
          </div>


          <div class="btn" style="background:#fff;color:#414141;">了解更多</div>
      </div>

      <!-- 免费试听 -->
      <div>
          <div class="mintitle" style="margin-bottom:65px;padding-top:1px;">
              <div style="font-size:42px;color:#2B2B2B">如何免费体验友达试听课？ </div>
              <div style="font-size:24px;color:#959595">为每位学员提供高品质教学服务</div>
          </div>

           <div class="sb bx tc psr">
              <div>
                <div style="margin-bottom:25px;"><img class="liuxueicon" src="../../images/indeximg/pcst1.png" alt=""></div>
                <div class="liuxuetext1">在线注册免费</div>
                <div class="liuxuetext1"> 领取价值288元试听课</div>
                <div class="liuxuetext">注册完成后我们会尽快与您联系</div>
              </div>
              <div>
                <div style="margin-bottom:25px;"><img class="liuxueicon" src="../../images/indeximg/pcst2.png" alt=""></div>
                <div class="liuxuetext1">预约试听课时间</div>
                <div class="liuxuetext">您的专属课程老师将会联系您，安排%</div>
                <div class="liuxuetext">适合您的课程内容和课程时间</div>
              </div>
              <div>
                <div style="margin-bottom:25px;z-index:999;"><img class="liuxueicon" src="../../images/indeximg/pcst3.png" alt=""></div>
                <div class="liuxuetext1">进入在线教室开始上课 </div>
                <div class="liuxuetext">下载上课软件，根据预约的时间，进入一对</div>
                <div class="liuxuetext">一在线教室开始学习日语</div>
              </div>

              <div class="tiapozi1"></div>
              <div class="tiapozi2"></div>

             
          </div>

          

           <div class="btn">了解更多</div>     
      </div>

      <!-- 相关资讯 -->
      <div style="background:#F8F8F8;padding-bottom:110px;">
         <div class="mintitle" style="margin-bottom:65px;padding-top:100px;">
              <div style="font-size:42px;color:#2B2B2B">友达日语相关资讯  </div>
              <div style="font-size:24px;color:#959595">丰富的友达日语网课资源与日本风情资讯</div>
         </div>

         <div class="sb bx">
            <div class="sb zixuan"  >
              <div style="font-size:32px;color:#2B2B2B; margin-left:25px;">友达动态</div>
              <div class="lejiegengduo" >了解更多</div>
            </div>
            <div class="sb zixuan"  >
              <div style="font-size:32px;color:#2B2B2B; margin-left:25px;">媒体报道</div>
              <div class="lejiegengduo" >了解更多</div>
            </div>
         </div>

         <div class="sb bx" style="margin-top:20px;">
              <div class="zixun">
                <h3 style="color:#2B2B2B;font-size:24px;font-weight: normal;">巴别塔触碰不到的天堂</h3>
                <div style="font-size:12px;color:#959595;line-height:17px;">随着现在生活节奏越来越快，竞争也越来越激烈，大家也都越来越重视投资自身教育。教育培训市场也异常火热，特别是外语培训市场，每个培训机构也都有各自的卖点，比如“浸入式” 、“母语式”……还有各种品牌甚至明星背书，营销手段种类繁多。那到底应该用什么标准来评判一家培训机构是否合格?</div>
                <div style="color:#2B2B2B;font-size:12px;padding-top:12px;margin-bottom:15px;padding-bottom:20px;border-bottom: 1px solid #E6E6E6;">发表于：2017-01-10</div>
                <div class="sb" style="font-size:12px;padding-bottom:7px;">
                  <div style="color:#2B2B2B;line-height:17px;">友达日语：巴别塔触碰不到的天堂，不如寻找一双翅膀</div>
                  <div>2017-01-10</div>
                </div>
                <div class="sb" style="font-size:12px;padding-bottom:7px;">
                  <div style="color:#2B2B2B;line-height:17px;">友达日语、VIPKID、VIP陪练……1对1在线教育格局初定</div>
                  <div>2017-01-10</div>
                </div>
                <div class="sb" style="font-size:12px;padding-bottom:7px;">
                  <div style="color:#2B2B2B;line-height:17px;">全面发力，配合发展公平而有质量的教育</div>
                  <div>2017-01-10</div>
                </div>
                <div class="sb" style="font-size:12px;padding-bottom:7px;">
                  <div style="color:#2B2B2B;line-height:17px;">友达青少儿日语课程：让家长更轻松，让孩子更优秀</div>
                  <div>2017-01-10</div>
                </div>
                <div class="sb" style="font-size:12px;padding-bottom:7px;">
                  <div style="color:#2B2B2B;line-height:17px;">专访友达日语在线运营总经理：蒋山先生</div>
                  <div>2017-01-10</div>
                </div>
                
              </div>
              <div class="zixun ">
                  <div class="zix1">
                        <div class="zixuntext" >
                          <div style="font-size:18px;line-height:40px;">强势崛起，谦逊前行</div>
                          <div style="font-size:12px;line-height:17px;">今年9月10日在全国教育大会上的讲话中提出了关于教育的“首要问题”和我国教育的“根本任务”的重要论断。教育作为“国之大计”，不但关系到国家民族，对于家庭和个人，也是至关重要，所以现在越来越多的人选择对自己和孩子进行教育投资。</div>
                        </div>
                  </div>
              </div>
         </div>



      </div>

      <!-- 合作伙伴 -->
      <div>
            <div style="padding-bottom:30px;text-align: center;color:#2B2B2B;font-size:42px;padding-top:120px;">合作伙伴</div>
            <div class="sb bx huoban">
              <div>
                <div class="ppicont ppicont1"></div>
              </div>

              <div>
                <div class="ppicont ppicont2"></div>
              </div>

              <div>
                <div class="ppicont ppicont3"></div>
              </div>

              <div>
                <div class="ppicont ppicont4"></div>
              </div>
             
            </div>
             <div class="sb bx huoban">
              <div>
                <div class="ppicont ppicont5"></div>
              </div>

              <div>
                <div class="ppicont ppicont6"></div>
              </div>

              <div>
                <div class="ppicont ppicont7"></div>
              </div>

              <div>
                <div class="ppicont ppicont8"></div>
              </div>
             
            </div>
      </div>

      <!-- 企业荣誉 -->
      <div>

           <div style="padding-bottom:60px;text-align: center;color:#2B2B2B;font-size:42px;padding-top:120px;">企业荣誉</div>

            <div class="sb bx">
                  <div style="color:#2B2B2B;font-size:18px;line-height:25px;text-align: center;"> 
                      <div style="padding-bottom:10px;">
                        <img style="height:150px;width:210px;" src="../../images/indeximg/pchh1.png" alt="">
                      </div>
                      <div>2018年度</div>
                      <div> 互联网教育优秀示范企业</div>
                  </div>
                  <div style="color:#2B2B2B;font-size:18px;line-height:25px;text-align: center;"> 
                      <div style="padding-bottom:10px;">
                        <img style="height:150px;width:210px;" src="../../images/indeximg/pchh2.png" alt="">
                      </div>
                      <div>2019年度</div>
                      <div> 丰田（中国）合作伙伴</div>
                  </div>
                  <div style="color:#2B2B2B;font-size:18px;line-height:25px;text-align: center;"> 
                      <div style="padding-bottom:10px;">
                        <img style="height:150px;width:210px;" src="../../images/indeximg/pchh3.png" alt="">
                      </div>
                      <div>2018年度</div>
                      <div> 成长力优秀品牌</div>
                  </div>
                  <div style="color:#2B2B2B;font-size:18px;line-height:25px;text-align: center;"> 
                      <div style="padding-bottom:10px;">
                        <img style="height:150px;width:210px;" src="../../images/indeximg/pchh4.png" alt="">
                      </div>
                      <div>2018年度</div>
                      <div>小语种创新品牌</div>
                  </div>
            </div>  

      </div>

      <div style="height:180px"></div>
      <!-- 底部 -->
      <footers></footers>
    </div>
  </div>
</template>
<script>
import titles from "../../widget_component/titles.vue";
import footers from "../../widget_component/footers.vue";
require("swiper/dist/css/swiper.css");
export default {
  components: { titles, footers },
  data() {
    const that = this;
    return {};
  },
  created() {
    console.log(window.innerWidth);
  },
  mounted() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "./styleless/pcindex.less";
.hello {
  font-size: 16px;
}
.btitle {
  display: flex;
  justify-content: space-between;
  color: #fff;
}

.title01 {
  background: #525252;
}
.lunbobox {
  border: 1px solid red;
  height: 520px;
  background: red;
  width: 100%;
}
.el-carousel__indicators--outside {
  bottom: 26px;
  text-align: center;
  position: static;
  -webkit-transform: none;
  transform: none;
  padding-bottom: 50px;
}
</style>


