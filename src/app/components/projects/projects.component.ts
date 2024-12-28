import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { ContactComponent } from '../contact/contact.component';
import { LangEN } from '../../enums/EN-en.enum';
import { ImageandtextComponent } from '../imageandtext/imageandtext.component';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [IntroComponent, ImageandtextComponent, ContactComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  title: string = LangEN.ProjectsTitle;
  introduction: string = LangEN.ProjectsIntroduction;

  fermatImg: string = '../../../assets/images/fermat.jpg';
  fermatText: string = LangEN.FermatText;

  n7Img: string = '../../../assets/images/n7.png';
  n7Text: string = LangEN.N7Text;

  githubName: string = 'Check my GitHub account';
  githubLogo: string = '../../../assets/icons/github.png';
  githubLink: string = 'https://github.com/QuentinMP2';
}
