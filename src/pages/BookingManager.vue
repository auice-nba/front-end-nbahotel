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
  import { io } from "socket.io-client";
  import { Card } from "@/components/index";
  import {Booking} from "@/functions/bookingservice"
  import BookingTable from '@/components/BookingTable'
  import store from '@/stores';

  const tableColumns = [
    "วันที่",
    "refNumber",
    "ชื่อลูกค้า",
    "ราคารวม",
    "สถาณะ",
  ];
  
  export default {
    setup(){
      const socket = io(process.env.VUE_APP_API);
      const bookingservice = new Booking();
      return {
        bookingservice,store,socket
      }
    },
    components: {
      Card,
      BookingTable
    },
    created(){
      this.socket.on('newbooking',async (data)=>{
 
          console.log(data);
          await this.GetBooking();
        
      })
    },
    async mounted(){
 
      this.hotel_id = this.store.state.user.service_id;
      await this.GetBooking()
    },
    data() {
      return {
        hotel_id:null,
        loading:false,
        table: {
          title: "Booking Table",
          columns: [...tableColumns],
          data: [],
        },
      };
    },
    methods:{
      async GetBooking(){
        await this.bookingservice.getBooking(this.hotel_id).then(result=>{
        if(result.status==="ok"){
       
            this.table.data=result.data.reverse();
            this.loading = true;
        }
      })
      }
    }
  };
  </script>
  
  <style scoped>
 
  </style>
  