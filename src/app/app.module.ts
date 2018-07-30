import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

import { GotHttpService } from 'src/app/got-http.service';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { CharacterComponent } from './character/character.component';
import { HousesComponent } from './houses/houses.component';
import { CommonModule } from '@angular/common';
import { CharviewComponent } from './charview/charview.component';
import { HouseviewComponent } from './houseview/houseview.component';
import { HomeComponent } from './home/home.component'; 


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ViewComponent,
    CharacterComponent,
    HousesComponent,
    CharviewComponent,
    HouseviewComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,CommonModule,
    RouterModule.forRoot([

{path:'books',component:BooksComponent},
{path:'books/:url',component:ViewComponent},
{path:'characters',component:CharacterComponent},
{path:'houses',component:HousesComponent},
{path:'', component:HomeComponent, pathMatch: 'full' },
{path:'characters/:url',component:CharviewComponent},
{path:'houses/:url',component:HouseviewComponent}


    ]),HttpClientModule
  ],
  providers: [GotHttpService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
