import { HttpService } from './../../../services/http.service';
import { Component, inject } from '@angular/core';
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

  HttpService = inject(HttpService);

  onComplete(task:any){
    task.closed = true;
    console.log("tatenu", task)
    this.HttpService.updateTask(task).subscribe(() => {

    })
  }
}
