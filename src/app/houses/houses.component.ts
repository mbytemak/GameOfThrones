import { Component, OnInit } from '@angular/core';

import {GotHttpService} from "../got-http.service";

import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
public houses;
  constructor(public gothttpservice:GotHttpService,private _route:ActivatedRoute,router:Router) { }

  ngOnInit() {

    console.log("on init");


    this.gothttpservice.getAllHouses().subscribe(
      data=>{
      console.log("console"+data);
      this.houses=data;
      },
      error=>{
      console.log(error.errorMessage);
      }
      )

  }

}
