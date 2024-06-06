import { Component } from '@angular/core';
import { DateComponent } from '../../date/date.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [DateComponent, TaskListComponent],
  templateUrl: './all.component.html',
  styles: ''
})
export class AllComponent {

  onComplete(task:any){
    console.log("tatenu", task)
  }
}
