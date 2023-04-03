<template>
  <div class="content">
    <div class="row">
      <div class="col-md-8">
        <edit-profile-form :model="model"> </edit-profile-form>
      </div>
      <div class="col-md-4">
        <user-card :user="user"></user-card>
      </div>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./Profile/EditProfileForm.vue";
import UserCard from "./Profile/UserCard.vue";

export default {
  components: {
    EditProfileForm,
    UserCard,
  },
  data() {
    return {
      model: {
        company: "บ้านรีวิวรีสอร์ท2",
        email: "mike@email.com",
        username: "michael23",
        firstName: "อุ๋ย",
        lastName: "บ้านน้ำใส",
        address: "บ้านน้ำใส",
        tumbon: "บ้านน้ำใส",
        amphure: "แสนใจดี",
        city: "เชียงใหม่",
        country: "ประเทศไทย",
        about: "รีสอร์ทริมน้ำใส สำหรับพักผ่อน",
      },
      user: {
        fullName: "อุ๋ย",
        title: "พนักงาน",
        description: `บริการห้องพักสำหรับพักผ่อนหย่อนใจ`,
      },
    };
  },
};
</script>

<style></style>
