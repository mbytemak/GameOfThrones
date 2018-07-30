import { Component, OnInit, OnDestroy } from '@angular/core';
import {GotHttpService} from "../got-http.service";

import {ActivatedRoute,Router} from '@angular/router';
import { NgOnChangesFeature } from '@angular/core/src/render3';
import { checkAndUpdateDirectiveDynamic } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit,OnDestroy {
  public details;
  public characters;   

  constructor(public gothttpservice:GotHttpService,private _route:ActivatedRoute,router:Router) { }

  ngOnInit() {
console.log("on init called");

    let bookId=this._route.snapshot.paramMap.get('url');
    console.log(bookId);

    



    this.gothttpservice.getDetails(bookId).subscribe(
      data=>{
        console.log("get book");
      console.log("console"+data);
      this.details=data;
       console.log(this.details);
      },
      error=>{
      console.log(error.errorMessage);
      }
      )

 


} 
ngOnDestroy(){
console.log("destroycall");


  

}

}
