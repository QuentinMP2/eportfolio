import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.scss'
})
export class TravelComponent {
  @Input({required: true}) country: string = '';
  @Input({required: true}) picture: string = '';
  @Input({required: true}) duration: number = 0;   // Number of weeks
  @Input({required: true}) purpose: string = '';
  @Input({required: true}) summary: string[] = [];
}
