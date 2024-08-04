import { Component } from '@angular/core';
import { IntroductionEnum } from '../../enums/introduction.enum';
import { IntroductionComponent } from '../../components/introduction/introduction.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [IntroductionComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  title: string = IntroductionEnum.WelcomeTitle;
  subtitle: string = IntroductionEnum.WelcomeSubtitle;
  description: string = IntroductionEnum.WelcomeDescription;
  sourceImage: string = '../../../assets/images/pdp.jpg';
}
