<!-- eslint-disable prettier/prettier -->
<template>
  <Card>
    <div class="contents">
      <h3>สร้างห้อง</h3>
      <form>
        <div class="row">
          <div class="col-4">
            <base-input
              label="เลขที่ห้อง"
              v-model="data.room_number"
              placeholder="เลขที่"
            />
          </div>
          <div class="col-4">
            <base-input label="ประเภท">
              <select
                v-model="data.room_type"
                class="form-control"
                id="room-type"
              >
                <option v-for="(room,index) in roomtype" :key="index" :value="room._id" selected> {{ room.name_th }}</option>
              </select>
            </base-input>
          </div>
          <div class="col-4">
            <base-input label="เตียง">
              <select
                v-model="data.bed_type"
                class="form-control"
                id="bed-type"
              >
                <option v-for="(bed,index) in bedtype" :key="index" :value="bed._id">{{ bed.name }}</option>
   
              </select>
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <base-input label="ลักษณะห้องอาบน้ำ">
            <select
                v-model="data.bath_type"
                class="form-control"
                id="bath-type"
              >
                <option v-for="(bath,index) in bathtype" :key="index" :value="bath._id">{{ bath.name }}</option>

              </select>
          </base-input>
          </div>
          <div class="col-md-4">
            <base-input label="เครื่องปรับอากาศ">
            <select
                v-model="data.aircondition"
                class="form-control"
                id="bath-type"
              >
                <option v-for="(air,index) in airtype" :key="index" :value="air._id">{{ air.name }}</option>
           
              </select>
          </base-input>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <base-input label="เขตปลอดบุหรี่">
              <select v-model="data.smoke_type" class="form-control" id="smoke">
                <option value="true">ปลอดบุหรี</option>
                <option value="false">สถานที่พักอนุญาติให้สูบบุหรี่ในที่พัก</option>
              </select>
            </base-input>
          </div>
          <div class="col-4">
            <base-input label="อินเตอร์เน็ตไร้สาย">
              <select v-model="data.wifi" class="form-control" id="internet">
                <option value="true">wifi</option>
                <option value="false">ไม่มีบริหารอินเตอร์เน็ตไร้สาย</option>
              </select>
            </base-input>
          </div>
          <div class="col-4">
            <base-input label="ระบบรักษาความปลอดภัย">
              <select v-model="data.security" class="form-control" id="bed-type">
                <option value="true">กล้องวงจรปิด</option>
                <option value="false">ไม่มีการใช้งานระบบกล้องวงจรปิด</option>
              </select>
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <base-input label="วิว และ บรรยากาศ">
              <select v-model="data.view_type" class="form-control" id="bed-type">
                <option v-for="(view,index) in viewtype" :key="index" :value="view._id">{{ view.name }}</option>
              </select>
            </base-input>
          </div>
          <div class="col-4">
            <base-input label="ขนาด" v-model="data.size" placeholder="ตรม." />
          </div>
          <div class="col-4">
            <base-input
              label="จำนวนผู้เข้าพักสูงสุด"
              v-model="data.max_person"
              placeholder="จำนวนคน"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <base-input v-model="data.detail" label="รายละเอียดเพิ่มเติม" />
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <base-input label="ราคา" v-model="data.price" placeholder="บาท" />
          </div>
          <div class="col-2">
            <base-input label="หน่วย">
              <select v-model="data.unit" class="form-control" id="bed-type">
                <option value="ต่อวัน">ต่อวัน</option>
                <option value="ต่อคืน">ต่อคืน</option>
                <option value="ต่อชั่วโมง">ต่อชั่วโมง</option>
              </select>
            </base-input>
          </div>
          <div class="col-3">
            <base-input label="สถาณะปัจจุบัน">
            <select class="form-control" id="bed-type">
                <option v-for="(status,index) in roomstatustype" :key="index" :value="status._id">{{ status.name }}</option>
                
              </select>
          </base-input>
          </div>
        </div>
        <div class="col-4">
          <base-checkbox class="mb-3" v-model="children_type">
            บริการฟรีสำหรับเด็กที่อายุต่ำกว่า 6 ปี ที่มากับผุ้ปกครอง
          </base-checkbox>
        </div>
        <base-button
          type="primary"
          @click.native="createRoom"
          >ไปขั้นตอนต่อไป</base-button
        >
      </form>
    </div>
  </Card>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { Card, BaseInput } from "@/components/index";
import { Room } from "../../functions/roomservice";

export default {
  setup() {
    const room = new Room();
    return {
      room,
    };
  },
  components: {
    Card,
    BaseInput,
  },
  async mounted() {
    this.data.hotel_id = "642b8a17992d04163858b7cf";
    await this.room.getRoomType().then((result)=>{
    this.roomtype = result;
   })

   await this.room.getBedType().then((result)=>{
    this.bedtype = result;
   })

   await this.room.getAirconditionType().then((result)=>{
    this.airtype = result;
   })

   await this.room.getBathType().then((result)=>{
    this.bathtype = result;
   })

   await this.room.getViewType().then((result)=>{
    this.viewtype = result;
    console.log(this.viewtype);
   })

   await this.room.getRoomStatusType().then((result)=>{
    this.roomstatustype = result;
   })

  },
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    async createRoom() {
      if(this.children_type){
        this.data.children = "บริการฟรีสำหรับเด็กที่อายุต่ำกว่า 6 ปี ที่มากับผุ้ปกครอง"
      }
      else{
        this.data.children = ""
      }
      const result = await this.room.createRoom(this.data);
      if (result._id != undefined) {
        const url = `/addroomfeature/${result._id}`;
        this.$router.push(url);
      }
    },
  },
  data() {
    return {
      checkboxes: {
        unchecked: false,
        checked: true,
        uncheckedDisabled: false,
        checkedDisabled: true,
      },
      roomtype:null,
      bedtype:null,
      airtype:null,
      bathtype:null,
      smoketyp:null,
      viewtype:null,
      children_type:false,
      roomstatustype:null,
      data: {
        room_number: "",
        hotel_id: "",
        room_type: "",
        imageURl: [],
        detail: "",
        price: 0,
        unit:"",
        size: 0,
        bed_type: "",
        aircondition:"",
        max_person: 0,
        children: "",
        view_type: "",
        bath_type: "",
        smoke_type: false,
        furniture: [],
        room_service: [],
        amenities: [],
        wifi: false,
        entertainment: [],
        security: false,
        promotions: [],
        status: "642cf50d5c26c12382ad7127",
      },
    };
  },
};
</script>

<style scoped>
.contents {
  min-height: 90vh;
  text-align: start;
  padding: 1rem;
}
</style>
