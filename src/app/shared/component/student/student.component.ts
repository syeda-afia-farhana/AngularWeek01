import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../interfaces';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() data: Student = { };
  constructor() { }

  ngOnInit(): void {
  }

}
