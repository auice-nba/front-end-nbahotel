<template>
  <Card>
    <div class="contents">
      <h3>เพิ่มลัษณะพิเศษของห้อง</h3>
      <form>
        <div class="row">
          <div class="col-3">
            <base-input label="เฟอร์นิเจอร์">
              <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
                โซฟา
              </base-checkbox>
              <base-checkbox class="mb-3" v-model="checkboxes.checked">
                ครัว
              </base-checkbox>

              <base-checkbox
                class="mb-3"
                v-model="checkboxes.uncheckedDisabled"
              
              >
                เคาเตอร์บาร์
              </base-checkbox>
              <base-checkbox
                class="mb-3"
                v-model="checkboxes.checkedDisabled"

              >
                ตู้เสื้อผ้า
              </base-checkbox>
            </base-input>
          </div>

          <div class="col-3">
            <base-input label="สิ่งอำนวยความสะดวก">
              <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
                เครื่องปรับอากาศ
              </base-checkbox>
              <base-checkbox class="mb-3" v-model="checkboxes.checked">
                รองเท้าแตะ
              </base-checkbox>

              <base-checkbox
                class="mb-3"
                v-model="checkboxes.uncheckedDisabled"
             
              >
                ผ้าขนหนู
              </base-checkbox>
              <base-checkbox
                class="mb-3"
                v-model="checkboxes.checkedDisabled"
              
              >
                นาฬิกาปลุก
              </base-checkbox>
            </base-input>
          </div>

          <div class="col-3">
            <base-input label="รูมเซอร์วิส">
              <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
                บริการทำความสะอาด
              </base-checkbox>
              <base-checkbox class="mb-3" v-model="checkboxes.checked">
                อาหารเช้า
              </base-checkbox>

              <base-checkbox
                class="mb-3"
                v-model="checkboxes.uncheckedDisabled"
         
              >
                อาหารและเครื่องดื่ม
              </base-checkbox>
              <base-checkbox
                class="mb-3"
                v-model="checkboxes.checkedDisabled"
             
              >
                รถรับส่ง
              </base-checkbox>
            </base-input>
          </div>

          <div class="col-3">
            <base-input label="สิ่งบันเทิง">
              <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
                โทรทัศน์
              </base-checkbox>
              <base-checkbox class="mb-3" v-model="checkboxes.checked">
                คาราโอเกะ
              </base-checkbox>

              <base-checkbox
                class="mb-3"
                v-model="checkboxes.uncheckedDisabled"

              >
                เครื่องเล่นเกมส์
              </base-checkbox>
            </base-input>
          </div>
        </div>

        <div class="col-12 mt-3">
          <base-button link
            type="secondary"
            @click.native="$router.push('/createroom')"
            >กลับ</base-button>
          <base-button
            type="primary"
            @click.native="$router.push('/updateroompicture')"
            >ไปขั้นตอนต่อไป</base-button
          >
        </div>
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
