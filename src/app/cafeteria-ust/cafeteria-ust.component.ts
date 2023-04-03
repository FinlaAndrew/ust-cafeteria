import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CafeteriaUstService } from '../cafeteria-ust.service';
import { User } from '../User';

@Component({
  selector: 'app-cafeteria-ust',
  templateUrl: './cafeteria-ust.component.html',
  styleUrls: ['./cafeteria-ust.component.css']
})
export class CafeteriaUstComponent implements OnInit {
  user:User=new User("","",0,"");
  message: any;
    constructor(private service:CafeteriaUstService){
      
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(){

  }
  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe(data=>this.message=data);
  }

}
