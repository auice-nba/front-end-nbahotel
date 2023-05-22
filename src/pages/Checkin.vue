<template>
    <div class="content">
        <div class="row">
            <div class="col-12 col-md-8">
                <Card type="nav-tabs" class="text-left">
                    <base-button type="primary">Check In</base-button>
                    <base-button @click="$router.push('/checkout')">Check Out</base-button>
                    <h1 class="mt-4">Check In</h1>
                    <base-input v-model="customer.ref_number" label="Booking Ref Number" style="max-width:14rem"/>
                 
                    <div class="flex flex-row">
                     
                        <base-input v-model="customer.customer_tel" type="text" label="เบอร์โทรศัพท์" style="max-width:14rem"/>
                        <base-button type="primary" class="mt-3" @click="VerifyCheckInUser">ตรวจสอบ</base-button>
                    </div>

                </Card>
                
            </div>
            <div class="col-12 col-md-4">
                <Card type="nav-tabs">
                    <img src="/images/hotel.jpg"/>
                </Card>
            </div>
        </div>
    </div>
</template>
<script>
import { Card } from "@/components/index";
import { BaseInput } from "@/components/index";
import { Booking } from "@/functions/bookingservice";
import store from "@/stores"

export default {
    setup(){
        const bookingservices = new Booking();
        return{
            bookingservices,store
        }
    },
    components:{
        Card,BaseInput
    },
    mounted(){
        this.customer.host_id=this.store.state.user.service_id;
    },
    data(){
        return{
            customer:{
                host_id:null,
                ref_number:null,
                customer_tel:null,
            }
        }   
    },
    methods:{
         async VerifyCheckInUser(){
            await this.bookingservices.VerifyCheckInUser(this.customer).then(result=>{
                if(result && result.status==='ok'){
                    console.log(result);
                }
            })
        }
    }
}
</script>
<style scoped>
.menu{
    width: 450px;
}
</style>