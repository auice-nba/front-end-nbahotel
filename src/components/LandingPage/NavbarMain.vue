<template>
    <nav class="py-1">
        <div class="d-none d-md-block">

            <div class="row nav-bar">
                <div class="col text-left logo">
                    <router-link to="/">
            
                        <h3>NBA BOOKING</h3>
                    </router-link>
                    
                </div>
                <div class="col text-right">
                    <base-button class="login-button " type="primary" @click="login">Login</base-button>
                </div>
            </div>
        </div>
        <!-- collapse expend -->
        <div class="d-block d-md-none collapes" >
            <div class="row">
                <div class="col-8">
                    <router-link to="/">
                        <h3 class="mt-2 ml-3 text-left">NBA BOOKING</h3>
                    </router-link>
                </div>
                <div class="col-4 text-right">
                    <div>

                        <base-button link id="button-expend" class="button-expend" @click="menuClick">
                        <span class="material-symbols-outlined text-white" style="z-index: 9999;">
                            menu
                        </span>
                    </base-button>
                   
                </div>
               
                </div>
                <div class="menu-expend" :style="menuExpend?'display:block':'display:none'">
                        <ul class="card text-left">
                            <li v-for="(item,index) in menuItem" :key="index" class="menu-item">
                                <router-link to="item.link">
                                    <div class="row text-white">
                                        <div class="col-9 text-left">
                                            <p class="text-dark px-3 py-2">{{ item.label }}</p>
                                        </div>
                                        <div class="col-3 text-right">
                                            
                                            <span class="material-symbols-outlined text-dark pt-1">chevron_right</span>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                            <li class="menu-item bg-primary btn-login">
                                <div class="row text-white">
                                        <div class="col-9 text-left bg">
                                            <base-button class="mx-2 text-white" link  @click="login">เข้าสู่ระบบ</base-button>
                                        </div>
                                        <div class="col-3 text-right">
                                            
                                            <span class="material-symbols-outlined text-white pt-2">chevron_right</span>
                                        </div>
                                    </div>
                                
                            </li>

                        </ul>
                    </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    data(){
        return{

            menuExpend:false,
            menuItem:[
                {
                    label:'หน้าแรก',
                    link:'/'
                },
                {
                    label:"บริการ",
                    link:'',
                },
                {
                    label:"เงือนไขการใช้บริการ",
                    link:'',

                },
                {
                    label:"การร้องเรียน",
                    link:'',

                },
                {
                    label:"ติดต่อ NBA",
                    link:'',

                },
            ]
        }
    },
    methods: {
        login() {
            this.$router.push("/landingpage/login");
        },
        menuClick(){
            this.menuExpend = !this.menuExpend;
        }
    },
    
}
</script>

<style scoped>

.nav-bar{
    align-items: center;
    height: 70px;
}
.card{
    border-radius: 0.3rem;
}
.btn-login{
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
}
.logo{
    padding-left: 3rem;
}
.login-button{
    margin-right: 3rem;
}

h3{
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans Thai', sans-serif;
}
nav{
    background-color: rgba(0,0,0,0.4);

}

.button-expend{
    color: white;
    
}

.collapes{
    position: relative;
}
.menu-expend{
    position: absolute;
    display:none;
    top: 3.3rem;
    right: 0;

}



ul{
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu-item{

    display: block;


}
.menu-item:hover{
    background-color: violet;
    color: white;
}

</style>