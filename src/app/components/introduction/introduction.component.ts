import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  @Input({ required: true }) title: string = '';
  @Input() subtitle: string = '';
  @Input({ required: true }) description: string = '';
  @Input() sourceImage: string = '';
}
