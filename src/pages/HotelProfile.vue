<!-- eslint-disable prettier/prettier -->
<template>
  <div class="content">

      <h2 class="title mt-3">รายละเอียดโรงแรม</h2>
   
    <div v-if="loading" class="row">
      <div class="col-md-8">
        <edit-hotel-form :model="model"> </edit-hotel-form>
      </div>
      <div class="col-md-4">
        <UpdateHotelPicture :hotel="model"/>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import EditHotelForm from "./Profile/EditHotelForm.vue";
import {Hotel} from "@/functions/hotelservice";
import UpdateHotelPicture from "./Profile/UpdateHotelPicture.vue";
export default {
  setup(){
    const hotel = new Hotel();
    return {
      hotel
    }
  },
  components: {
  EditHotelForm,UpdateHotelPicture
  },
  async mounted(){
    //get hotel data
    await this.hotel.getHotel(this.id).then(result=>{
      if(result){
        this.model=result;
        this.loading=true;
      }
    })
  },
  data() {
    return {
      loading:false,
      id:"643e55439c48ebe52204a5a2",
      model: null,
      user: {
        fullName: "อุ๋ย",
        title: "พนักงาน",
        description: `บริการห้องพักสำหรับพักผ่อนหย่อนใจ`,
      },
    };
  },
};
</script>

<style>
.title{
  color:black;
  text-align: start;
}
</style>
