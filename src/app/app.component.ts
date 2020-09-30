import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  minDate = new Date();
  maxDate = new Date(2020, 10, 30)

  dateFilter= date =>{
    const day = date.getDay();
    return day !== 0 && day !== 6
  }
}
