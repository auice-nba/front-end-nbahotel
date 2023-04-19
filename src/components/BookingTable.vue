<!-- eslint-disable prettier/prettier -->
<template>
    <div>
        <table class="table tablesorter" :class="tableClass">
            <thead :class="theadClasses">
                <tr>
                    <slot name="columns">
                        <th v-for="column in columns" :key="column">{{ column }}</th>
                    </slot>
                </tr>
            </thead>

            <tbody :class="tbodyClasses">
                <tr v-for="(item, index) in data" :id="`room-${item.room_number}`" :key="index"
                    v-on:click="rowClick(item._id)">
                    <template>
                        <slot :row="item">
                            <td>
                                {{ dateFormat(item.updatedAt) }}
                            </td>
                            <td>
                                {{ item.ref_number }}
                            </td>
                            <td>
                                {{ item.room.length }}
                            </td>
                            <td>
                                {{ item.num_guess }}
                            </td>
                            <td>
                                {{ item.num_chidren ? item.num_chidren : "-" }}
                            </td>
                            <td>
                                {{ dateFormat(item.date_from) }}
                            </td>
                            <td>
                                {{ dateFormat(item.date_to) }}
                            </td>
                            <td>
                                {{ item.total_price }}
                            </td>
                            <td>
                                {{ setStatus(item) }}
                            </td>


                            <td>
                            </td>
                        </slot>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { Room } from "@/functions/roomservice"
export default {
    setup() {
        const room = new Room();

        function dateFormat(date) {
            return new Date(date).toLocaleDateString();
        }

        return {
            room, dateFormat
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
    data() {
        return {
        }
    },
    methods: {

        rowClick(id) {
            this.$router.push(`/bookingdetail/${id}`)
        },
        setStatus(data) {
            if (data.check_in_date === null) {
                return "รอเช็คอิน"
            }
            else if (data.check_in_date !== null && data.check_out_date === null) {
                return "เช็คอิน"
            }
            else if (data.check_out_date !== null) {
                return "เช็คเอาท์"
            }
            else {
                return "รอตรวจสอบ"
            }
        }
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

table>tbody>tr:hover {
    cursor: pointer;
    background-color: rgb(238, 238, 238);
}
</style>
  