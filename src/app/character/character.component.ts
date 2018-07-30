import { Component, OnInit } from '@angular/core';

import {GotHttpService} from "../got-http.service";

import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {


  allCharacters;

  constructor(public gothttpservice:GotHttpService,private _route:ActivatedRoute,router:Router) { }

  ngOnInit() {




console.log("on init");


this.gothttpservice.getAllCharacters().subscribe(
  data=>{
  console.log("console"+data);
  this.allCharacters=data;
  },
  error=>{
  console.log(error.errorMessage);
  }
  )



  }

}
