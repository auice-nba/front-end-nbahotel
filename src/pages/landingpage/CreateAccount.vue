<template>
    <div class="card text-left px-5 py-5 mt-3">
        <h2>สร้างบัญชีผู้ใช้</h2>
        <div class="row">
            <div class="col">

                <base-input v-model="user.firstname" type="text" label="ชื่อ"/>
            </div>
            <div class="col">
                <base-input v-model="user.lastname" type="text" label="นามสกุล"/>

            </div>
        </div>
        <base-input v-model="user.email" type="email" label="อีเมลล์"/>
        <base-input v-model="user.telephone" type="tel" label="เบอร์โทรศัทพ์"/>
        <base-input v-model="user.telephone_inviter" type="tel" label="เบอร์โทรศัทพ์ ผู้แนะนำ"/>
        <base-input v-model="user.password" :type="togglePassword()" label="รหัสผ่าน"/>
        <base-checkbox v-model="password_visible" >แสดงรหัสผ่าน</base-checkbox>
        <base-button class="mt-3" type="primary" @click="createUser">สร้าง</base-button>

        </div>
</template>
<script>
import {BaseInput} from "@/components/index";
import { User } from "@/functions/userservice";

export default {
    setup(){
        const userservice = new User();
        return {
            userservice
        }
    },
    components:{
        BaseInput
    },
    data(){
        return {
            user:{
                firstname:null,
                lastname:null,
                email:null,
                telephone:null,
                telephone_inviter:null,
                password:null,
                roles:"partner"
            },
            password_visible:false
        }
    },
    methods:{
        async createUser(){
            await this.userservice.CreateUser(this.user).then(result=>{
                if(result.status === true){
                    this.$router.push('/landingpage/confirm-otp');
                }
            })
        },
        togglePassword(){

            return this.password_visible?"text":"password";
        }
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