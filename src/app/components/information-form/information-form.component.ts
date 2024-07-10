import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormDatatype } from 'src/app/interface/form-data';

@Component({
  selector: 'information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css'],
})
export class InformationFormComponent {
  formTitle = 'Fill the form';
  name: string = 'John Wick';

  employeeData: FormDatatype = {
    name: 'Falano',
    address: 'Newroad',
    age: 19,
    phone: 98239128373,
  };

  onNameChange(event: any) {
    this.name = event.target.value;
  }

  submitData() {
    console.log('This button was clicked');
  }
}

// employeeData: FormDatatype[] = [
//   { name: 'Falano', address: 'Newroad', age: 19, phone: 98239128373 },
//   { name: 'Falano2', address: 'Newroad2', age: 20, phone: 98087394872 },
//   { name: 'Falano3', address: 'Newroad3', age: 21, phone: 91937367183 },
// ];
