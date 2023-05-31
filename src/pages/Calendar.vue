<template>
    <div class="content">
        <div class="row">
            <div class="col-12">
                <card type="chart">
                    <template slot="header">
                        <template>
                            
                            <h5 class="card-category">ตารางโควต้า</h5>
                        </template>
                        
                        <template>
                            <h2 class="card-title">Calendar  {{active_year}}</h2>
                            <h4>{{ active_month }}</h4>
                        </template>
                        <div
                  class="btn-group btn-group-toggle"
                  data-toggle="buttons"
                  :class="'float-right'"
                >
                <template>
                    <label class="btn-success px-3 py-1 rounded text-white">Next</label>
                </template>
            </div>
                    </template>
                    <template slot="raw-content">

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th></th>
                                    <td>วันที่</td>
                                </tr>
                                <tr>

                                    <th >Rooms Type</th>
                                    <th  v-for="(item,index) in period" :key="index">{{ dateFormat(item.date) }}</th>
                                </tr>
                                    
                            </thead>
                            <tbody>
                                <tr v-for="(id,index) in calendar" :key="index">

                                <th >{{ id.id }}</th>
                                <td  v-for="(item,index) in id.collection" :key="index">{{ item.used_quota}}</td>
                              

                                </tr>

                            </tbody>
                        </table>

                    </template>
              
          
                </card>
            </div>
        </div>
    </div>
</template>
<script>
 import { io } from "socket.io-client";
import { Card } from "@/components/index";
import { Calendar } from "@/functions/calendarservice";

export default {
    setup(){
        const socket = io(process.env.VUE_APP_API);
        const calendarservice=new Calendar();

        const dateFormat = (date) => {
            return new Date(date).toLocaleDateString('th-TH',{day:'2-digit'})
        }

        return {
            calendarservice,dateFormat,socket
        }
    },
    components: {
        Card
    },
    created(){
      this.socket.on('newbooking',async (data)=>{
 
          console.log(data);
          await this.getCalendar();
        
      })
    },
    data(){
        return {
            active_year: new Date().getFullYear(),
            active_month: '',
            selected_month:0,
            selected_year:0,
            calendar:[],
            period:[],
        }
    },
    async mounted(){
        this.selected_month= new Date().getMonth();
        this.selected_year= new Date().getFullYear();
        this.active_month = new Date(this.selected_year,this.selected_month,1).toLocaleDateString('th-TH',{month:'long'});
        this.active_year = this.selected_year;
        await this.getCalendar()
    },
    methods:{
        async getCalendar(){
            await this.calendarservice.getCalendar().then(result=>{
                if(result && result.status==='ok'){

                    this.calendar=result.data;
                    this.period = result.data[0].collection
                    console.log(result);
                }
            })
        }
    }
}
</script>
<style scoped>

</style>