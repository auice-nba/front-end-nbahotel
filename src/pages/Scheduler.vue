<!-- eslint-disable prettier/prettier -->
<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <!-- toolbar -->
        <div class="row tool-bar">
          <div class="col justify-content-start">
            <button class="back-forword">&lt;&lt;</button>
            <button class="back-forword">>></button>
          </div>
          <div class="col">
            <h2 class="month-display">{{ this_month }}</h2>
          </div>
          <div class="col">
          <!-- <button class="back-forword">day</button>
                    <button class="back-forword">week</button> -->
            <button class="back-forword">เดือน</button>
          </div>
        </div>
        <!-- end tool bar -->
        <div class="scheduler">
          <div>
            <div class="nav">
              <!-- scheduler -->
              <div class="table-scheduler">

                <table>
                  <thead>
                    <tr class="header">
                      <th class="header-1cell">Room</th>
                      <th class="header-cell" v-for="(day, index) in days" :key="index">{{ dateformat(day) }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="item-row" v-for="(room, index) in room_number" :key="index">
                      <div class="caption">
                        
                          {{ room }}
                        </div>
                      <td class="item-cell" :id="`item-${room}-${index+1}`"  v-for="(cell, index) in body_cell" :key="index">
                        <div class="booked-cell" v-if="isBooked(cell,room)" @click="popDetail(cell,room)">
                        
                          {{ isBooked(cell,room).name }}
                          <div class="popBooking" id="booking-detail" v-if="cell===popBook.cell && room === popBook.room">
                            <p>booking id </p>
                            <p>{{ isBooked(cell,room).id }}</p>
                            <p>ห้อง</p>
                            <p>{{ isBooked(cell,room).room }}</p>
                            <p>เข้าพัก</p>
                            <p>{{ isBooked(cell,room).start_day }}</p>
                            <p>ถึงวันที</p>
                            <p>{{ isBooked(cell,room).end_day }}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- end scheduler -->

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import dayjs from "dayjs";
import "dayjs/locale/th";
import {Booking} from "@/functions/bookingservice";
import {Room} from "@/functions/roomservice";

export default {
  setup(){
    const bookingservice = new Booking();
    const roomservice = new Room();

    return{
      bookingservice,roomservice
    }
  },
  
 async mounted() {

    //get all rooms
    await this.roomservice.getHotelRoom(this.hotel_id).then(result => {
      console.log(result);
      this.rooms = result;
      this.room_number = result.map(el=>el.room_number);
    });


    //get all booking data;
    await this.bookingservice.getBooking(this.hotel_id).then(result =>{
      console.log(result);
      if(result.status==="ok"){

        this.result.data.forEach(el=> el.room.forEach(room=>{
          this.booking.push({
            id:el._id,
            room:(this.rooms.find(el=>el._id === room))
          })
        }))
        console.log(this.booking)
      }
      
    });

    //set header cell array
    var months_th = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม",];
    // var months_th_mini = [ "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค.", ];
    const today = new Date();
    this.first_day = new Date(today.getFullYear(), today.getMonth(), 1);
    this.last_day = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    this.this_month = months_th[today.getMonth()];
    console.log('first_day', this.first_day, 'last_day', this.last_day);
    for (let i = 0; i < this.last_day.getDate(); i++) {
      this.days.push(new Date(this.first_day.getTime() + (i * 24 * 60 * 60 * 1000)).toDateString());
    }

  
    // console.log("rooms", this.rooms);
    //set body cell array
    for (var i = 0; i < this.last_day.getDate(); i++) {
      const currentDay = new Date(this.first_day.getFullYear(),this.first_day.getMonth(),i+1);
     this.body_cell.push(currentDay);
  
      }
  },
  methods: {
    dateformat(day) {
      const result = dayjs(day).format("DD/MM");
      return result;
    },
    isBooked(day,room){
     const booked = this.event.find(event => event.room===room && new Date(event.start_day)<=day && new Date(event.end_day)>=day)
      if(booked){
        return {id:booked.id,name:booked.name,room:booked.room,start_day:booked.start_day,end_day:booked.end_day};
      }
      else {
        return "";
      }
    },
    popDetail(day,room){
      this.popBook={cell:day,room:room}
    }
  },
  data() {
    return {
      hotel_id:"643e55439c48ebe52204a5a2",
      today: null,
      first_day: null,
      last_day: null,
      this_month: null,
      days: [],
      rooms: null,
      room_number:null,
      booking:[],
      body_cell: [],
      booked:"item-cell",
      popBook:'',//bookid
      event: [
        {
          id: 1,
          room: "A101",
          name:"auice",
          start_day: "04/01/2023",
          end_day: "04/03/2023",
        },
        {
          id: 2,
          room: "A102",
          name:"pay",
          start_day: "04/5/2023",
          end_day: "04/06/2023",
        },
        {
          id: 3,
          room: "A103",
          name:"pay",
          start_day: "04/10/2023",
          end_day: "04/12/2023",
        },
        {
          id: 4,
          room: "A104",
          name:"ae",
          start_day: "04/02/2023",
          end_day: "04/05/2023",
        },
        {
          id: 5,
          room: "A104",
          name:"ae",
          start_day: "04/07/2023",
          end_day: "04/09/2023",
        },
        {
          id: 6,
          room: "A104",
          name:"auice",
          start_day: "04/10/2023",
          end_day: "04/30/2023",
        },
        {
          id: 7,
          room: "A108",
          name:"auice",
          start_day: "04/7/2023",
          end_day: "04/9/2023",
        },
        {
          id: 8,
          room: "A109",
          name:"auice",
          start_day: "04/3/2023",
          end_day: "04/10/2023",
        },
        {
          id: 9,
          room: "A1011",
          name:"auice",
          start_day: "04/5/2023",
          end_day: "04/8/2023",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.scheduler {
  min-height: 80vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: auto;
}

.nav {
  display: flex;
  background-color: #f4f5f7;
}

.tool-bar {
  display: flex;
  color: var(--primary);
  width: 100%;
}

.back-forword {
  color: white;
  font-weight: 600;
  background-color: #11cdef;
  border: 0;

}

.month-display {
  font-size: x-large;
  color: #11cdef;
}

.title {
  display: flex;
  padding: 1rem;
  width: 7rem;
}

.header-1cell {
  color: white;
  background-color: #11cdef;
  width: 10rem;
}

.header-cell {
  background-color: #2bffc6;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-right:solid 1px #f4f5f7;
}

.table-scheduler {
  max-height: 60vh;
}


table {
  width: 100%;
  white-space: nowrap;
  border: none;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
}

table th {
  padding: 0.5rem 1rem;
}

table thead th {
  font-weight: 400;
  padding: 3px;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 6rem;
}

table td {
  padding:0;
  text-align: center;
  background-color: #ebebeb;
  border-bottom: solid 1px #f4f5f7;
  border-right: solid 1px #f4f5f7;
}

.item-cell{
  text-align: center;
  background-color: #ebebeb;
  border-bottom: solid 1px #f4f5f7;
  border-right: solid 1px #f4f5f7;
}

.booked-cell{
  cursor:pointer;
  color:white;
  text-align: center;
  background-color: #09b8e4;
  width:100%;
  height: 100%;
}

.item-1cell {
  background-color: rgb(239, 222, 255);
  padding: 1rem 1rem 1rem 1rem;
  position: sticky;
}

table tbody th {
  font-weight: 100;
  font-style: italic;
  text-align: left;
  position: relative;
}

table thead th:first-child {
  position: sticky;
  left: 0;
  z-index: 3;
}

table tbody th {
  position: sticky;
  left: 0;
  z-index: 1;
}

.caption {
  text-align: center;
  background-color: rgb(214, 255, 236);
  color: black;
  width: 10rem;
  height:100%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-bottom: solid 1px #f4f5f7;
  position: sticky;
  left: 0;
  z-index: 2;
}

.popBooking{
  background-color:#cff5ff;

  p{
    color:black;
    text-align:start;
    font-size:smaller;
    margin-left:0.5rem;
  }
}

</style>
