import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { CommonModule } from '@angular/common';
import { DateComponent } from "../date/date.component";

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styles: '',
    imports: [FormsModule, CommonModule, DateComponent]
})
export class TaskListComponent {
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
