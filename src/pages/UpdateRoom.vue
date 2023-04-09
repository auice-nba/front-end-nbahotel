<!-- eslint-disable prettier/prettier -->

<template>
    <div class="content">
        <div class="row">
            <div v-if="loading" class="col-12">
                <h2 class="title">แก้ไขรายละเอียดห้อง</h2>
                <div class="content">
                    <div class="row">
                        <div class="col-6">
                            <div class="row image-gallery">
                                <div class=" col-12 main">
                                    <div class="image-edit">

                                        <img class="image-main mb-2"
                                            :src="`https://drive.google.com/uc?export=view&id=${active_image}`" />
                                        <div class="delete-btn">

                                            <drop-down tag="div">
                                                <button aria-label="edit" data-toggle="dropdown"
                                                    class="dropdown-toggle btn-rotate btn btn-default mr-3">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li class="dropdown-item">
                                                        <label class="change-image">
                                                            เพิ่มรูป
                                                            <input type="file" multiple accept="image/*" style="display:none" name="file-upload" @change="addImage"/>
                                                        </label>
                                                    </li>
                                                    <li class="dropdown-item">
                                                        <label class="change-image">เปลี่ยนรูป

                                                            <input  type="file" accept="image/*" style="display:none" name="file-update" @change="changeImage"/>
                                                        </label>
                                                    </li>
                                                    <li  class="dropdown-item" @click="deleteImage">ลบรูป</li>
                                                </ul>
                                            </drop-down>
                                        </div>
                                        <div v-if="uploading" class="loader">
                                            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 thumb">

                                    <div class="mb-2 mr-2" v-for="(image, idx) in r.imageURl" :key="idx">
                                        <img class="image-thumb"
                                            :src="`https://drive.google.com/uc?export=view&id=${image}`"
                                            @click="selectImage(idx)">
                                    </div>
                                </div>
                            </div>
                            <Card class="room-feature mt-3">

                                <div class="row">
                                    <div v-if="r.furniture.length > 0" class="col-6">
                                        <h4>เฟอร์นิเจอร์</h4>
                                        <div v-for="(fur, index) in r.furniture" :key="index" class="row ml-2">

                                            <p><i class="tim-icons icon-check-2 mr-3"></i>{{ fur.name }}</p>

                                        </div>
                                    </div>
                                    <div v-if="r.amenities.length > 0" class="col-6">
                                        <h4>เครื่องอำนวยความสะดวก</h4>
                                        <div v-for="(amen, index) in r.amenities" :key="index">
                                            <p><i class="tim-icons icon-check-2 mr-3"></i>{{ amen.name }}</p>
                                        </div>
                                    </div>
                                    <div v-if="r.room_service.length > 0" class="col-6">
                                        <h4>รูมเซอร์วิส</h4>
                                        <div v-for="(service, index) in r.room_service" :key="index">
                                            <p><i class="tim-icons icon-check-2 mr-3"></i>{{ service.description }}</p>
                                        </div>
                                    </div>
                                    <div v-if="r.entertainment.length > 0" class="col-6">
                                        <h4>สิ่งบันเทิง</h4>
                                        <div v-for="(ent, index) in r.entertainment" :key="index">
                                            <p><i class="tim-icons icon-check-2 mr-3"></i>{{ ent.name }}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div class="col-6">
                            <Card>

                                <div class="row">
                                    <div class="col-6">

                                        <p><span class="material-symbols-outlined">
                                                meeting_room
                                            </span>เลขที่ห้อง</p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.room_number }}
                                    </div>
                                    <div class="col-6">

                                        <p><span class="material-symbols-outlined">
                                                layers
                                            </span>ประเภท</p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.type.name_th }}
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                bed
                                            </span>เตียง </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.bed_type.name }}
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                bathtub
                                            </span>ลักษณะห้องน้ำ </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.bath_type.name }}
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                ac_unit
                                            </span>เครื่องปรับอากาศ </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.aircondition.name }}
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                smoke_free
                                            </span>เขตปลอดบุหรี่ </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.smoke_type }}
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                magic_tether
                                            </span>อินเตอร์เน็ตไร้สาย </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.wifi }}
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                shield_person
                                            </span>ระบบรักษาความปลอดภัย </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.security.name }}
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                filter_hdr
                                            </span>วิวและบรรยากาศ </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.view_type.name }}
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                fit_width
                                            </span>ขนาด </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.size }} ตรม.
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                diversity_1
                                            </span>จำนวนผู้เข้าพักสูงสุด </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.max_person }} คน
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                assistant
                                            </span>รายละเอียดเพิ่มเติม </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.detail }}
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                sell
                                            </span>ราคา </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.price }} บาท
                                    </div>
                                    <div class="col-6">
                                        <p><span class="material-symbols-outlined">
                                                add_task
                                            </span>สถาณะ </p>
                                    </div>
                                    <div class="col-6 d">
                                        {{ r.status.name }}
                                    </div>
                                </div>
                                <base-button type="default" class="my-5"
                                    @click="$router.push('/roommanager')">กลับหน้าแรก</base-button>
                                <base-button type="primary" class="my-5"
                                    @click="$router.push('/roommanager')">แก้ไขรายละเอียดห้อง</base-button>
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
import  resizeImage from "@/functions/resizeimage"

export default {
    setup() {
        const room = new Room();

        return {
            room,resizeImage
        }
    },
    components: {
        Card
    },
    async mounted() {
        this.id = this.$route.params.id;
        await this.room.getRoomById(this.id).then(result => {
            if (result) {

                this.r = result;
                console.log(this.r);
                this.loading = true;
                this.active_image = this.r.imageURl[0];

            }
        });

        //get room type
        this.room.getRoomType().then(result => {
            this.roomType = result;
        });

        await this.room.getBedType().then((result) => {
            this.bedType = result;
        })

        await this.room.getAirconditionType().then((result) => {
            this.airType = result;
        })

        await this.room.getBathType().then((result) => {
            this.bathType = result;
        })

        await this.room.getViewType().then((result) => {
            this.viewType = result;
        
        })

        await this.room.getRoomStatusType().then((result) => {
            this.statusType = result;
        })

    },
    methods: {
        selectImage(index) {
            this.active_image = this.r.imageURl[index];

        },
        async addImage(event){
            this.uploading = true;
            const images = event.target.files;
                   const formData = new FormData();
                   for(let i=0;i<images.length;i++){
                       
                       formData.append('imgCollection',images[i]);
                    }
                    
                    await this.room.uploadRoomPicture(this.id,formData).then(async (result)=>{
                        
                        if(result.message ==="สร้างรูปภาพเสร็จเเล้ว"){
                            //setimage
                            
                            console.log(result);
                            result.result.forEach(el=>{
                                this.r.imageURl.push(el);
                            });
                            
                            this.active_image = result.result[0];
                            this.uploading = false;
                        }
                    })
        },
        async changeImage(event){
            this.uploading = true;
            const image=event.target.files[0];
            const formData = new FormData();
            formData.append('imgCollection',image)

           await this.room.ChangeImage(this.id,this.active_image,formData).then((result)=>{
            
                if(result.load.message ==="สร้างรูปภาพเสร็จเเล้ว"){
                    this.r.imageURl = result.data;
                    this.active_image = result.load.result;
                    this.uploading = false;
                }
            })
        },
       async deleteImage(){
        this.uploading = true;
            await this.room.deleteRoomPicture(this.id,this.active_image).then(result=>{

                if(result){
                    this.r.imageURl=result;
                    this.active_image=this.r.imageURl[0];
                    this.uploading = false;
                }
            })
        }
    },
    data() {
        return {

            id: "",
            loading: false,
            uploading:false,
            r: [],
            active_image: '',
            roomType: null,
            bedType: null,
            bathType: null,
            airType: null,
            viewType: null,
            furnitureType: null,
            amenitiesType: null,
            roomserviceType: null,
            entertainmentType: null,
            statusType:null,
            dataUpdate:{
                detail:null,
                price: null,
                unit:null, 
                size : null, 
                bed_type: null,
                aircondition:null, 
                max_person:null, 
                children : null, 
                view_type : null,
                bath_type : null,
                smoke_type : null, 
                furniture :null, 
                room_service :null, 
                amenities : null,
                wifi : null, 
                entertainment :null,
                security : null,
                promotions : null,
                status: null
            }
        }
    }
}
</script>

<style lang="scss" scoped>
h4 {
    color: black;
    text-align: start;
    margin-top: 1rem;
}

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
    height: auto;
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

.room-feature {
    border: solid 1px #acacac;
}

/* edit detail */

.pencil:hover {
    cursor: pointer;
}

.delete-btn {
    position: absolute;
    background-color: transparent;
    border: none;
    color: #ffffff;
    top: 1rem;
    right: 0;
}

.delete-btn:hover {
    cursor: pointer;
    background-color: transparent;
}

.dropdown-item:hover {
    cursor: pointer;
    background-color: #acacac;
    color: #ffffff;
}
.change-image:hover{
    cursor: pointer;
}
.loader{
    position:absolute;
    top:calc(50% - 40px);
    right:calc(50% - 40px);
    z-index: 99;
}

/* css loader */
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

</style>