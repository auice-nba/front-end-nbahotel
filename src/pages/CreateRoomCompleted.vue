<!-- eslint-disable prettier/prettier -->

<template>
    <div class="content">
        <div class="row">
            <div v-if="loading" class="col-12">
                <h2 class="title">สร้างห้องเสร็จแล้ว</h2>
                <div class="content">
                    <div class="row">
                        <div class="col-6">
                            <div class="row image-gallery">
                                <div class=" col-12 main">
                                    <img class="image-main mb-2"
                                        :src="`https://drive.google.com/uc?export=view&id=${active_image}`" />
                                </div>
                                <div class="col-12 thumb">

                                    <div class="mb-2 mr-2" v-for="(image, index) in r.imageURl" :key="index + 1">

                                        <img class="image-thumb"
                                            :src="`https://drive.google.com/uc?export=view&id=${image}`"
                                            @click="selectImage(index)">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <Card>

                                <div class="row">
                                    <div class="col-4">

                                        <p><span class="material-symbols-outlined">
                                                meeting_room
                                            </span>เลขที่ห้อง</p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.room_number }}
                                    </div>
                                    <div class="col-4">

                                        <p><span class="material-symbols-outlined">
                                                layers
                                            </span>ประเภท</p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.type.name_th }}
                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                bed
                                            </span>เตียง </p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.bed_type.name }}
                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                bathtub
                                            </span>ลักษณะห้องน้ำ </p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.bath_type.name }}
                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                ac_unit
                                            </span>เครื่องปรับอากาศ </p>
                                    </div>
                                    <div class="col-8 d">

                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                smoke_free
                                            </span>เขตปลอดบุหรี่ </p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.smoke_type }}
                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                magic_tether
                                            </span>อินเตอร์เน็ตไร้สาย </p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.wifi }}
                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                shield_person
                                            </span>ระบบรักษาความปลอดภัย </p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.security }}
                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                filter_hdr
                                            </span>วิวและบรรยากาศ </p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.view_type.name }}
                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                fit_width
                                            </span>ขนาด </p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.size }} ตรม.
                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                diversity_1
                                            </span>จำนวนผู้เข้าพักสูงสุด </p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.max_person }} คน
                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                assistant
                                            </span>รายละเอียดเพิ่มเติม </p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.detail }}
                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                sell
                                            </span>ราคา </p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.price }} บาท
                                    </div>
                                    <div class="col-4">
                                        <p><span class="material-symbols-outlined">
                                                add_task
                                            </span>สถาณะ </p>
                                    </div>
                                    <div class="col-8 d">
                                        {{ r.status.name }}
                                    </div>
                                </div>
                                <base-button type="primary" class="my-5">กลับหน้าแรก</base-button>
                            </Card>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { Room } from "@/functions/roomservice";
import { Card } from "@/components/index";

export default {
    setup() {
        const room = new Room();
        return {
            room
        }
    },
    components: {
        Card
    },
    mounted() {
        this.id = this.$route.params.id;
        this.room.getRoomById(this.id).then(result => {
            if (result) {

                this.r = result;
                console.log(this.r);
                this.loading = true;
                this.active_image = this.r.imageURl[0];

            }
        });

    },
    methods: {
        selectImage(index) {
            this.active_image = this.r.imageURl[index];

        }
    },
    data() {
        return {

            id: "",
            loading: false,
            r: [],
            active_image: '',
        }
    }
}
</script>

<style scoped>
span {
    margin-right: 1rem;
}

.image-gallery {
    margin: 0;
    padding: 0;
}

.title {
    color: rgb(0, 101, 160);
    text-align: start;
}

p {
    color: black;
    text-align: start;
}

.main {
    margin: 0;
    padding: 0;
}

.image-main {
    width: 100%;
    aspect-ratio: 1;
}

.thumb {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
}

.thumb::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 0;
    background-color: #f1f1f1;
}

.thumb::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background-color: rgb(255, 255, 255);
}

.thumb::-webkit-scrollbar-thumb {
    border-radius: 0;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #00a2ff;
}

.image-thumb {

    min-width: 4rem;
    max-width: 7rem;

}

.image-thumb:hover {
    cursor: pointer;
    border: solid 1px #fdfdfd;
}

.d {
    text-align: start;
}
</style>