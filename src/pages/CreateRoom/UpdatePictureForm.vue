<!-- eslint-disable prettier/prettier -->
<template>
  <Card>
    <div class="contents">
      <h3>เพิ่มรูปภาพของห้อง </h3>
      <div v-if="preview.length > 0">
        <div class="row">

          <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 px-3" v-for="(srcUrl, index) in preview" :key="index">
            <div class="img-preview">
              <img :src="srcUrl" width="100%" />
              <div :id="'img-preview'+index" class="delete-preview">
                <div @click="removePreview(index)">
                  <i class="tim-icons icon-simple-remove"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div class="row">

          <div class="col-8">
            <div class="my-3" v-if="preview.length == 0">
              <base-input>
                <div class="image-input">เลือกรูปภาพ</div>
                <input type="file" accept="image/png, image/jpeg" multiple @change="selectImage" />
              </base-input>
              <p><i><span class="indent">หมายเหตุ</span></i></p>
              <p>กดที่ช่องเลือกรูปภาพเพื่อเพิ่มรูปของห้องพัก</p>
            </div>
          </div>
        </div>
        <div v-if="preview.length > 0">
          <div class="flex">
            <div class="d-inline">

              <base-input>
              <input type="file" accept="image/png, image/jpeg" multiple @change="selectImage" />
              <div class="btn bg-secondary w-100">เพิ่มรูปภาพ</div>
            </base-input>
          </div>
          <div class="d-inline">

            <base-button link label="เลือกใหม่" @click.native="resetImage">เลือกใหม่</base-button>
          </div>
          </div>
        </div>
          <base-button class="mt-3 mr-3" @click.native="back">ย้อนกลับ</base-button>
          <base-button v-if="image.length>0" class="mt-3" type="primary" @click.native="uploadPicture">อัพโหลดรูป</base-button>
      </form>
    </div>
  </Card>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { Card, BaseInput } from "@/components/index";
import { Room } from "@/functions/roomservice";

export default {
  setup(){
    const room = new Room();
    return {
      room
    }
  },
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
  mounted(){
   this.id = this.$route.params.id;
  },
  methods: {
    selectImage(event) {
      let input = event.target;
      let count = input.files.length;
      let index = 0;

      this.original_image=event.target.files;

      if (input.files) {
        while (count--) {
          
          console.log('index',index);
          const imageType =input.files[index].type;
          var reader = new FileReader();
          reader.onload = (e) => {
          //  this.preview.push(e.target.result);
             //resize image
          const image = new Image();
          image.src = e.target.result;
   
          image.addEventListener('load',() =>{
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            const maxDimension = 650;
            let width = image.width;
            let height = image.height;

            if(width > height && width > maxDimension){
              height *= maxDimension/width;
              width = maxDimension;
            }
            else if (height > maxDimension){
              width *= maxDimension/width;
              height = maxDimension;
            }

            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(image,0,0,width,height);
            const resizeImage = canvas.toDataURL(e.target.result.type);

            this.preview.push(resizeImage);
            const trailing = imageType.toString().replace("image/","")
        
            console.log(trailing);
            const newName = (Math.random() + 1).toString(36).substring(7)+"."+trailing;
            const newFile = new File([
              new Blob([resizeImage],{type:imageType})
            ],newName,{type:imageType})
            this.image.push(newFile);
          })

            
          };
          reader.readAsDataURL(input.files[index]);
            
          index++;
        }
      }
    },
    resetImage() {
      (this.image = []), (this.preview = []);
    },
    removePreview(index){
      this.preview.splice(index,1);
      this.image.splice(index,1);
    },
    back(){
      this.$router.push(`/addroomfeature/${this.id}`)
    },
    async uploadPicture(){

      const formData = new FormData();
      console.log(this.image);
      for(let i = 0 ; i < this.image.length ; i++){
        formData.append('imgCollection',this.original_image[i],this.original_image[i].name);
      }

      await this.room.uploadRoomPicture(this.id,formData).then(result=>{
        console.log(result);
        if(result.message === "สร้างรูปภาพเสร็จเเล้ว"){
          this.$router.push(`/createroomcompleted/${this.id}`);
        }

      })
    }

  },
  data() {
    return {
      id:'',
      url: [],
      preview: [],
      original_image:[],
      image: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.contents {
  min-height: 90vh;
  text-align: start;
  padding: 1rem;
}
.image-input {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1;
  max-width: 450px;
  background-color: aquamarine;
}

input:hover{
  cursor: pointer;
}
.indent{
  font-weight: 600;
}
.img-preview{
  position:relative;
}

.delete-preview{
  position:absolute;
  display:none;
  color:rgb(238, 238, 238);
  top:0.5rem;
  right:1rem;
}

.img-preview:hover{
  .delete-preview{

    display:block;
    z-index: 99;
  }
  .delete-preview:hover{
    cursor: pointer;
  }

}

</style>
