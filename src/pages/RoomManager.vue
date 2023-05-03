<!-- eslint-disable prettier/prettier -->
<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <card>
          <template slot="header">
            <h4 class="card-title">Room managemant</h4>
          </template>
          <div class="table-responsive text-left">
            <room-table
              :data="roomdata"
              :columns="table.columns"
              thead-classes="text-primary"
            >
            </room-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { User } from "@/functions/userservice";
import { Card } from "@/components/index";
import {Room} from '@/functions/roomservice';
import RoomTable from "@/components/RoomTable";

const tableColumns = [
  "เลขที่ห้อง",
  "ห้อง",
  "เตียง",
  "ราคา",
  "จำนวนผู้เข้าพักสูงสุด",
  "เด็กพักฟรี",
  "สถาณะ",
];

export default {
  setup(){
    const room = new Room();
    const userservice = new User();
    return {
      room,userservice
    }
  },
  components: {
    Card,
    RoomTable,
  },
  async mounted(){
    await this.userservice.Me().then(user =>{

      this.hotel_id = user.data.service_id;
    })
    await this.room.getHotelRoom(this.hotel_id).then(room=>{
      this.roomdata = room;
    })
  },
  data() {
    return {
      hotel_id:null,
      roomdata:null,
      table: {
        title: "Simple Table",
        columns: [...tableColumns],
        data: [],
      },
    };
  },
};
</script>

<style scoped>
.room-manager {
  display: flex;
  min-width: 80vh;
  background-color: white;
}
</style>
