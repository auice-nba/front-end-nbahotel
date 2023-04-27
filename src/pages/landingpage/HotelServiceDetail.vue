<template>
    <div class="card text-left px-5 py-5 mt-3">
        <h2>รายละเอียดเพิ่มเติม</h2>
<base-input  label="คำอธิบายเกี่ยวกับสถานที่ประกอบการ">
<textarea class="form-control"></textarea>
</base-input>
        <base-button type="primary" @click="addDetail">ไปขั้นตอนต่อไป</base-button>
        </div>
</template>
<script>
import { BaseInput } from '@/components/index';


export default {
    
    components:{
       BaseInput
    },
   
    
    methods:{
        addDetail(){
            this.$router.push('/landingpage/hotel-service-detail2');
        },
       

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

.image-upload{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
}

.icon-image-02{
    color: white;
    font-size: 2rem;
}

</style>