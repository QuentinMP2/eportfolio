import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { TravelComponent } from '../travel/travel.component';
import { ButtonModule } from 'primeng/button';
import { LangEN } from '../../enums/EN-en.enum';
import { JapanEN } from '../../enums/EN-japan.enum';
import { JapanGLOBAL } from '../../enums/GLOBAL-japan.enum';

@Component({
    selector: 'app-travels',
    standalone: true,
    imports: [IntroComponent, TravelComponent, ButtonModule],
    templateUrl: './travels.component.html',
    styleUrl: './travels.component.scss'
})
export class TravelsComponent {
  title: string = LangEN.TravelsTitle;
  introduction: string = LangEN.TravelsIntroduction;

  japanName: string = JapanEN.Name;
  japanImg: string = JapanGLOBAL.Picture;
  japanDuration: number = JapanGLOBAL.Duration;
  japanPurpose: string = JapanEN.Purpose;
  japanSummary: string[] = [
    JapanEN.Summary1,
    JapanEN.Summary2,
    JapanEN.Summary3
  ]
  japanReportName: string = 'INTERNSHIP_JAPAN';
  japanReportUrl: string = '../../../assets/pdf/summer_internship_report_1A.pdf';
  japanReportLabel: string = 'Internship Report';
}
