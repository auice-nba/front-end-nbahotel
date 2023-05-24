export class Report {
    context;
  
    baseUrl = process.env.VUE_APP_API;
    #token = localStorage.getItem('token');
    constructor(context) {
      this.context = context;
    }

    //get booking report
    //get Booking by id
  async getBookingReport(hotelId) {
    var data;
    const initdata = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token:this.#token
        },
        credentials: 'include',
      };

      await fetch(`${this.baseUrl}report/${hotelId}`,initdata)
      .then(response =>{
        if(response.status === 200){
            return response.json();
        }
        else{
            data = {status:false, data:response.json()}
           
        }})
      .then(result => data = {status:"ok",data:result})
      .catch(err=>data = {status:false,error:err})

      return data;
    }

}