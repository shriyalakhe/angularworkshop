import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  amount=0;
  interest=0;
  tenure=0;
  emi=0;

  calculate_emi()
  {
    this.result=this.num1 + this.num2 ;
  }
}
