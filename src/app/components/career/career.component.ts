import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { LangEN } from '../../enums/EN-en.enum';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [IntroComponent, ButtonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  title: string = LangEN.CareerTitle;
  introduction: string = LangEN.CareerIntroduction;

  resumeUrlEn: string = '../../../assets/pdf/resume_en.pdf';
  resumeNameEn: string = 'RESUME_QUENTIN_POINTEAU_EN';

  resumeUrlFr: string = '../../../assets/pdf/resume_fr.pdf';
  resumeNameFr: string = 'CV_QUENTIN_POINTEAU_FR';

  coverLetterUrlEn: string = '../../../assets/pdf/cover_letter_en.pdf';
  coverLetterNameEn: string = 'COVER_LETTER_QUENTIN_POINTEAU';

  coverLetterUrlFr: string = '../../../assets/pdf/cover_letter_fr.pdf';
  coverLetterNameFr: string = 'LETTRE_DE_MOTIVATION_QUENTIN_POINTEAU';

  jobAdUrl: string = '../../../assets/pdf/job_ad.pdf';
  jobAdName: string = 'JOB_AD_QUENTIN_POINTEAU';

  PPPslidesUrl: string = '../../../assets/pdf/PPP_slides.pdf';
  PPPslidesName: string = 'PPP_Slides_QUENTIN_POINTEAU';

  Internship1AUrl: string = '../../../assets/pdf/summer_internship_report_1A.pdf';
  InternshipA1Name: string = 'INTERNSHIP_JAPAN';


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
