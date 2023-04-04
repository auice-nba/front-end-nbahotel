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
                    <tr class="item-row" v-for="(room, index) in rooms" :key="index">
                      <caption>{{ room }}</caption>
                      <td class="item-cell" :id="`item-` + index" v-for="(cell, index) in body_cell" :key="index">{{ cell }}
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

export default {
  methods: {
    dateformat(day) {
      const result = dayjs(day).format("DD/MM");
      return result;
    },
  },
  mounted() {
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
    //set room as body row
    for(let i=1;i<=30;i++){

      this.rooms.push(`A10${i}`);
    }
    // console.log("rooms", this.rooms);
    //set body cell array
    for (var i = 0; i < this.last_day.getDate(); i++) {
      // console.log(item);
      const dayondate = new Date(this.first_day.getFullYear(), this.first_day.getMonth(), i + 1);
      console.log(dayondate);
      const currentDay = new Date(this.first_day.getFullYear(), this.first_day.getMonth(), i + 1).getTime();
      console.log('start day',new Date(this.event[i].start_day));
      console.log('end day',new Date(this.event[i].end_day));
         
      const booking = this.event.filter(event => new Date(event.start_day).getTime()>=currentDay && new Date(event.end_day).getTime()>currentDay);

      console.log(booking,'day',i+1)
        
  
      }
  },
  data() {
    return {
      today: null,
      first_day: null,
      last_day: null,
      this_month: null,
      days: [],
      rooms: [],
      body_cell: [],
      event: [
        {
          id: 1,
          room: "A101",
          start_day: "04/01/2023",
          end_day: "04/03/2023",
        },
        {
          id: 2,
          room: "A102",
          start_day: "04/5/2023",
          end_day: "04/06/2023",
        },
        {
          id: 3,
          room: "A103",
          start_day: "04/10/2023",
          end_day: "04/12/2023",
        },
      ],
    };
  },
};
</script>

<style scoped>
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
}

.table-scheduler {
  max-height: 60vh;
}


table {
  width: 100%;
  font-family: "Fraunces", serif;
  white-space: nowrap;
  border: none;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
}

table td,

table th {
  padding: 0.5rem 1rem;
}

table thead th {
  padding: 3px;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 5rem;
}

table td {
  text-align: center;
  background-color: #ebebeb;
  border-bottom: solid 1px #f4f5f7;
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

caption {
  text-align: left;
  background-color: rgb(228, 118, 255);
  color: black;
  width: 10rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  position: sticky;
  left: 0;
  z-index: 2;
}</style>
