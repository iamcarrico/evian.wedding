import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Read from '@/components/Read'
import See from '@/components/See'
import Photos from '@/components/Photos'
import Instagram from '@/components/Instagram'
import Watch from '@/components/Watch'
import Hear from '@/components/Hear'
import Thanks from '@/components/Thanks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/read',
      name: 'Read',
      component: Read
    },
    {
      path: '/see',
      name: 'See',
      component: See,
      children: [
        {
          path: '',
          component: Photos
        },
        {
          path: 'instagram',
          component: Instagram
        }
      ]
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/hear',
      name: 'Hear',
      component: Hear
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    }
  ]
})
