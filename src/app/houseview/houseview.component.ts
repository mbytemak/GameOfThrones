import { Component, OnInit } from '@angular/core';
import {GotHttpService} from "../got-http.service";

import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-houseview',
  templateUrl: './houseview.component.html',
  styleUrls: ['./houseview.component.css']
})
export class HouseviewComponent implements OnInit {
public houses;
  constructor(

    public gothttpservice:GotHttpService,private _route:ActivatedRoute,router:Router

  ) { }

  ngOnInit() {



  
    let houseId=this._route.snapshot.paramMap.get('url');
    console.log(houseId);

    
      this.gothttpservice.getSingleHouse(houseId).subscribe(
  
  
        data=>{
          console.log("get house");
          this.houses=data ;
           console.log(this.houses);
          },
          error=>{
          console.log(error.errorMessage);
          }
      )




  }

}
