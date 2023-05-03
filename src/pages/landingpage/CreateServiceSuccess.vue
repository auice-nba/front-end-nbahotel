<template>
    <div class="card">
        <div class="card-content">
            <div class="message px-3 py-3">

                <h4>ระบบได้รับใบสมัครเรียบร้อยแล้ว</h4>
                <p>กรุณารอเจ้าหน้าที่ติดต่อกลับ หรือ ติดต่อ </p>
                <p>nbadigitalservice call center</p>
            </div>
            <base-button type="primary" @click="Edit">แก้ไขรายละเอียด</base-button>
            <base-button link @click="back">กลับหน้าแรก</base-button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        Edit(){
            this.$router.push('/landingpage/firstlogin');
        },
        back(){
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
.card{
    max-width: 450px;
}
.card-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
}
.message{
    width: 100%;
}
@media screen and (max-width:450px){
    .card{
        min-height: calc(100vh - 70px);
        border-radius: 0;
        border-top:solid 3px var(--primary);
        align-content: center;
    }
}
</style>