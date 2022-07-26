import { Injectable } from '@angular/core';
import { UseraddressService } from './useraddress.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UserdataService {
  userAddress:string='';

  constructor(private useraddressservice: UseraddressService) {
    this.userAddress = this.useraddressservice.getUserAddress().address
   }
  getUserData(){
    return{
      name:"bilal",
      email:"bilal@gmail.com",
      mobileno:878978656,
      address:this.userAddress
    }
  }
}
