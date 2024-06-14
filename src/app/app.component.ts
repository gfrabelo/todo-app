import { Component, EventEmitter, Output, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TaskListComponent } from "./components/task-list/task-list.component";
import { DateComponent } from './components/date/date.component';
import { HttpService } from './services/http.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HeaderComponent, TaskListComponent, DateComponent]
})
export class AppComponent {
  title = 'todo-app';
  initialTaskList:any = []=[];
  taskList:any = []=[];
  HttpService = inject(HttpService);
  
  getAllTasks(){
    this.HttpService.getAllTasks().subscribe((result:any) => {
      this.initialTaskList = this.taskList = result;
    })
  }
  
  @Output() closed = new EventEmitter<any>();
      
  onComplete(task:any){
    task.closed = true;
    this.HttpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    })
  }
}
