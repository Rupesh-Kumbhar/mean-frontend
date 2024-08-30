import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})

export class EmployeeComponent {
  employees = [
    {name : "n1" , position : "p1", dept : "d1" },
    {name : "n2" , position : "p2", dept : "d2" },
    {name : "n3" , position : "p3", dept : "d3" },
    {name : "n4" , position : "p4", dept : "d4" },
  ]

}
