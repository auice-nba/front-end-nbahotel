<template>
  <base-table :data="tableData" thead-classes="text-primary">
    <template slot-scope="{ row }">
      <td>
        <base-checkbox v-model="row.done"> </base-checkbox>
      </td>
      <td class="text-left">
        <p class="title">{{ row.title }}</p>
        <p class="text-muted">{{ row.subtitle }} เมื่อเวลา 
          {{ new Date(row.createdAt).toLocaleDateString('th-TH',{year:'numeric',month:'short',day:'2-digit',hour:'numeric',minute:'numeric',second:'numeric'}) }}</p>
      </td>
      <td class="td-actions text-right">
        <base-button type="link" artia-label="edit button">
          <i class="tim-icons icon-pencil"></i>
        </base-button>
      </td>
    </template>
  </base-table>
</template>
<script>
  import { io } from "socket.io-client";
import BaseButton from "@/components/BaseButton";
import BaseTable from "@/components/BaseTable";
import BaseCheckbox from "@/components/BaseCheckbox";
import {Report} from "@/functions/reportservice";
import store from "@/stores"

export default {
  setup(){

    const socket = io(process.env.VUE_APP_API);
    const reportservice = new Report();
    return {
      reportservice,store,socket
    }
  },
  components: {
    BaseButton,
    BaseTable,
    BaseCheckbox,
  },
  props:{
    today:Boolean,
  },
  data(){
    return {

      hotel_id:null,
      tasks:[],
    }
  },
  emits: ['task'],
  created(){
      this.socket.on('newtask',async ()=>{

        await this.getTask();
        
      })

    },

  computed: {
    tableData() {

      if(this.today){

        return this.tasks.filter(el=>new Date(el.createdAt).toLocaleDateString('th-TH')==new Date().toLocaleDateString('th-TH'));
      }else{
        return this.tasks
      }
    },
  },
  async mounted(){
    this.hotel_id = this.store.state.user.service_id
    await this.getTask();
  },
  methods:{
    async getTask(){
      await this.reportservice.getTask(this.hotel_id).then(result=>{
      this.tasks = result.data.reverse();
      this.$emit('task',result.data.filter(el=>el.done===false ).length);
    })
    }
  }
};
</script>
<style></style>
