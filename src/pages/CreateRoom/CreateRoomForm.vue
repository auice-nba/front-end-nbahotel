<template>
  <Card>
    <div class="contents">
      <h3>สร้างห้อง</h3>
      <form>
        <div class="row">
          <div class="col-4">
            <base-input
              label="เลขที่ห้อง"
              v-model="model.country"
              placeholder="เลขที่"
            />
          </div>
          <div class="col-4">
            <base-input label="ประเภท">
              <select class="form-control" id="bed-type">
                <option>Standard</option>
                <option>Delux</option>
              </select>
            </base-input>
          </div>
          <div class="col-4">
            <base-input label="เตียง">
              <select class="form-control" id="bed-type">
                <option>เตียงคู่</option>
                <option>เตียงเดี่ยว</option>
              </select>
            </base-input>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <base-input label="เขตปลอดบุหรี่">
              <select class="form-control" id="smoke">
                <option>ปลอดบุหรี</option>
                <option>สถานที่พักอนุญาติให้สูบบุหรี่ในที่พัก</option>
              </select>
            </base-input>
          </div>
          <div class="col-4">
            <base-input label="อินเตอร์เน็ตไร้สาย">
              <select class="form-control" id="internet">
                <option>wifi</option>
                <option>ไม่มีบริหารอินเตอร์เน็ตไร้สาย</option>
              </select>
            </base-input>
          </div>
          <div class="col-4">
            <base-input label="ระบบรักษาความปลอดภัย">
              <select class="form-control" id="bed-type">
                <option>กล้องวงจรปิด</option>
                <option>ไม่มีการใช้งานระบบกล้องวงจรปิด</option>
              </select>
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <base-input label="วิว และ บรรยากาศ">
              <select class="form-control" id="bed-type">
                <option>วิวทะล</option>
                <option>วิวภูเขา</option>
              </select>
            </base-input>
          </div>
          <div class="col-4">
            <base-input label="ขนาด" v-model="model.price" placeholder="ตรม." />
          </div>
          <div class="col-4">
            <base-input
              label="จำนวนผู้เข้าพักสูงสุด"
              v-model="model.price"
              placeholder="จำนวนคน"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <base-input label="รายละเอียดเพิ่มเติม" />
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
          <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
            บริการฟรีสำหรับเด็กที่อายุต่ำกว่า 6 ปี ที่มากับผุ้ปกครอง
          </base-checkbox>
        </div>
        <base-button
          type="primary"
          @click.native="$router.push('/addroomfeature')"
          >ไปขั้นตอนต่อไป</base-button
        >
      </form>
    </div>
  </Card>
</template>
<script>
import { Card, BaseInput } from "@/components/index";

export default {
  components: {
    Card,
    BaseInput,
  },
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
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
