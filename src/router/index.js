import Vue from 'vue'
import Router from 'vue-router'
import selfIntro from '@/components/IamXiehao'
import skillChart from '@/components/skillChart'
import program from '@/components/program'
import aboutMe from '@/components/aboutMe'
import contactMe from '@/components/contactMe'
import admin from '@/components/admin'
import daily from '@/components/daily'
import resume from '@/components/resume'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'IamXiehao',
      components: {
      	selfIntro:selfIntro,
      	skillChart:skillChart,
        program:program,
        aboutMe:aboutMe,
        contactMe:contactMe
      }
    },
    {
      path: '/adminForMyself',
      name: 'admin',
      components: {
        admin:admin
      }
    },
    {
      path: '/daily',
      name: 'daily',
      components: {
        daily:daily
      }
    },
    {
      path: '/resume',
      name: 'resume',
      components: {
        resume:resume
      }
    },
  ]
})
