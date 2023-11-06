import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  a : number = 0;
  b : number = 0;
  sum : number = 0;

  sumNum(){
  this.sum = (this.a + this.b)
  }
}
