<template>
    <div class="content">
        <div class="row">
            <div class="col-8">
                <Card type="nav-tabs" class="text-left">
                    <base-button  type="primary" @click="$router.push('/checkin')" >Check In</base-button>
                    <base-button @click="$router.push('/checkout')">Check Out</base-button>
                    <h1 class="mt-4">Check Out</h1>
                    <base-input label="Room Number" style="max-width:14rem"/>
                 
                   <base-table
                   :title="table.title"
                    :sub-title="table.subTitle"
                    :data="table.data"
                    :columns="table.columns"
                   >
                </base-table>
                </Card>
                
            </div>
            <div class="col-4">
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
import BaseTable from "@/components/BaseTable";

export default {
    components:{
        Card,BaseInput,BaseTable,
    },
    data(){
        return {
            table:{
                data:null,
                columns:null,
                title:'checked in room',
                subTitle:'ห้องที่ได้ทำการเช็คอินแล้ว',
            }
        }
    }
}
</script>
<style scoped>
.menu{
    width: 450px;
}
</style>