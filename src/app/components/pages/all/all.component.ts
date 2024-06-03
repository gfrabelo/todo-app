import { HttpService } from './../../../services/http.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all.component.html',
  styles: ''
})
export class AllComponent {
  newTask = "";
  taskList:any = []=[];
  HttpService=inject(HttpService);
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

}
