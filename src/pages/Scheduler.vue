<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <div class="scheduler">
          <div>
            <div class="nav">
              <div class="row tool-bar">
                <div class="col">
                  <button class="back-forword">&lt;&lt;</button>
                  <button class="back-forword">>></button>
                </div>
                <div class="col">
                  <h2 class="month-display">March</h2>
                </div>
                <div class="col">
                  <button class="back-forword">day</button>
                  <button class="back-forword">week</button>
                  <button class="back-forword">month</button>
                </div>
              </div>
              <div class="header">
                <div class="title"><span>วันที่</span></div>
                <div class="header-cell" v-for="(day, index) in day" :key="index">
                  {{ dateformat(day) }}
                </div>
              </div>
            </div>
            <div class="scheduler-body">
              <div class="presentation">
                <div class="item-row" v-for="(room, index) in rooms" :key="index">
                  <div class="title room-list">{{ room }}</div>
                  <div class="item-cell" v-for="(item, index) in body_cell" :key="index">
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
    for (let i = 1; i <= 30; i++) {
      this.day.push(new Date(`03/0${i}/2023`));
    }
    console.log("day", this.day);
    //set room as body row
    for (let i = 0; i < 50; i++) {
      this.rooms.push(`room-${i}`);
    }
    console.log("rooms", this.rooms);
    //set body cell array
    for (var i = 0; i < this.day.length; i++) {
      let item = "จองแล้ว";
      console.log(item);
      this.body_cell.push(item);
    }
  },
  data() {
    return {
      today: null,
      day: [],
      rooms: [],
      body_cell: [],
      event: [
        {
          id: 1,
          room: "A101",
          start_day: "03/01/2023",
          end_day: "03/01/2023",
        },
        {
          id: 1,
          room: "A101",
          start_day: "03/01/2023",
          end_day: "03/01/2023",
        },
        {
          id: 1,
          room: "A101",
          start_day: "03/01/2023",
          end_day: "03/01/2023",
        },
      ],
    };
  },
};
</script>

<style scoped>
.scheduler {
  max-height: 80vh;
  width: 100%;
  overflow-x: hidden;
}

.nav {
  display: flex;
  background-color: #f4f5f7;
}

.tool-bar {
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
}

.title {
  display: flex;
  padding: 1rem;
  width: 7rem;
}

.header {
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  background-color: #00f2c3;
  color: white;
}

.header-cell {
  display: flex;
  justify-content: center;
  font-size: small;
  font-weight: 600;
  width: 5rem;
  border-right: solid 1px #ffffff;
}

.scheduler-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.presentation {
  width: fit-content;
  overflow: scroll;
}

.item-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: solid 1px #cccccc;
  width: fit-content;
}

.item-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: small;
  font-weight: 600;
  width: 5rem;
  background-color: #bebebe;
  border-right: solid 1px #cccccc;
}

.back-forword {
  margin: 0.2rem;
  background-color: #00f2c3;
  color: white;
  border: none;
  border-radius: 0.1rem;
}

.month-display {
  margin-bottom: 0.1rem;
  color: #00f2c3;
}
</style>
