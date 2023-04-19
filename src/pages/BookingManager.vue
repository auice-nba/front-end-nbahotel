<!-- eslint-disable prettier/prettier -->
<template>
    <div class="content">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Booking managemant</h4>
            </template>
            <div v-if="loading==true" class="table-responsive text-left">
              <booking-table
                :data="table.data"
                :columns="table.columns"
                thead-classes="text-primary"
              >
              </booking-table>
            </div>
          </card>
        </div>
      </div>
    </div>
  </template>
<!-- eslint-disable prettier/prettier -->
  <script>
  import { Card } from "@/components/index";
  import {Booking} from "@/functions/bookingservice"
  import BookingTable from '@/components/BookingTable'
  
  const tableColumns = [
    "วันที่",
    "refNumber",
    "จำนวนห้อง",
    "จำนวนผู้เข้าพักทั้งหมด",
    "จำนวนเด็ก",
    "วันที่เข้าพัก",
    "พักถึงวันที่",
    "ราคารวม",
    "สถาณะ",
  ];
  
  export default {
    setup(){
      const bookingservice = new Booking();
      return {
        bookingservice
      }
    },
    components: {
      Card,
      BookingTable
    },
    async mounted(){
      await this.bookingservice.getBooking(this.hotel_id).then(result=>{
        if(result.status==="ok"){
            console.log(result);
            this.table.data=result.data;
            this.loading = true;
        }
      })
    },
    data() {
      return {
        hotel_id:'643e55439c48ebe52204a5a2',
        loading:false,
        table: {
          title: "Booking Table",
          columns: [...tableColumns],
          data: [],
        },
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  