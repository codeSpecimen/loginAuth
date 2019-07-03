import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import loginPage from '@/components/loginPage'
import registerPage from '@/components/registerPage1'
import profilePage from '@/components/profilePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
    {
      path: '/register',
      name: 'register',
      component: registerPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: profilePage
    }
  ]
})
