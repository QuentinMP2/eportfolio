import { Component } from '@angular/core';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { IntroductionEnum } from '../../enums/introduction.enum';
import { MobilityComponent } from "../../components/mobility/mobility.component";
import { MobilityEnum } from '../../enums/mobility.enum';

@Component({
  selector: 'app-international',
  standalone: true,
  imports: [IntroductionComponent, MobilityComponent],
  templateUrl: './international.component.html',
  styleUrl: './international.component.scss'
})
export class InternationalComponent {
  title: string = IntroductionEnum.InternationalTitle;
  description: string = IntroductionEnum.SustainabilityDescription;

  japan: string = MobilityEnum.Japan;
  japanPurpose: string = MobilityEnum.JapanPurpose;
  japanDuration: number = MobilityEnum.JapanDuration;
  japanSourceImage: string = '../../../assets/images/japan.jpg';
  japanSummary1: string = MobilityEnum.JapanSummary1;
  japanSummary2: string = MobilityEnum.JapanSummary2;
  japanSummary3: string = MobilityEnum.JapanSummary3;
}
