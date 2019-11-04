import {Component, EventEmitter, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  expanded: boolean;

  constructor() { }

  ngOnInit() {
    this.expanded = true;
  }

  changeExpanded (){
    if(this.expanded){
      this.expanded = false;
    }else{
      this.expanded = true;
    }
  }

}
