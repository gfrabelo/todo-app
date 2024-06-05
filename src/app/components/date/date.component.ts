import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date.component.html',
  styles: ''
})
export class DateComponent {
  dateNow = new Date();
}
