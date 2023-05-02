export class User {

    baseUrl = process.env.VUE_APP_API;
    token = localStorage.getItem('token');

    constructor(context){
        this.context = context;
    }

    async CreateUser(data){
        
       let user;
    const initdata = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credential: true,
      body: JSON.stringify(data),
    };
    await fetch(this.baseUrl + "signup", initdata)
      .then((response) => response.json())
      .then((result) => user = result)
      .catch((err) => user = err);

      return user;
    }

    //login
    async SignIn(data){
        let user;
        const initdata = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credential: true,
          body: JSON.stringify(data),
        };
        await fetch(this.baseUrl + "signin", initdata)
          .then((response) => response.json())
          .then((result) => user = result)
          .catch((err) => user = err);
    
          return user;
    }

    //Me
    async Me(){
      if(!this.token){
        return {status:false, message:'Not Authenticated'};
      }
      let user;
        const initdata = {
          method: "POST",
          headers: { 
            "Content-Type": "application/json" ,
            "token":this.token
          },
          credential: true,
        };
        await fetch(this.baseUrl + "users/me", initdata)
          .then((response) => response.json())
          .then((result) => user = result)
          .catch((err) => user = err);
    
          return user;
    }
}