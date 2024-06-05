import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateComponent } from '../../date/date.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [FormsModule, DateComponent, TaskListComponent],
  templateUrl: './all.component.html',
  styles: ''
})
export class AllComponent {
  
}
