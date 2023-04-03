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
                <option value="Standdard" selected>Standard</option>
                <option value="Delux">Delux</option>
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
                <option>เตียงคู่</option>
                <option>เตียงเดี่ยว</option>
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
                <option value="วิวทะเล">วิวทะล</option>
                <option value="วิวภูเขา">วิวภูเขา</option>
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
            <base-input label="ราคา" v-model="model.price" placeholder="บาท" />
          </div>
          <div class="col-2">
            <base-input label="หน่วย">
              <select class="form-control" id="bed-type">
                <option>ต่อวัน</option>
                <option>ต่อคืน</option>
                <option>ต่อชั่วโมง</option>
              </select>
            </base-input>
          </div>
        </div>
        <div class="col-4">
          <base-checkbox class="mb-3" v-model="data.children">
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
  mounted() {},
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
      console.log(this.data);
      const result = await this.room.createRoom(this.data);
      if (result) {
        console.log(result);
        this.$router.push(`/addroomfeature/${result._id}`);
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
      data: {
        room_number: "",
        hotel_id: "",
        room_type: "",
        imageURl: [],
        detail: "",
        price: 0,
        size: 0,
        bed_type: "",
        max_person: 0,
        children: false,
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
        status: "",
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
