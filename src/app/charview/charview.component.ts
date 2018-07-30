import { Component, OnInit } from '@angular/core';
import {GotHttpService} from "../got-http.service";

import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-charview',
  templateUrl: './charview.component.html',
  styleUrls: ['./charview.component.css']
})
export class CharviewComponent implements OnInit {
public characters;
  constructor(public gothttpservice:GotHttpService,private _route:ActivatedRoute,router:Router




  ) { }

  ngOnInit() {



  
    let charId=this._route.snapshot.paramMap.get('url');
    console.log(charId);
      this.gothttpservice.getSingleCharacter(charId).subscribe(
  
  data=>{
          console.log("get char");
          this.characters=data;
           console.log(this.characters);
          },
          error=>{
          console.log(error.errorMessage);
          }
      )


  }

}
