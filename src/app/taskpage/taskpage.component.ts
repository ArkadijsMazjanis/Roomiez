import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';



@Component({
  selector: 'taskpage',
  templateUrl: './taskpage.component.html',
  styleUrls: ['./taskpage.component.css'],
})
export class TaskpageComponent implements OnInit {


  ngOnInit(): void {
  }
 
taskListIds = [ 1, 2, 3, 5, 7]; //fetch ids of taskList
visible: boolean = true
@Input() major = 0;
@Input() minor = 0;
 
addListClick(){
  this.visible = !this.visible;

}


}
