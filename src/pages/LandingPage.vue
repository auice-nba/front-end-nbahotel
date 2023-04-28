<template>
    <div class="banner">
        <div class="navbar pt-3 pb-3">

            <div class="row w-100">
                <div class="col-12 col-md-6 col-lg-4 text-center text-md-left">
                    <a href="/">

                        <h1 class="ml-3 mt-2">NBA BOOKING</h1>
                    </a>
                </div>
                <div class="d-none d-lg-block col-lg-4 text-center">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn menu" >บริการ และ เงื่อนไข</button>
                            <button type="button" class="btn menu" >รายงานและร้องเรียน</button>
                            <button type="button" class="btn menu" >เกี่ยวกับเรา</button>
                            </div>
                        </div>
                <div class="d-none d-md-block col-12 col-md-6 col-lg-4  text-center text-md-right w-100">
                    <button v-if="!userlogin" class="btn btn-primary" @click="login">Login</button>
                </div>
            </div>

        </div>
        <div class="view">
            <router-view/>
        </div>
       
        <div class="footer">
            
            <LandingPageFooter/>
        </div>
    </div>
</template>
<script>
import LandingPageFooter from "@/components/LandingPage/LandingPageFooter";

export default {

    components: {
        LandingPageFooter
    },
    data(){
        return{
            userlogin:false,
        }
    },
    methods:{
        login(){
            localStorage.setItem("user","user");



                this.$router.push('/dashboard');
            
        },
        
    }

}
</script>
<style scoped>
.btn-primary{
    background-color: rgb(201, 40, 216);
}
h1{
    margin: 0;
}
h3 {
    margin: 0;
}

.banner {
    position: relative;
    background-image: url("/images/view1.avif");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.navbar {
    font-family: 'Josefin Sans', sans-serif;
    color: var(--gray-700);
    width: 100%;
    background-color: rgba(0,0,0,0.3);
}
.menu{

    background-color: transparent;
    background-image: none !important;
    border: 0;
}

.view{
display:flex;
width: 100%;
height: 80%;
justify-content: center;
align-items: center;

}

.footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0;
}

@media (max-width: 650px) {
  h2{
    font-size: 1.2rem;
  }
}
</style>