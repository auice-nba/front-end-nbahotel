<template>
    <div v-if="loading" class="pt-3">
        <h4>รายละเอียดสถานบริการ</h4>
        <base-input label="ประเภท"> ?
            <select class="form-control">
                <option v-for="(item, index) in categories" :key="index" :value="item._id">{{ item.name }}</option>
            </select>
        </base-input>
        <base-input type="text" label="ชื่อโรงแรม" />
        <base-input type="text" label="ที่อยู่" />
        <base-input type="text" label="ตำบล">
            <select name="tambon" class="form-control" @change="setTambon($event)">
                <option v-for="(item, index) in tambon" :key="index" :value="item.id">{{ item.name_th }}</option>
            </select>
        </base-input>
        <base-input type="text" label="อำเภอ">
            <select name="amphure" class="form-control" @change="setAmphure($event)">
                <option v-for="(item, index) in amphure" :key="index" :value="item.id">{{ item.name_th }}</option>
            </select>
        </base-input>
        <base-input type="text" label="จังหวัด">
            <select name="province" class="form-control" @change="setProvince($event)">
                <option v-for="(item, index) in province" :key="index" :value="item.id">{{ item.name_th }}</option>
            </select>
        </base-input>
        <div class="row">
            <div class="col">
                <base-input type="tel" label="เบอร์โทรติดต่อ 1" />
            </div>
            <div class="col">
                <base-input type="tel" label="เบอร์โทรติดต่อ 2" />
            </div>
        </div>
        <base-button type="primary" @click="createHotel">ไปขั้นตอนต่อไป</base-button>
    </div>
</template>

<script>
import { BaseInput } from "@/components/index";
import { Hotel } from '@/functions/hotelservice';
import { Province } from '@/functions/provinceservice';

export default {
    setup() {
        const hotelservice = new Hotel();
        const provinceservice = new Province();
        return { hotelservice, provinceservice }
    },
    components: {
        BaseInput
    },
    mounted() {
        this.getCategories();
        this.province = this.provinceservice.getProvince();
        this.amphure = this.province[0].amphure
        this.tambon = this.amphure[0].tambon
        this.loading = true;



    },
    data() {
        return {
            loading: false,
            province: null,
            amphure: null,
            tambon: null,
            categories: null,
            hotel: {
                province: null,
            }
        }
    },
    methods: {
        createHotel() {
            this.$router.push('/landingpage/hotel-service-detail');
        },
        async getCategories() {
            await this.hotelservice.getCatetory().then(result => {
                this.categories = result;
            })
        },
        setProvince(e) {
            if (e.target.options.selectedIndex > -1) {

                const data = e.target.options[e.target.options.selectedIndex].innerHTML;
                this.amphure = this.province.find(el => el.name_th == data).amphure;
                this.tambon = this.amphure[0].tambon;


                return data;
            }
        },
        setAmphure(e) {
            if (e.target.options.selectedIndex > -1) {
                const data = e.target.options[e.target.options.selectedIndex].innerHTML;
                this.tambon = this.amphure.find(el => el.name_th == data).tambon;


                return data;
            }
        },
        setTambon(e) {
            if (e.target.options.selectedIndex > -1) {

                const data = e.target.options[e.target.options.selectedIndex].innerHTML;

                return data;
            }
        },
    }
}
</script>

<style></style>