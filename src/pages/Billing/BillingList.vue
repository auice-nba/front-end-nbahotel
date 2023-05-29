<template>
    <base-table :data="tableData" thead-classes="text-primary">
      <template >
       
      </template>
    </base-table>
  </template>
  <script>


  import BaseTable from "@/components/BaseTable";


  export default {
    setup(){
      return {

      }
    },
    components: {
 
      BaseTable,

    },
    props:{
      today:Boolean,
      tableData:Object
    },
    data(){
      return {

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
  