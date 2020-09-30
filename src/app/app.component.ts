import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(public dialog: MatDialog){}
  openDialog(){
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name:'ASDASD'}});
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog result: ${result}`)
    })
  }

}

