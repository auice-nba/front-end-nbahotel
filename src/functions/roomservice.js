/* eslint-disable prettier/prettier */
export class Room {

  context;
  // baseUrl = "https://nba-backend-6jk5.onrender.com/";
  baseUrl = "http://localhost:3000/";

  constructor(context) {
    this.data = context;
  }

  async createRoom(data) {
    let room;
    const initdata = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credential: true,
      body: JSON.stringify(data),
    };
    await fetch(this.baseUrl + "room", initdata)
      .then((response) => response.json())
      .then((result) => room = result)
      .catch((err) => room = err);

      return room;
  }
  //get room by id;
  async getRoomById(id){
    let room;
    const initdata = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credential: true,
    }
    await fetch(this.baseUrl + "room/"+id, initdata)
    .then((response) => room = response.json())
    .then((result) => room = result)
    .then((err)=>room=err);

    return room;
  }

  //update room by id

  async updateRoom(id,data){
   
    let room;

    const initdata = {
      method:"PATCH",
      headers: { "Content-Type": "application/json" },
      credential: true,
      body: JSON.stringify(data),
      redirect:'follow'
    }
    await fetch(`${this.baseUrl}room/${id}/update`, initdata)
      .then((response) => response.json())
      .then((result) => room = result)
      .catch((err) => room = err);

      return room;
  }

  //get all room by hotel id <= wait create api
  async getRoomByHotelId(id){
    let room;
      const initdata = {
        method:"GET",
        headers: { "Content-Type": "application/json" },
        credential: true,
      }
    console.log(id,initdata);
    return room;
  }


  //get all room Types
  async getRoomType(){
    let data;
    const initdata = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credential: true,
    };
    await fetch(this.baseUrl + "room/type",initdata)
      .then((response) => response.json())
      .then(async (result) => data =result )
      .catch((err) =>{
        data = err
      });
      return data;

  }

   //get all room Bed Types
   async getBedType(){
    let data;
    const initdata = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credential: true,
    };
    await fetch(this.baseUrl + "room/bedtype",initdata)
      .then((response) => response.json())
      .then((result) => data=result)
      .catch((err) => data=err);

      return data;
  }

  //get all room Bath Types
  async getBathType(){
    let data;
    const initdata = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credential: true,
    };
    await fetch(this.baseUrl + "room/bathtype",initdata)
      .then((response) => response.json())
      .then((result) => data=result)
      .catch((err) => data=err);

      return data;
  }

  //get all room furniture
  async getFurnitureType(){
    let data;
    const initdata = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credential: true,
    };
    await fetch(this.baseUrl + "room/furnituretype",initdata)
      .then((response) => response.json())
      .then((result) => data=result)
      .catch((err) => data=err);

      return data;
  }

  //get all room amenities
  async getAmenitiesType(){
    let data;
    const initdata = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credential: true,
    };
    await fetch(this.baseUrl + "room/amenities",initdata)
      .then((response) => response.json())
      .then((result) => data=result)
      .catch((err) => data=err);

      return data;
  }

  //get all room entertainment
  async getEntertainmentType(){
    let data;
    const initdata = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credential: true,
    };
    await fetch(this.baseUrl + "room/entertainment",initdata)
      .then((response) => response.json())
      .then((result) => data=result)
      .catch((err) => data=err);

      return data;
  }

  //get all room entertainment
  async getRoomServiceType(){
    let data;
    const initdata = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credential: true,
    };
    await fetch(this.baseUrl + "room/service",initdata)
      .then((response) => response.json())
      .then((result) => data=result)
      .catch((err) => data=err);

      return data;
  }

  //get all room status
  async getRoomStatusType(){
    let data;
    const initdata = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credential: true,
    };
    await fetch(this.baseUrl + "room/status",initdata)
      .then((response) => response.json())
      .then((result) => data=result)
      .catch((err) => data=err);

      return data;
  }

   //get all room view
   async getViewType(){
    let data;
    const initdata = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credential: true,
    };
    await fetch(this.baseUrl + "room/view",initdata)
      .then((response) => response.json())
      .then((result) => data=result)
      .catch((err) => data=err);

      return data;
  }

  //upload room picture
  async uploadRoomPicture(id,formData){

    let room;
    const initdata ={
      method:"POST",
      headers: {
      },
      credential:"include",
      body:formData,
      redirect:'follow'
    }

   await fetch(`${this.baseUrl}room/${id}/picture`,initdata)
    .then((response)=>response.json())
    .then((result)=>room=result)
    .catch((err)=>room=err);

    return room;
  }
}
