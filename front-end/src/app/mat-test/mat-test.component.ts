import { Component, OnInit } from '@angular/core';
import { LessonsDataSource } from './LessonsDataSource ';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-mat-test',
  templateUrl: './mat-test.component.html',
  styleUrls: ['./mat-test.component.css']
})
export class MatTestComponent implements OnInit {

  dataSource!: LessonsDataSource;
  displayedColumns = ["seqNo", "description", "duration"];

  constructor(private usersService: UserService) {}

  onRowClicked(row : any){
    console.log('clicked row : ', row);
  }

  ngOnInit() {
    this.dataSource = new LessonsDataSource(this.usersService);
    this.dataSource.loadLessons(1);
  }
}
