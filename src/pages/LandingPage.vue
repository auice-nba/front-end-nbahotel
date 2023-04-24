<template>
    <div class="banner">
        <div class="navbar pt-3 pb-3">

            <div class="row w-100">
                <div class="col-12 col-md-3 text-center text-md-left">
                    <h1 class="ml-3 mt-2">NBA BOOKING</h1>
                </div>
                <div class="col-12 col-md-6 text-center">
                    <div class="btn-group d-none d-md-block" role="group">
                        <button type="button" class="btn menu" >บริการ และ เงื่อนไข</button>
                            <button type="button" class="btn menu" >รายงานและร้องเรียน</button>
                            <button type="button" class="btn menu" >เกี่ยวกับเรา</button>
                            </div>
                        </div>
                <div class="d-none d-md-block col-12 col-md-3 text-center text-md-right">
                    <button v-if="!userlogin" class="btn btn-primary" @click="login">Login</button>
                </div>
            </div>

        </div>
        <div class="title">
            <div style="width: 50rem;">
                <h3 class="card-title mb-3">เป็นพาร์ทเนอร์กับเรา</h3>
                <h2>พร้อมกับรับสิทธิพิเศษมากมาย</h2>
                <!-- <p>
                    <blockquoate class="card-text text-xl">Some quick example text to build on the card title and make up
                        the bulk of the card's content.</blockquoate>
                </p> -->

                <a href="#" class="btn btn-primary mt-3">สมัครสมาชิก</a>
            </div>
        </div>
        <div class="footer">
            
            <LandingPageFooter/>
        </div>
    </div>
</template>
<script>
import LandingPageFooter from "@/components/LandingPage/LandingPageFooter"
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


.title {
    position: absolute;
    width: auto;
    max-width: 10rem;
    top: 35%;
    left: 15%;
}

.card-title {
    font-size: 3rem;

}

.footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0;
}

@media (max-width: 650px) {
  .card-title{
    font-size: 2rem;
  }
  h2{
    font-size: 1.2rem;
  }
}
</style>