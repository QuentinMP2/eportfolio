import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.scss'
})
export class HobbyComponent {
  @Input({required: true}) name: string = '';
  @Input({required: true}) backgroundImg: string = '';
  @Input({required: true}) logo: string = '';
  @Input({required: false}) isRounded: boolean = false;
  @Input({required: true}) redirect: string = '';
}
