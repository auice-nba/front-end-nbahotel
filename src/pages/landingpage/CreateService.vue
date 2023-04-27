<template>
    <div class="card text-left px-5 py-5 mt-3">
        <h2>สร้างบริการของท่าน</h2>
        <base-input label="บริการ">
        <select class="form-control">
            <option selected>บริการห้องพัก</option>
        </select>
    
    </base-input>
    <router-view/>
        
       

        </div>
</template>
<script>
import {BaseInput} from "@/components/index"
export default {
    components:{
        BaseInput
    },
    methods:{
       
    }
}
</script>

<style scoped>
.card{
    display: flex;
    width: 100%;
    max-width: 450px;
    justify-content: center;
}

</style>