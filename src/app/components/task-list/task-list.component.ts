import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styles: '',
    imports: [FormsModule, CommonModule]
})
export class TaskListComponent {
  newTask = "";
  initialTaskList:any = []=[];
  taskList:any = []=[];
  HttpService = inject(HttpService);
  stateService = inject(StateService);
  ngOnInit (){
    this.stateService.searchSubject.subscribe((value) => {
      if (value) {
        this.taskList = this.taskList.filter((x:any) =>
           x.title.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        this.taskList = this.initialTaskList;
      }
    });
    this.getAllTasks();
  }
  addTask(){
    this.HttpService.addTask(this.newTask).subscribe(() => {
      this.newTask="";
      this.getAllTasks();
    })
  }
  getAllTasks(){
    this.HttpService.getAllTasks().subscribe((result:any) => {
      this.initialTaskList = this.taskList = result;
    })
  }

  @Output() closed = new EventEmitter<any>();

  markClosed(task:any) {
    this.closed.emit(task);
  }
}
