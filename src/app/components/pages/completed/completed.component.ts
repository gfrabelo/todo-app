import { Component, inject } from '@angular/core';
import { DateComponent } from '../../date/date.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [DateComponent, TaskListComponent ],
  templateUrl: './completed.component.html',
  styles: ''
})
export class CompletedComponent {
  newTask = "";
  taskList:any = []=[];
  HttpService = inject(HttpService);
  ngOnInit (){
    this.getAllTasks();
  }
  getAllTasks(){
    this.HttpService.getAllTasks().subscribe((result:any) => {
      this.taskList = result.filter((x:any) => x.closed == true);
    })
  }
  onComplete(task:any){
    task.closed = true;
    this.HttpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    })
  }
}
