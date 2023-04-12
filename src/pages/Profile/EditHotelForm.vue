<!-- eslint-disable prettier/prettier -->
<template>
  <card>
    <div class="row">
      <div class="col-md-4 pr-md-1 text-left">
        <base-input label="ชื่อโรงแรม" placeholder="ชื่อโรงแรม" v-model="model.name" disabled>
        </base-input>
      </div>
      <div class="col-md-4 pr-dm-1 text-left">
        <base-input label="ประเภท">
          <select class="form-control">
            <option v-for="(item, index) in category" :key="index" :selected="item.name === model.category.name">{{
              item.name
            }}</option>
          </select>
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-left">
        <base-input label="ที่อยู่" v-model="model.address" placeholder="ที่อยู่">
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 pr-md-1 text-left">
        <base-input label="ตำบล">
          <select class="form-control" @change="hotel.tambon = setTambon($event)">
            <option v-for="(item, index) in tambon" :key="index" :value="item.id"
              :selected="item.name_th === model.tumbon ? true : false">{{ item.name_th }}</option>
          </select>
        </base-input>
      </div>
      <div class="col-md-4 px-md-1 text-left">
        <base-input label="อำเภอ">
          <select class="form-control" @change="hotel.amphure = setAmphure($event)">
            <option v-for="(item, index) in amphure" :key="index" :value="item.id"
              :selected="item.name_th === model.amphure ? true : false">{{ item.name_th }}</option>
          </select>
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1 text-left">
        <base-input label="จังหวัด">
          <select class="form-control" @change="hotel.province = setProvince($event)">
            <option v-for="(item, index) in provinceApi" :key="index" :value="item.id"
              :selected="item.name_th === model.province ? true : false">{{ item.name_th }}</option>
          </select>
        </base-input>
      </div>

    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1 text-left">
        <base-input label="ประเทศ" v-model="model.country" placeholder="Country" disabled>
        </base-input>
      </div>

      <div class="col-md-4 px-md-1 text-left">
        <base-input label="เลขไปรษณีย์" placeholder="เลขไปรษณีย์" v-model="hotel.zipcode" disabled> </base-input>
      </div>

    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1 text-left">
        <base-input label="เบอร์โทรศัพท์" v-for="(item, index) in model.phone_number" :key="index" :value="item" disabled>
        </base-input>
      </div>
    </div>

    <div class="row">

      <div class="col-md-8 text-left">
        <base-input>
          <label>รายละเอียดเกี่ยวกับโรงแรม</label>
          <textarea rows="4" cols="80" class="form-control edit-description " placeholder="Here can be your description"
            v-model="model.description">
                    </textarea>
        </base-input>
      </div>
    </div>
    <!-- Hotel feature -->
    <Card>
      <h4 class="text-left">ลักษณะพิเศษ</h4>
      <div class="row">
        <div class="col-md-4 text-left mb-3">
          <h5>ไฮไลท์</h5>
          <base-checkbox v-for="(item, index) in highlight" :key="index" v-model="item.check">
            {{ item.name }}
          </base-checkbox>
        </div>
        <div class="col-md-4 text-left mb-3">
          <h5>เครื่องอำนวยความสะดวก</h5>
          <base-checkbox v-for="(amen, index) in amenities" :key="index" v-model="amen.check">
            {{ amen.name }}
          </base-checkbox>
        </div>
        <div class="col-md-4 text-left mb-3">
          <h5>ใบรับรอง</h5>
          <base-checkbox v-for="(cert, index) in certificate" :key="index" v-model="cert.check">
            {{ cert.name }}
          </base-checkbox>
        </div>
        <div class="col-md-4 text-left mb-3">
          <h5>สถานที่ไกล้เคียง</h5>
          <base-checkbox v-for="(nearly_place, index) in model.nearly_place" :key="index"
            v-model="dataupdate.nearly_place">
            {{ nearly_place.name }}
          </base-checkbox>
        </div>
      </div>
    </Card>
    <!-- End hotel feature -->
    <template slot="footer">
      <base-button type="success" fill>บันทึก</base-button>
    </template>
  </card>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { Card, BaseInput } from "@/components/index";
import BaseButton from "@/components/BaseButton";
import { Hotel } from "@/functions/hotelservice";
import * as provinceapi from "@/functions/province"

export default {
  setup() {
    const hotelservice = new Hotel();
    return {
      hotelservice
    }
  },
  components: {
    Card,
    BaseInput,
    BaseButton,
  },
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  async mounted() {
    await this.hotelservice.getCatetory().then(result => {
      this.category = result;
      console.log(this.category);
    })

    await this.hotelservice.getAmenities().then(result => {
      this.amenities = result;
      console.log(this.amenities);
    });
    await this.hotelservice.getHighlight().then(result => {
      this.highlight = result;
    });
    await this.hotelservice.getCertificate().then(result => {
      this.certificate = result;
    });

    this.provinceApi = provinceapi.default;
    this.amphure = this.provinceApi.find(el => el.name_th === this.model.province).amphure;
    this.tambon = this.amphure.find(el => el.name_th === this.model.amphure).tambon;
    this.hotel.zipcode = this.tambon[0].zip_code;

    //set checkbox to init state
    this.amenities = this.amenities.map(el => ({
      id: el._id,
      name: el.name,
      description: el.description,
      check: (this.DefineHotelAmenities(el))
    }));

    this.highlight = this.highlight.map(el => ({
      id: el._id,
      name: el.name,
      description: el.description,
      check: (this.DefineHotelHighlight(el))
    }))

    console.log(this.amenities,this.highlight);


  },
  data() {
    return {
      category: [],
      amenities: [],
      highlight: [],
      certificate: [],
      provinceApi: null,
      province: [],
      amphure: [],
      tambon: [],
      hotel: {
        province: null,
        amphure: null,
        tambon: null,
        zipcode: null,
      },
      dataupdate: {
        amenities: [],
        highlight: [],
        certificate: [],
      }
    }
  },
  methods: {
    setProvince(e) {
      if (e.target.options.selectedIndex > -1) {

        const data = e.target.options[e.target.options.selectedIndex].value;
        this.amphure = this.provinceApi.find(el => el.id == data).amphure;
        this.tambon = this.amphure[0].tambon;
        this.hotel.zipcode = this.tambon[0].zip_code;

        return data;
      }
    },
    setAmphure(e) {
      if (e.target.options.selectedIndex > -1) {

        const data = e.target.options[e.target.options.selectedIndex].value;
        this.tambon = this.amphure.find(el => el.id == data).tambon;
        this.hotel.zipcode = this.tambon[0].zip_code;

        return this.tambon;
      }
    },
    setTambon(e) {
      if (e.target.options.selectedIndex > -1) {

        const data = e.target.options[e.target.options.selectedIndex].value;
        this.hotel.tambon = this.tambon.find(el => el.id = data);
        this.hotel.zipcode = this.hotel.tambon.zip_code
        return data;
      }
    },
    DefineHotelAmenities(amenity) {
      console.log('amen',amenity);
      let result=false;

      if (this.model.amenities) {
        result = this.model.amenities.find(el => el._id === amenity._id) ? true : false;
      }

      console.log('result', result);
      return result
    },
    DefineHotelHighlight(highlight_item) {
      console.log('highlight_item', highlight_item);
      let result=false;

      if (this.model.highlight) {
        result = this.model.highlight.find(el => el._id === highlight_item._id) ? true : false;
      }

      console.log('result', result);
      return result
    },
  }
}
</script>

<style scoped>
.edit-description {
  color: #344675;
  opacity: 1;
  border: solid 1px rgba(29, 37, 59, 0.5);
  border-radius: 0.4285rem;
}
</style>
  