<template>
    <div class="card text-left px-5 py-5">
        <h3>ขอบคุณที่เข้าร่วมกับ NBA Booking Partner</h3>
        
        <p>รายการร้องของผู้ใช้กำลังอยู่ระหว่างการพิจารณา กรุณารอเจ้าหน้าที่ติดต่อกลับ</p>
        <base-button type="primary" class="mt-3" @click="goBack">กลับหน้าแรก</base-button>
        </div>
</template>
<script>
export default {
    methods:{
        goBack(){
            localStorage.removeItem('token');
            this.$router.push('/');
        }
    }
}
</script>

<style>
.card{
    max-width: fit-content
}
</style>