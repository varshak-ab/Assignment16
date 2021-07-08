import { Component, OnInit } from '@angular/core';

import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-html5',
  templateUrl: './html5.component.html',
  styleUrls: ['./html5.component.css']
})
export class Html5Component implements OnInit {
  courses:any = {}
  constructor(private webservice:WebService)
  {

}  ngOnInit(): void {
  this.webservice.getCoursesInfo().subscribe(
    data => data.forEach((val:any) => (val.courseid=='html5') ? this.courses = val : console.log(-1))
  )
  }
}
