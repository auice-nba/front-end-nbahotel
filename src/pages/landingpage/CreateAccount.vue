<template>
    <div class="card text-left px-5 py-5 mt-3">
        <h2>สร้างบัญชีผู้ใช้</h2>
        <div class="row">
            <div class="col">

                <base-input type="text" label="ชื่อ"/>
            </div>
            <div class="col">
                <base-input type="text" label="นามสกุล"/>

            </div>
        </div>
        <base-input type="email" label="อีเมลล์"/>
        <base-input type="tel" label="เบอร์โทรศัทพ์"/>
        <base-input type="tel" label="เบอร์โทรศัทพ์ ผู้แนะนำ"/>
        <base-input type="password" label="รหัสผ่าน"/>
        <base-button type="primary" @click="createAccount">สร้าง</base-button>

        </div>
</template>
<script>
import {BaseInput} from "@/components/index"
export default {
    components:{
        BaseInput
    },
    methods:{
        createAccount(){
            localStorage.setItem('user','user');
            this.$router.push('/landingpage/confirm-otp');
        }
    }
}
</script>

<style scoped>
.card{
    display: flex;
    width: 100%;
    max-width: 450px;
    justify-content: center;
}

</style>