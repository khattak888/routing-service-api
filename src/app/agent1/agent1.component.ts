import { Component, OnInit } from '@angular/core';
import { BusbookingService } from '../busbooking.service';

@Component({
  selector: 'app-agent1',
  templateUrl: './agent1.component.html',
  styleUrls: ['./agent1.component.css']
})
export class Agent1Component implements OnInit {
 ticket1:number[];
  constructor(private busbookingservice:BusbookingService) {
this.ticket1 = this.busbookingservice.getTicket();
   }

  ngOnInit(): void {
    this.ticket1 = this.busbookingservice.getTicket();
  }

  bookTicket1(val:any){
    this.busbookingservice.bookTicket(val);
    this.ticket1 = this.busbookingservice.getTicket();
  }

}
