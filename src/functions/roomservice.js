// import axios from "axios";
export class Room {
  context;
  baseUrl = "http://localhost:3200/";
  constructor(context) {
    this.data = context;
  }

  async createRoom(data) {
    const initdata = {
      method: "POST",
      body: JSON.stringify(data),
    };
    await fetch(this.baseUrl + "room", initdata);
  }
}
