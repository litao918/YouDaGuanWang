<template>
    <div>
            <div class="sb" style="width:1080px;margin:0 auto;height:66px;font-size:14px;">
                <!-- logo -->
                <div class="logo mlrauto" style="width:133px;height:33px;">
                    
                </div>
                <!-- nav -->
                <div class="sb c573 caidan" >
                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class='nvbox '><router-link style="color:#EF3434;"  to='/'>首页</router-link></div>
                        <div  style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:block"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class="nvbox"><router-link   to='/AbilityTest'>日语课程</router-link></div>
                        <div  style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class="nvbox"><router-link   to='/EnterpriseTraining'>全球师资</router-link></div>
                        <div style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;" >
                        <div class="nvbox"><router-link  to='/Teaching_concept'>教学理念</router-link></div>
                        <div   style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;" >
                        <div class="nvbox"><router-link   to='StudyAbroad'>日本留学</router-link></div>
                        <div  style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class="nvbox"><router-link   to='/PublicClass'>公开课</router-link></div>
                        <div  style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;" >
                        <div class="nvbox"><router-link   to='/HowHave'>如何上课</router-link></div>
                        <div style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class="nvbox"><router-link   to='/DownloadCenter'>下载中心</router-link></div>
                        <div style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class="nvbox"><router-link   to='/AboutUs'>关于我们</router-link></div>
                        <div  style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>
                   
                </div>
                <!-- 注册登录 -->
                <div class="zucedenglv mlrauto">
                    <div class="denglv" style="width:60px;height:30px;line-height: 30px;border: 1px solid #EF3434; border-radius:50px;color:#EF3434;margin-right:10px;">登录</div>
                    <div class="zhuce"  style="width:60px;height:30px;line-height: 30px; border-radius:50px;background:#EF3434;color:#fff;">注册</div>
                </div>
            </div>

            
    </div>
</template>
<script>
export default {
    data() {
        return {
                btnFlag:false,
        }
    },

}
</script>

<style lang="less" scoped>
@import "../style/Common_style.css";
    .logo{
        background: url('../images/indeximg/pclogo.png') no-repeat center center;
        background-size: auto auto;
    }
    .zucedenglv{
        text-align:center;
        display: flex;
        justify-content: space-between; 
    }
   
    .caidan{
        a{
            color: #573E41;
            text-decoration:none;
        }
        a:hover{
            color: #EF3434;
        }
       
    }
    .opo{
        color: #EF3434 !important;
    }
   
</style>
