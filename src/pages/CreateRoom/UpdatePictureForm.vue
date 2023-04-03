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
          <base-button v-if="image.length>0" class="mt-3" type="primary" @click.native="$router.push('/addroomfeature')">อัพโหลดรูป</base-button>
      </form>
    </div>
  </Card>
</template>
<!-- eslint-disable prettier/prettier -->
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
  methods: {
    selectImage(e) {
      let input = e.target;
      let count = input.files.length;
      let index = 0;

      if (input.files) {
        while (count--) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview.push(e.target.result);
          };
          this.image.push(input.files[index]);
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
    }
  },
  data() {
    return {
      id:'',
      url: [],
      preview: [],
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
