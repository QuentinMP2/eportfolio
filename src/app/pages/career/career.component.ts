import { Component } from '@angular/core';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { IntroductionEnum } from '../../enums/introduction.enum';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [IntroductionComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  title: string = IntroductionEnum.CareerTitle;
  description: string = IntroductionEnum.CareerDescription;
}
