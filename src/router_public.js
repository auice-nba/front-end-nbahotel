import LandingPage from "@/pages/LandingPage.vue";
import Invitations from "@/pages/landingpage/Invitations.vue";
import CreateAccount from "@/pages/landingpage/CreateAccount.vue";

const routes = [
    {
        path:"/landingpage",
        name:"LandingPage",
        redirect:'/landingpage/invitations',
        component:LandingPage,
        children:[
          {
            path:'login',
            name:'Login',
            meta:{public:true},
            component:()=> import('@/pages/landingpage/LoginPage.vue')
          },
          {
            path:'invitations',
            name:"Invitations",
            meta:{public:true},
            component: Invitations,
          },
          {
            path:'userinfo',
            name:'UserInfo',
            meta:{public:true},
            component: () => import('@/pages/landingpage/UserInfo.vue')
          },
          {
        path:"createaccount",
        name:"CreateAccount",
        meta:{public:true},
        component:CreateAccount,
      },
      {
        path:'confirm-otp',
        name:'ConfirmOtp',
        meta:{public:true},
        component:()=>import('@/pages/landingpage/ConfirmOtp.vue')
      },
      {
        path:'firstlogin',
        name:'FirstLogin',
        meta:{public:true},
        component:()=>import('@/pages/landingpage/FirstLogin.vue')
      },
      {
        path:'create-service',
        name:'CreateService',
        component:()=>import('@/pages/landingpage/CreateService.vue'),
        redirect:'/landingpage/create-service/hotel-service',
        children:[
          {
            path:'hotel-service',
            name:'HotelService',
            meta:{firstlogin:true},
            component:()=>import('@/pages/landingpage/hotel/HotelService.vue')
          },
         
          
        ]
      },
      {
        path:'hotel-service-detail/:id',
        name:'HotelServiceDetail',
        meta:{firstlogin:true},
        component:()=>import('@/pages/landingpage/HotelServiceDetail.vue')
      },
      {
        path:'hotel-service-detail2/:id',
        name:'HotelServiceDetail2',
        meta:{firstlogin:true},
        component:()=>import('@/pages/landingpage/HotelServiceDetail2.vue')
      },
      {
        path:'service-map/:id',
        name:'ServiceMap',
        meta:{firstlogin:true},
        component:()=>import('@/pages/landingpage/ServiceMap.vue')
      },
      {
        path:'service-image/:id',
        name:'ServiceImage',
        meta:{firstlogin:true},
        component:()=>import('@/pages/landingpage/ServiceImage.vue')
      },
      {
        path:'create-service-success/:id',
        name:'CreateServiceSuccess',
        meta:{firstlogin:true},
        component:()=>import('@/pages/landingpage/CreateServiceSuccess.vue')
      },
      {
        path:'hotel-service-update/:id',
        name:'HotelServiceUpdate',
        meta:{firstlogin:true},
        component:()=>import('@/pages/landingpage/HotelServiceUpdate.vue')
      }
        ]
      },
]

export default routes;