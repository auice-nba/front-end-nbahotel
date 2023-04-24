/* eslint-disable prettier/prettier */
export class Booking {
  context;

  baseUrl = process.env.VUE_APP_API;

  constructor(context) {
    this.context = context;
  }

  async getBooking(hotel_id) {
    var data;
    const initdata = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        Credential:"includes"
      };

      await fetch(`${this.baseUrl}booking/${hotel_id}`,initdata)
      .then(response => response.json())
      .then(result => data = { status:"ok",data:result})
      .catch(err => data = {status:false,error:err});

      return data;
    }

  //get Booking by id
  async getBookingById(hotelId,id) {
    var data;
    const initdata = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        Credential:"includes"
      };

      await fetch(`${this.baseUrl}booking/${hotelId}/${id}`,initdata)
      .then(response => response.json())
      .then(result => data = {status:"ok",data:result})
      .catch(err=>data = {status:false,error:err})

      return data;
    }

  
}
