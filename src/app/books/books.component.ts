import { Component, OnInit } from '@angular/core';

import {GotHttpService} from "../got-http.service";

import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
public allbooks;
public booksshop;
  constructor(public gothttpservice:GotHttpService,private _route:ActivatedRoute,router:Router) { }

  ngOnInit() {
console.log('on inint in books ');


this.gothttpservice.getAllBooks().subscribe(
data=>{
console.log("console"+data);
this.allbooks=data;
},
error=>{
console.log(error.errorMessage);
}
)

}




}
