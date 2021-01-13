import { Component, OnInit } from '@angular/core';
import {Student, Teacher} from '../../shared/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public student1: Student = {studentName: 'Anique', count: 1, subject: 'English', body: 'Great at English. Always does better in the class.Advance Level of Knowledge'};
  public student2: Student = {studentName: 'Anita', count: 2, subject: 'Math', body: 'Great at Math. Always does better in the class.She is currently trying to be superior'};
  public student3: Student = {studentName: 'Rosemary', count: 1, subject: 'Science', body: 'Science. She always like practical. Now collecting her sampol from California'};

  public teacher1: Teacher = {teacherName: 'Sayed', teacherCount: 5, teacherSubject: 'English', teacherBody: 'A great teacher to teach English.He is keeping students busy as much as possible.Sometimes students fail to complete assignment.'};
  public teacher2: Teacher = {teacherName: 'Joyel', teacherCount: 2, teacherSubject: 'Math', teacherBody: 'All student like him. some student doesnot do their homework at all.But the teacher is above them. He is happy to be doing nothing.'};
  public teacher3: Teacher = {teacherName: 'Chis', teacherCount: 6, teacherSubject: 'Science', teacherBody: 'He is very active for his class.he always try to show something for his student but its not alway possible.'};
  constructor() { }

  ngOnInit(): void {
  }

}
