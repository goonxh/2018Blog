import Vue from 'vue'
import Router from 'vue-router'

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
    },
    {
      path: '/hupupic',
      name: 'hupupic',
      components: {
        hupupic: resolve =>require(['@/components/hupupic'],resolve)
      }
    },
    {
      path: '/string2qrcode',
      name: 'string2qrcode',
      components: {
        string2qrcode: resolve =>require(['@/components/string2qrcode'],resolve)
      }
    },
  ]
})
