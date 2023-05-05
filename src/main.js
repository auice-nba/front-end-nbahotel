/* eslint-disable prettier/prettier */
/*!

=========================================================
* Vue White Dashboard - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-white-dashboard
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/vue-white-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SocialSharing from 'vue-social-sharing'
import VueGitHubButtons from 'vue-github-buttons'
import 'vue-github-buttons/dist/vue-github-buttons.css'
import '@/assets/scss/white-dashboard.scss'
import '@/assets/css/nucleo-icons.css'
import '@/assets/demo/demo.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { User } from '@/functions/userservice';

import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import RTLPlugin from './RTLPlugin'
import Notify from '@/components/NotificationPlugin'
import i18n from './i18n'
import SideBar from '@/components/SidebarPlugin'


Vue.config.productionTip = false

// router setup
import routes from './router';

  // configure router
  const router = new VueRouter({
    routes, // short for routes: routes
    linkExactActiveClass: 'active'
  })
  
  Vue.use(VueRouter)
  Vue.use(SocialSharing)
  Vue.use(VueGitHubButtons, { useCache: true })
  Vue.use(GlobalComponents)
  Vue.use(GlobalDirectives)
  Vue.use(RTLPlugin)
  Vue.use(SideBar)
  Vue.use(Notify)
  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin);

  
  router.beforeEach(async (to,from,next) => {
    
    const userservice = new User();
    
    await userservice.Me().then(user=>{

      console.log('to',to.name)

      console.log('public',!!to.meta.public);
      console.log('first',!!to.firstlogin);
      console.log('approved',(!!user.status && !!user.data.approved))
      console.log('not approved',(!!to.meta.firstlogin && !!user.status && !user.data.approved) );
      console.log('all',(

        !!to.meta.public //public go all
        || (user.status && user.data.approved) //user approved go all
        || (!!to.meta.firstlogin && !!user.status && !user.data.approved )  //user not approved go only first login
      
      ))

      if(

            !!to.meta.public //public go all
        || (user.status && user.data.approved) //user approved go all
        || (!!to.meta.firstlogin && !!user.status && !user.data.approved )  //user not approved go only first login
      
          ){
          next();
        }
        
        else{
          if(to.name==="Dashboard" && user.status && !user.data.approved){
            next({name:'CreateServiceSuccess'})
          }
          else{
            console.log('else');
            next({name:'LandingPage'});
          }
        }

     
           })
                
                })

                new Vue({
                  router,
                  i18n,
                  render: (h) => h(App)
                }).$mount('#app')
   
              