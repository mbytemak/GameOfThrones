import { Injectable } from '@angular/core';

import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
//import {Observable}  from "rxjs/Observable";
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class GotHttpService {
  



  public baseUrl='https://anapioficeandfire.com/api'

  constructor(private http: HttpClient) { }





  public getAllBooks():any{




    let myBooks=this.http.get(this.baseUrl+'/books');

    return myBooks;
  }
public getDetails(bookId){

let details=this.http.get(bookId)

return details;

}

public getAllCharacters():any{




  let myCharacter=this.http.get(this.baseUrl+'/characters');

  return myCharacter;
}

public getSingleCharacter(charId):any{ 

let singleCharacter=this.http.get(charId)
  
return singleCharacter;
  
}


public getAllHouses():any{


let allHouses =this.http.get(this.baseUrl+'/houses');

return allHouses;

}



public getSingleHouse(houseId):any{



  let houseDetails=this.http.get(houseId);

  return houseDetails;
}

}
