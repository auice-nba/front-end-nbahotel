<template>
  <div class="content">
    <div class="row">
      <div class="col-8">
        <CreateRoomForm :model="model" />
      </div>
      <div class="col-4">
        <img class="mb-2" src="/images/hotel.jpg" />
        <img src="/images/nba_bus.jpg" />
      </div>
    </div>
  </div>
</template>
<script>
import CreateRoomForm from "./CreateRoom/CreateRoomForm.vue";

export default {
  components: {
    CreateRoomForm,
  },
  data() {
    return {
      model: {
        room_number: "A101",
      },
    };
  },
};
</script>

<style scoped></style>
