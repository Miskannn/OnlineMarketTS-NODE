import { makeAutoObservable } from "mobx";

 class User{
    constructor(){
        makeAutoObservable(this)
    }
   //states
    isAuth: boolean = true;
    user: object = {};
    
  //setters
    setIsAuth(isAuth: boolean): void{
        this.isAuth = isAuth;
    }
    setUser(user: object): void{
        this.user = user;
    }
    
    
    
  //getters
    get getIsAuth(): boolean{
        return this.isAuth;
    }
    get getUser(): object{
        return this.user;
    }
    
}


export default new User();