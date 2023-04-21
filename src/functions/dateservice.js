/* eslint-disable prettier/prettier */
export class DateService {
    context;
    // baseUrl = "https://nba-backend-6jk5.onrender.com/";
    baseUrl = "http://localhost:3000/";
  
  
    constructor(context) {
      this.context = context;
    }

    async getToday(){
        var data = null;
        const initdata = {
            method: "GET",
            headers: {
              "Content-Type": "text/html; charset=utf-8",
            },
            Credential:"includes"
          };
      await fetch(`${this.baseUrl}date`,initdata)
      .then(response => response.json())
      .then(result => data = {status:"ok",date:result})
      .catch(err => data = {status:false,error:err})

      return data;
    }

}