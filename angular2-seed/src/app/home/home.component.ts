import {Component} from '@angular/core';
import {Employee} from "../models/employee.model";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ['English' , 'Spanish', 'Other'];
  model = new Employee('Ahmed','Halima',true,'1099','Spanish');

  // not used function
  firstNameToUpperCase(value: string): void {
    if(value.length > 0)
      this.model.firstName = value.toLocaleUpperCase();
  }

}
