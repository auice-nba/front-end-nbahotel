<template>
    <div class="card text-left px-5 py-5 mt-3">
        <h2>เข้าสู่ระบบเพื่อลงทะเบียนการให้บริการ</h2>
        <base-input type="text" label="เบอร์โทรศัทพ์"/>
        <base-input type="text" label="รหัสผ่าน"/>
        <base-button type="primary" @click="firstLogin">เข้าสู่ระบบ</base-button>
        <small class="mt-2">ลืมรหัสผ่าน</small>

        </div>
</template>
<script>
import {BaseInput} from "@/components/index"
export default {
    components:{
        BaseInput
    },
    methods:{
        firstLogin(){
            this.$router.push('/landingpage/create-service');
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