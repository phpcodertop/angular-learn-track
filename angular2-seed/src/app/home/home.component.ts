import {Component} from '@angular/core';
import {Employee} from "../models/employee.model";
import {FormPoster} from "../services/form-poster.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ['English' , 'Spanish', 'Other'];
  model = new Employee('Ahmed','Halima',true,'1099','default');
  hasPrimaryLanguageError = false;


  constructor(private formPoster: FormPoster){
  }

  submitEmployeeForm(form: NgForm){
    // validate form
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError)
      return;
    this.formPoster.postEmployeeForm(this.model).subscribe(
      data => console.log('Success: ', data),
      err => console.log('Error : ', err)
    );
  }

  validatePrimaryLanguage(event){
    if (this.model.primaryLanguage === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }

  // not used function
  firstNameToUpperCase(value: string): void {
    if(value.length > 0)
      this.model.firstName = value.toLocaleUpperCase();
  }

}
