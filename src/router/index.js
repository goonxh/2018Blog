import Vue from 'vue'
import Router from 'vue-router'
import selfIntro from '@/components/IamXiehao'
import skillChart from '@/components/skillChart'
import program from '@/components/program'
import aboutMe from '@/components/aboutMe'

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
        aboutMe:aboutMe
      }
    }
  ]
})
