import { HttpService } from './../../../services/http.service';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { DateComponent } from '../../date/date.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [DateComponent, TaskListComponent, FormsModule],
  templateUrl: './all.component.html',
  styles: ''
})
export class AllComponent {

  newTask = "";
  taskList:any = []=[];
  HttpService = inject(HttpService);
  ngOnInit (){
    this.getAllTasks();
  }
  addTask(){
    this.HttpService.addTask(this.newTask).subscribe(() => {
      this.newTask="";
      this.getAllTasks()
    })
  }
  getAllTasks(){
    this.HttpService.getAllTasks().subscribe((result:any) => {
      this.taskList = result
    })
  }
  onComplete(task:any){
    task.closed = true;
    this.HttpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    })
  }

  @Output() closed = new EventEmitter<any>();

  markClosed(task:any) {
    this.closed.emit(task);
  }
}
