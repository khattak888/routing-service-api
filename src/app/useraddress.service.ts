import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class UseraddressService {

  constructor() { }
  getUserAddress()
  {
    return{
      address:"Islamabad,Pakistan"
    }
  }
}