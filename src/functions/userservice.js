export class User {

    baseUrl = process.env.VUE_APP_API;

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
}