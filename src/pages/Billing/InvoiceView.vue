<template>
    <base-table :data="tableData" :columns="columns" thead-classes="text-primary">
    <template slot="columns">
        
          
            <th class="text-left">วันที่</th>
          <th class="text-center">รายการ</th>
          <th class="text-right">รายได้</th>
        
  
        </template>  
      <template slot-scope="{row}">
        
          
            <td class="text-left">{{ formateDate(row.date) }}</td>
          <td class="text-center">
            {{ row.ref_number }}
          </td>
          <td class="text-right">
            {{ row.total_cost }}
          </td>
    
      
      
       
      </template>
      <template #summary >
     
    
          <td class="text-left">รวมทั้งหมด</td>
        <td></td>
        <td class="text-right"><strong>{{ total }}</strong></td>
      </template>
     
    </base-table>
  </template>
  <script>


  import BaseTable from "@/components/BaseTable";


  export default {
    setup(){

      const formateDate = (date) =>{
        return new Date(date).toLocaleDateString('th-TH',{year:'numeric',month:'long',day:'2-digit'})
      }
      return {
        formateDate
      }
    },
    components: {
 
      BaseTable,

    },
    props:{
      today:Boolean,
      tableData:Array,
      total:Number,
    },
    data(){
      return {
        columns: ["วันที่", "รายได้",],
      }
    },

    created(){
       
      },
  
    computed: {
     
     
    },
    async mounted(){
      
    },
    methods:{
    
      }
   
  };
  </script>
  <style scoped>
   li{
    list-style: none;
   }
  </style>
  