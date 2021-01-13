import {Component, Input, OnInit} from '@angular/core';
import {Student, Teacher} from '../../interfaces';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input() info: Teacher = { };
  constructor() { }

  ngOnInit(): void {
  }

}
