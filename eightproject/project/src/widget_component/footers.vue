<template>
  <div>
    <!-- 报名 -->
    <div style="height:66px;box-shadow:#000 0px 8px 13px;">
      <div class="sb" style="width:1080px;margin:0 auto; position: relative;line-height:66px;">
        <div style="position: absolute;left:0;bottom:-28px;">
          <img style="height:150px;width:138px;" src="../images/indeximg/maomi.png" alt />
        </div>
        <div style="margin-left:174px;font-size:28px;color:#FF4444;">免费领取价值300元试听课</div>
        <div
          class="mlrauto fangfajing"
          style="width:210px;height:46px;border-radius:46px;;border: 1px solid #E0E0E0; position: relative;"
        >
          <div style="width:20px;height:20px;position: absolute;left:16px;top:-5px;">
            <img style="height:100%;width:100%;" src="../images/indeximg/fangdajing.png" alt />
          </div>
          <input
            class="input"
            style="height:44px;width:149px;position: absolute;top:0;right:20px;"
            type="text"
          />
        </div>
        <div
          class="mlrauto"
          style="width:168px;height:46px;line-height:46px;background:#FF4444;text-align:center;color:#fff;font-size:22px;border-radius: 46px;"
        >立即报名</div>
      </div>
    </div>
    <!-- 底部链接 -->
    <div style="height:300px;background:#4B4B4B;">
      <div class="mtbauto" style="width:1080px;">
        <div class="sb" style="padding-top:50px;">
          <div style="font-size:14px;color:#C0C0C0;">
            <div style="color:#fff;margin-bottom:20px;">友达日语</div>
            <div style="margin-bottom:20px;">老师入口</div>
            <div style="margin-bottom:20px;">学习中心</div>
          </div>

          <div style="font-size:14px;color:#C0C0C0;">
            <div style="color:#fff;margin-bottom:20px;">产品政策</div>
            <div style="margin-bottom:20px;">隐私保护</div>
            <div style="margin-bottom:20px;">用户协议</div>
          </div>

          <div>
            <div style="color:#fff;margin-bottom:27px;">在这些地方找到我们</div>
            <div class="sb" style="color:#C0C0C0;">
              <div style="margin-right:30px;text-align: center;">
                <div>
                  <img style="height:36px;width:36px;" src="../images/indeximg/weixin.png" alt />
                </div>
                <div>服务号</div>
              </div>
              <div style="margin-right:30px;text-align: center;">
                <div>
                  <img style="height:36px;width:36px;" src="../images/indeximg/weixin.png" alt />
                </div>
                <div>日语教师</div>
              </div>
              <div style="margin-right:30px;text-align: center;">
                <div>
                  <img style="height:36px;width:36px;" src="../images/indeximg/weixin.png" alt />
                </div>
                <div>日本留学</div>
              </div>
              <div style="margin-right:30px;text-align: center;">
                <div>
                  <img style="height:36px;width:36px;" src="../images/indeximg/weixin.png" alt />
                </div>
                <div>新浪微博</div>
              </div>
            </div>
          </div>

          <div style="color:#C0C0C0;">
            <div style="color:#fff;font-size:26px;">400-680-0101</div>
            <div style="margin-top:10px;margin-bottom:25px;">周一到周日 9：00-18：00</div>
            <div
              style="width:220px;height:42px;border:1px solid #fff;border-radius:44px;text-align: center;line-height:44px; font-size:16px;"
            >立即咨询在线客服</div>
          </div>
        </div>

        <div
          style="text-align:center;color:#C0C0C0;line-height:20px;border-top:solid 1px #5E5E5E;margin-top:28px;"
        >
          <div style="padding-top:16px;">友情链接： 艺术类留学 荷兰语培训学校</div>
          <div>Copyright &#169 2019 youda.com.cn All rights reserved.丨经营许可：沪ICP备16020300号丨版权所有(2016-2019)翻印必究丨本网站隶属上海相叶教育科技有限公司</div>
        </div>
      </div>
    </div>


    <!-- 右边回到顶部 -->
    <div
      v-if="btnFlag"
      @click="backTop"
      style="z-index:999;position: fixed;bottom:250px;right:30px;background:#fff;width:60px;height:60px; border-radius:14px;text-align: center;box-shadow:1px 1px 5px #D9D9D9,1px -1px 5px #D9D9D9,-1px 1px 5px #D9D9D9,-1px -1px 5px #D9D9D9;"
    >
      <img
        style="height:30px;width:30px;margin-top:15px;"
        class="go-top"
        src="../images/indeximg/stop.png"
      />
    </div>

    <div style="z-index:999;display:flex;position: fixed;bottom:100px;right:30px;">
      <div style="color:#fff;font-size:16px;line-height:56px;">
        <div
          style="margin-bottom:20px;background:#FFC632;width:175px;height:56px; border-radius:8px;text-align: center;"
        >在线客服咨询</div>
        <div
          style="background:#EF3434;width:175px;height:56px; border-radius:8px;text-align: center;"
        >400-680-0101</div>
      </div>
      <div>
        <div
          style="margin-left:30px;background:#fff;width:60px;height:130px; border-radius:14px;text-align: center;box-shadow:1px 1px 5px #D9D9D9,1px -1px 5px #D9D9D9,-1px 1px 5px #D9D9D9,-1px -1px 5px #D9D9D9;"
        >
          <div style>
            <img
              style="height:30px;width:30px;margin-top:17.5px;margin-bottom:12.5px;"
              src="../images/indeximg/l1.png"
              alt
            />
          </div>
          <div style>
            <img
              style="height:30px;width:30px;margin-top:12.5px;margin-bottom:17.5px;"
              src="../images/indeximg/l2.png"
              alt
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnFlag: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },

  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../style/Common_style.css";
.input {
  outline: none;
  border: none;
}
</style>