<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <div class="manager-button">
      <base-button type="primary" @click="$router.push('/createroom')">สร้างห้อง</base-button>
    </div>
    <table class="table tablesorter" :class="tableClass">
      <thead :class="theadClasses">
        <tr>
          <slot name="columns">
            <th v-for="column in columns" :key="column">{{ column }}</th>
          </slot>
        </tr>
      </thead>

      <tbody :class="tbodyClasses">
        <tr v-for="(item, index) in data" :key="index">
          <slot :row="item">
            <td>
              {{ item.room_number }}
            </td>
            <td>
              {{ item.type.name_th}}
            </td>
            <td>
              {{ item.bed_type.name }}
            </td>
            <td>
              {{ item.price }}
            </td>
            <td>
              {{ item.max_person }}
            </td>
            <td>
              {{ item.children }}
            </td>
            <td>
              {{ item.status.name }}
            </td>
            <td>
              <base-button type="info" @click="$router.push(`/updateroom/${item._id}`)">แก้ไข</base-button>
              <base-button class="ml-2" type="danger" @click="deleteRoom(item._id)">ลบห้อง</base-button>
            </td>
          </slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import {Room} from "@/functions/roomservice"
export default {
  setup(){
    const room = new Room();
    return {
      room
    }
  },
  name: "room-table",

  props: {
    tableClass: {
      type: String,
      default: "",
    },
    theadClasses: {
      type: String,
      default: "",
    },
    tbodyClasses: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    async deleteRoom(id){
      console.log(id);
      this.room.deleteRoom(id).then(result => {

        console.log(result);
        window.location.reload();

      })
    }
  }
};
</script>

<style scoped>
button {
  background-color: #00f2c3;
  padding: 0.5rem;
  color: white;
  border: none;
  border-radius: 0.2rem;
}
</style>
