import { observable, action, makeObservable } from "mobx";
import AsyncStorage from '@react-native-async-storage/async-storage';

class Store {
   
    loggedIn=false;
    admin=false;
    


    constructor() {
        makeObservable(this, {
            loggedIn:observable,
            admin:observable,
            login:action,
            logout:action
        })
    }

    login(admin)
    {
        this.loggedIn = true;
        this.admin = !admin;
    }
    logout()
    {
        this.loggedIn = false;
    }


}


export default new Store();