/* eslint-disable prettier/prettier */
export class Booking {
  context;

  baseUrl = process.env.VUE_APP_API;
  #token = localStorage.getItem('token');
  constructor(context) {
    this.context = context;
  }

  async getBooking(hotel_id) {
    var data;
    const initdata = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token:this.#token
        },
        credentials: 'include',
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
          token:this.#token
        },
        credentials: 'include',
      };

      await fetch(`${this.baseUrl}booking/${hotelId}/${id}`,initdata)
      .then(response => response.json())
      .then(result => data = {status:"ok",data:result})
      .catch(err=>data = {status:false,error:err})

      return data;
    }

    //accept booking
    async acceptBooking(hotelId,bookingId){
      var data;
      const dataupdate = {statusname:'จองแล้ว'};
      const initdata = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          token:this.#token
        },
        credentials: 'include',
        body:JSON.stringify(dataupdate)
      };

      await fetch(`${this.baseUrl}booking/accept/${hotelId}/${bookingId}`,initdata)
      .then(response => response.json())
      .then(result => data = {status:"ok",data:result})
      .catch(err=>data = {status:false,error:err})

      return data;
      
    }

    //verify checkin user
    async VerifyCheckInUser(userData){
      var data;
      const initdata = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token:this.#token
        },
        credentials: 'include',
        body:JSON.stringify(userData)
      };

      await fetch(`${this.baseUrl}checkin/verifycheckinuser`,initdata)
      .then(response => response.json())
      .then(result => data = {status:"ok",data:result})
      .catch(err=>data = {status:false,error:err})

      return data;
    }

    //confirm checkin with otp
    async ConfirmCheckInUser(userData){
      var data;
      const initdata = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token:this.#token
        },
        credentials: 'include',
        body:JSON.stringify(userData)
      };

      await fetch(`${this.baseUrl}checkin/confirm-otp`,initdata)
      .then(response => response.json())
      .then(result => data = result)
      .catch(err=> data = err)

      return data;
    }
  
}
