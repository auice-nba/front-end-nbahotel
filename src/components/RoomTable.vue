<!-- eslint-disable vue/no-use-v-if-with-v-for -->

<template>
  <div>
    <div class="manager-button">
      <button>สร้างห้อง</button>
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
              {{ item.name_th }}
            </td>
            <td>
              {{ item.bed_type }}
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
              {{ item.status }}
            </td>
            <td>
              <button>แก้ไข</button>
            </td>
          </slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
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
