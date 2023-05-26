<template>
    <base-table :data="bookings" thead-classes="text-primary">
      <template slot-scope="{ row }">
        <td class="text-left">
          <p class="title">{{ row.customer_name}}</p>
          <p>วันที่ต้องการเช็คอิน {{ dateformat(row.date_from) }} วันที่ต้องการเช็คเอาท์ {{ dateformat(row.date_to) }}</p>
          <p class="text-muted">{{dateformat(row.createdAt) }} </p>
        </td>
        <td class="text-left">
            <base-button type="primary" size="sm" @click="$router.push(`/bookingdetail/${row._id}`)">รับการจอง</base-button>
        </td>
       
      </template>
    </base-table>
  </template>
  <script>
  import {BaseTable} from "@/components/index"
  export default {
    setup(){

       const dateformat = (date) =>{
           return new Date(date).toLocaleDateString('th-TH',{year:'2-digit',month:'2-digit',day:'2-digit'});

        }
        return{
            dateformat
        }
    },
    components:{
        BaseTable
    },
    props:{
        bookings:Array
    },
    methods:{
        
    }
  };
  </script>
  <style></style>
  