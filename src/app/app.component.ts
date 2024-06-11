import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HeaderComponent, TaskListComponent]
})
export class AppComponent {
  title = 'todo-app';
}
