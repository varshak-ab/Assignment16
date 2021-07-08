import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-jdbc',
  templateUrl: './jdbc.component.html',
  styleUrls: ['./jdbc.component.css']
})
export class JdbcComponent implements OnInit {

  courses:any = {}
  constructor(private javaservice:JavaService)
  {

}  ngOnInit(): void {
  this.javaservice.getCoursesInfo().subscribe(
    data => data.forEach((val:any) => (val.courseid=='jdbc') ? this.courses = val : console.log(-1))
  )
  }
}
