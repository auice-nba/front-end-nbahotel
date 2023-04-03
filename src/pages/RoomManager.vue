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
              :data="table1.data"
              :columns="table1.columns"
              thead-classes="text-primary"
            >
            </room-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Card } from "@/components/index";

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
const tableData = [
  {
    id: "6423be8c7987777e422d4dc4",
    room_number: "A101",
    name_th: "สแตนดาร์ด",
    price: 1500,
    bed_type: "เตียงเดี่ยว",
    max_person: 3,
    children: true,
    status: "พร้อมให้บริการ",
  },
  {
    id: "6423be8c7987777e422d4dc5",
    room_number: "A102",
    name_th: "สแตนดาร์ด",
    price: 1500,
    bed_type: "เตียงเดี่ยว",
    max_person: 3,
    children: true,
    status: "พร้อมให้บริการ",
  },
  {
    id: "6423be8c7987777e422d4dc5",
    room_number: "A103",
    name_th: "สแตนดาร์ด",
    price: 1500,
    bed_type: "เตียงเดี่ยว",
    max_person: 3,
    children: true,
    status: "พร้อมให้บริการ",
  },
  {
    id: "6423be8c7987777e422d4dc5",
    room_number: "A104",
    name_th: "สแตนดาร์ด",
    price: 1500,
    bed_type: "เตียงเดี่ยว",
    max_person: 3,
    children: true,
    status: "พร้อมให้บริการ",
  },
];

export default {
  components: {
    Card,
    RoomTable,
  },
  data() {
    return {
      table1: {
        title: "Simple Table",
        columns: [...tableColumns],
        data: [...tableData],
      },
      table2: {
        title: "Table on Plain Background",
        columns: [...tableColumns],
        data: [...tableData],
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
