<template>
    <div class="card text-left px-5 py-5 mt-3">
        <h2>รายละเอียดเพิ่มเติม</h2>
        <div class="row">
            <div class="col-12">
                <h4>ไฮไลท์</h4>
                <div class="row">

                    <base-checkbox v-for="(item,index) in highlight" :key="index" class="col-4"  >
                    {{ item.name }}
                </base-checkbox> 
            </div>
            </div>
            <div class="col-12">
                <h4>เครื่องอำนวยความสะดวก</h4>
                <div class="row">

                    <base-checkbox v-for="(item,index) in amenities" :key="index" class="col-4 " >
                    {{ item.name }}
                </base-checkbox> 
            </div>
            </div>
            <div class="col-12">
                <h4>ใบรับรอง</h4>
                <div class="row">

                    <base-checkbox v-for="(item,index) in certificate" :key="index" class="col-6 mb-3" >
                    {{ item.name }}
                </base-checkbox> 
            </div>
            </div>
            
        </div>
        <base-button type="primary" @click="addDetail">ไปขั้นตอนต่อไป</base-button>
     
        </div>
</template>
<script>

import { Hotel } from '@/functions/hotelservice';

export default {
    setup(){
        const hotelservice = new Hotel();
        return{
            hotelservice
        }
    },

    components:{
       
    },
    mounted(){
        this.getHighlight();
        this.getAmenities();
        this.getCertificate();
    },
    data(){
        return{

            highlight:null,
            amenities:null,
            certificate:null
        }
    },
    methods:{
        async getHighlight(){
            await this.hotelservice.getHighlight().then(result=>{
                this.highlight= result
            })
        },
        async getAmenities(){
            await this.hotelservice.getAmenities().then(result=>{
                this.amenities= result
            })
        },
        async getCertificate(){
            await this.hotelservice.getCertificate().then(result=>{
                this.certificate= result
            })
        },

        addDetail(){
            this.$router.push('/landingpage/service-map');
        }
    }
}
</script>

<style scoped>
h4{
    margin: 0;
    margin-top: 1.5rem;
    font-style: italic;
}
.card{
    display: flex;
    width: 100%;
    max-width: 450px;
    justify-content: center;

}


</style>