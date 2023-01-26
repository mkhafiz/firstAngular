import { Component } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
title= "Employee page";
// visible = true;

number1 = 12;
number2 = 20;

// Many options to set condition including below

// visible = (this.number1 > this.number2)? true:false ;
visible = this.ShowContent(this.number1 , this.number2);
color: any;
IsVisible = true;

// number can be swapped to 'any' if unsure
ShowContent(val1: number, val2:number) : boolean{
  if (val1 < val2) {
    return true;
  } else {
    return false
  }
}

myName: string = "COMWorks";

// instantiate to an empty array
Employee : Employee[] = [];

constructor() {

  // [] = outer array, {} = inner item
  this.Employee = [
    {
      Name: 'Ali',
      Age: 22,
      Gender: 'Male'
    }, {
      Name: 'Al',
      Age: 21,
      Gender: 'Female'
    }, {
      Name: 'Ava',
      Age: 23,
      Gender: 'Female'
    }
  ]
}

GetMoreEmployee() : void {
  this.Employee = [
    {
      Name: 'Ali',
      Age: 22,
      Gender: 'Male'
    }, {
      Name: 'Al',
      Age: 21,
      Gender: 'Female'
    }, {
      Name: 'Ava',
      Age: 23,
      Gender: 'Female'
    },{
      Name: 'Eli',
      Age: 32,
      Gender: 'Male'
    }, {
      Name: 'El',
      Age: 41,
      Gender: 'Female'
    }, {
      Name: 'Eva',
      Age: 53,
      Gender: 'Female'
    }
  ]
}

OnChange(arg:any) {
  this.IsVisible = arg;
}

SetColor(event: any) {
  this.color = event.target.value;
}

CheckAge(Age: number) {
  let val = Age < 18 ? 'Under 18': 'Above 18';

  switch(val) {
    case 'Under 18':
      return 'red';
    case 'Above 18':
      return 'green';
  }
  return ""; // return empty to ensure all code paths return a value
}

TrackByEmployeeName(index: number, employee: any) : string {
  return employee.Name;
}

GetCSS(isEven : any) {
  if (isEven) {
    return "color1"
  }else {
    return "color2"
  }
}

ShowSomeData() {
  alert("Hello World!")
}

}