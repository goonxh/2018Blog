import Vue from 'vue'
import Router from 'vue-router'

/*import selfIntro from '@/components/IamXiehao'
import skillChart from '@/components/skillChart'
import program from '@/components/program'
import aboutMe from '@/components/aboutMe'
import contactMe from '@/components/contactMe'
import admin from '@/components/admin'
import daily from '@/components/daily'
import resume from '@/components/resume'*/
//懒加载
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'IamXiehao',
      components: {
      	selfIntro : resolve => require(['@/components/IamXiehao'],resolve),
      	skillChart : resolve => require(['@/components/skillChart'],resolve),
        program : resolve => require(['@/components/program'],resolve),
        aboutMe : resolve => require(['@/components/aboutMe'],resolve),
        contactMe : resolve => require(['@/components/contactMe'],resolve)
      }
    },
    {
      path: '/adminForMyself',
      name: 'admin',
      components: {
        admin:resolve => require(['@/components/admin'],resolve)
      }
    },
    {
      path: '/daily',
      name: 'daily',
      components: {
        daily:resolve => require(['@/components/daily'],resolve)
      }
    },
    {
      path: '/resume',
      name: 'resume',
      components: {
        resume:resolve => require(['@/components/resume'],resolve)
      }
    },
    {
      path: '/ooxxpic',
      name: 'ooxxpic',
      components: {
        ooxxpic: resolve =>require(['@/components/ooxxpic'],resolve)
      }
    }
  ]
})
