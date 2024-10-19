import { LangEN } from './../../enums/EN-en.enum';
import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly topText = "French republic"
  readonly firstLineBottomText = "P<FRAPOINTEAU<<QUENTIN<<<<<<<<<<<<<<<<<<<<<<"
  readonly secondLineBottomText = "XXXXXXXXXXXXXXXXXXXXXXXXX<<<<<<<<<<<<<<<XX"

  readonly LangEN = LangEN;

  linkedInName: string = 'LinkedIn';
  linkedInLogo: string = '../../../assets/icons/linkedin.png';
  linkedInLink: string = 'https://www.linkedin.com/in/quentin-pointeau/';

  githubName: string = 'GitHub';
  githubLogo: string = '../../../assets/icons/github.png';
  githubLink: string = 'https://github.com/QuentinMP2';

  mailName: string = 'contact@quentin-pointeau.fr';
  mailLogo: string = '../../../assets/icons/gmail.svg';
  mailLink: string = 'mailto:contact@quentin-pointeau.fr';
}
