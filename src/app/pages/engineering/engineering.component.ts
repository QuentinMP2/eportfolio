import { Component } from '@angular/core';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { IntroductionEnum } from '../../enums/introduction.enum';

@Component({
  selector: 'app-engineering',
  standalone: true,
  imports: [IntroductionComponent],
  templateUrl: './engineering.component.html',
  styleUrl: './engineering.component.scss'
})
export class EngineeringComponent {
  title: string = IntroductionEnum.EngineeringTitle;
  description: string = IntroductionEnum.EngineeringDescription;
}
