<template>

<div class="invitation px-3">


        <div class="title">
            <h3 class="card-title mb-3">เป็นพาร์ทเนอร์กับเรา</h3>
            <h2>พร้อมกับรับสิทธิพิเศษมากมาย</h2>
            <!-- <p>
                <blockquoate class="card-text text-xl">Some quick example text to build on the card title and make up
                    the bulk of the card's content.</blockquoate>
                </p> -->
                
                <button type="primary" class="btn btn-primary mt-3" @click="createAccount">สมัครสมาชิก</button>
            </div>
       
    </div>
            </template>
            <script>
        export default {
            methods:{
                createAccount(){
            this.$router.push('/landingpage/createaccount');
        }
            }
        }
        </script>

        <style scoped>
    .invitation{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 550px;
        min-height: calc(100vh - 206px);
    }
    .title {
    width: auto;
    width: 100%;

}

@media screen and (max-width:450px) {
    .invitation{
        width: 100%;
    }
}
    </style>