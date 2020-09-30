import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private snackbar: MatSnackBar){}
  openSnackBar(message, action){
    let snackBarRef = this.snackbar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(()=>{
      console.log('The snackbar was dismissed')
    })
    snackBarRef.onAction().subscribe(()=>{
      console.log('The snackbar action was triggered')
    })
  }
  openCustomSnackBar(){
    this.snackbar.openFromComponent(CustomSnackbarComponent, {duration: 2000})
  }

}

@Component({
  selector: 'custom-snackbar',
  template: `<span style='color: orange'>Custom Snackbar</span>`
})
export class CustomSnackbarComponent{}