import { Component } from '@angular/core';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { IntroductionEnum } from '../../enums/introduction.enum';

@Component({
  selector: 'app-sustainability',
  standalone: true,
  imports: [IntroductionComponent],
  templateUrl: './sustainability.component.html',
  styleUrl: './sustainability.component.scss'
})
export class SustainabilityComponent {
  title: string = IntroductionEnum.SustainabilityTitle;
  description: string = IntroductionEnum.SustainabilityDescription;
}
