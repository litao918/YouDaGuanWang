import Vue from 'vue'
import Router from 'vue-router'

// 首页
import index from '@/components/index'
// 教学理念
import Teaching_concept from '@/components/pcweb/Teaching_concept'
// 如何上课
import HowHave from '@/components/pcweb/HowHave'
//企业培训
import WorldTeachers from '@/components/pcweb/WorldTeachers'
//日本留学
import StudyAbroad from '@/components/pcweb/StudyAbroad'
//全球师资
import EnterpriseTraining from '@/components/pcweb/EnterpriseTraining' 
//下载中心
import DownloadCenter from '@/components/pcweb/DownloadCenter' 
//关于我们
import AboutUs from '@/components/pcweb/AboutUs' 
//公开课
import PublicClass from '@/components/pcweb/PublicClass' 
//日语能力考试
import AbilityTest from '@/components/pcweb/AbilityTest'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Teaching_concept',
      name: 'Teaching_concept',
      component: Teaching_concept
    },
    {
      path: '/HowHave',
      name: 'HowHave',
      component: HowHave
    },
    {
      path: '/WorldTeachers',
      name: 'WorldTeachers',
      component: WorldTeachers
    },
    {
      path: '/StudyAbroad',
      name: 'StudyAbroad',
      component: StudyAbroad   
    },
    {
      path: '/EnterpriseTraining',
      name: 'EnterpriseTraining',
      component: EnterpriseTraining   
    },
    {
      path: '/DownloadCenter',
      name: 'DownloadCenter',
      component: DownloadCenter   
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs 
    },
    {
      path: '/PublicClass',
      name: 'PublicClass',
      component: PublicClass  
    },
    {
      path: '/AbilityTest',
      name: 'AbilityTest',
      component: AbilityTest  
    },



  ]
})
