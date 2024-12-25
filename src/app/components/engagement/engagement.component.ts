import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { HobbyComponent } from './../hobby/hobby.component';
import { LangEN } from '../../enums/EN-en.enum';
import { Links } from '../../enums/links.enum';
import { SkillsEN } from '../../enums/EN-skills.enums';

@Component({
  selector: 'app-engagement',
  standalone: true,
  imports: [HobbyComponent, IntroComponent],
  templateUrl: './engagement.component.html',
  styleUrl: './engagement.component.scss'
})
export class EngagementComponent {
  title: string = LangEN.EngagementTitle;
  introduction: string = LangEN.EngagementIntroduction;

  CDLName: string = 'Capitole du Libre';
  CDLBackground: string = '../../../assets/images/cdl_background.jpg';
  CDLLogo: string = '../../../assets/images/cdl.png';
  CDLRedirect: string = Links.CapitoleDuLibre;
  CDLDescription: string = LangEN.CDLDescription;
  CDLNbHours: number = 25;
  CDLSkills: string[] = [
    SkillsEN.communication,
    SkillsEN.deadlines,
    SkillsEN.teamManagement,
    SkillsEN.teamWorking,
    SkillsEN.photography
  ];

  women7Name: string = 'Women7';
  women7Background: string = '../../../assets/images/women7_background.jpg';
  women7Logo: string = '../../../assets/images/women7.png';
  women7Redirect: string = Links.Women7;
  women7Description: string = LangEN.women7Description;
  women7NbHours: number = 15;
  women7Skills: string[] = [
    SkillsEN.deadlines,
    SkillsEN.teamManagement,
    SkillsEN.teamWorking,
    SkillsEN.photography
  ];

  thconName: string = 'THCon';
  thconBackground: string = '../../../assets/images/thcon_background.jpg';
  thconLogo: string = '../../../assets/images/thcon.jpg';
  thconRedirect: string = Links.THCon;
  thconDescription: string = LangEN.thconDescription;
  thconNbHours: number = 20;
  thconSkills: string[] = [
    SkillsEN.teamWorking
  ];

  TMREName: string = 'Toulouse Métropole Run Experience';
  TMREBackground: string = '../../../assets/images/tmre_background.jpg';
  TMRELogo: string = '../../../assets/images/tmre.png';
  TMRERedirect: string = Links.TMRE;
  TMREDescription: string = LangEN.TMREDescription;
  TMRENbHours: number = 4;
  TMRESkills: string[] = [
    SkillsEN.teamWorking
  ];
}
