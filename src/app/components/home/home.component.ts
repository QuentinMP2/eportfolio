import { LangEN } from './../../enums/EN-en.enum';
import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ContactComponent, ButtonModule],
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

  resumeUrlEn: string = '../../../assets/pdf/resume_en.pdf';
  resumeNameEn: string = 'RESUME_QUENTIN_POINTEAU_EN';

  resumeUrlFr: string = '../../../assets/pdf/resume_fr.pdf';
  resumeNameFr: string = 'RESUME_QUENTIN_POINTEAU_FR';

  downloadPdf(fileUrl: string, fileName: string): void {
    fetch(fileUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = fileName;
        anchor.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('File download failed:', error);
      });
  }
}
