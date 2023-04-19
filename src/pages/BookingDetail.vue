<!-- eslint-disable prettier/prettier -->
<template>
    <div class="content">
        <div class="row">
            <div class="col-md-8">
                <Card v-if="loading">
                    <h3 class="text-left">รายละเอียดใบจอง</h3>
                    <div class="row">
                        <div class="col-md-3 text-left">
                            Ref Number
                        </div>
                        <div class="col-md-9 text-left">{{ booking.ref_number }}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-3 text-left">
                            วันที่
                        </div>
                        <div class="col-md-9 text-left">{{ dateFormat(booking.createdAt)}}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 text-left">
                            ชื่อลูกค้า
                        </div>
                        <div class="col-md-9 text-left">{{ booking.customer_name}}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-3 text-left">
                            เบอร์โทร
                        </div>
                        <div class="col-md-9 text-left">{{ booking.customer_tel}}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 text-left">
                            วันที่จอง
                        </div>
                        <div class="col-md-9 text-left">{{ dateFormat(booking.date_from)}} - {{ dateFormat(booking.date_to) }}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 text-left">
                            จำนวนผุ้เข้าพัก
                        </div>
                        <div class="col-md-9 text-left">{{ booking.num_guess}} คน</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-3 text-left">
                            ผู้ติดตามที่อายุต่ำกว่า 6 ปี
                        </div>
                        <div class="col-md-9 text-left">{{ booking.num_children?booking.num_children+" คน":'ไม่มี'}}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 text-left">
                            ห้องพักที่ได้จอง
                        </div>
                        <div class="col-md-9 text-left">
                            <ul>
                                <li v-for="(room,index) in booking.room" :key=index>
                               ห้อง {{ room.room_number }} ราคา {{ room.price }} บาท/คืน
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 text-left">
                           ค่าที่พักรวม
                        </div>
                        <div class="col-md-9 text-left">
                            {{ booking.total_price }} บาท
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">

                        </div>
                        <div class="col-md-9">

                        </div>
                    </div>
                    
                </Card>
                <div class="text-left px-3">

                    <base-button type="primary" class="back-button" @click="$router.push('/bookingmanager')">กลับ</base-button>
                </div>
            </div>
            <div class="col-md-4">
                <img class="mb-3" src="images/hotel.jpg" width="100%">
                <img src="images/nba_bus.jpg" width="100%">
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { Booking } from "@/functions/bookingservice";
import { Card } from "@/components/index";
export default {

    setup() {
        const bookingservice = new Booking();
        return {
            bookingservice
        }
    },
    components: {
        Card
    },
    async mounted() {

        this.id = this.$route.params.id;
        console.log('id', this.id)
        await this.bookingservice.getBookingById(this.hotelId, this.id).then(result => {
            console.log(result)
            this.booking = result.data;
            this.loading = true;
        })
    },
    data() {
        return {
            loading:false,
            hotelId: "643e55439c48ebe52204a5a2",
            id: '',
            booking: null
        }
    },
    methods: {
        dateFormat(date){
            return new Date(date).toLocaleDateString();
        }
    }

}
</script>
<style scoped>
p{
    color: black;
}

.back-button{
    align-self: start;
}
</style>
