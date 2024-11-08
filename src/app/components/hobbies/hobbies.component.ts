import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { HobbyComponent } from './../hobby/hobby.component';
import { LangEN } from '../../enums/EN-en.enum';
import { Links } from '../../enums/links.enum';
import { SkillsEN } from '../../enums/EN-skills.enums';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [HobbyComponent, IntroComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
  title: string = LangEN.HobbiesTitle;
  introduction: string = LangEN.HobbiesIntroduction;

  photo7Name: string = 'Photo7';
  photo7BackgroundImg: string = '../../../assets/images/photo7_background.jpg';
  photo7Logo: string = '../../../assets/images/photo7.png';
  photo7Redirect: string = Links.Photo7;
  photo7Description: string = LangEN.Photo7Description;
  photo7Skills: string[] = [
    SkillsEN.teamManagement,
    SkillsEN.teamWorking,
    SkillsEN.eventManagement,
    SkillsEN.deadlines,
    SkillsEN.communication,
    SkillsEN.photography
  ];

  tvn7Name: string = 'TVn7';
  tvn7BackgroundImg: string = '../../../assets/images/tvn7_background.jpg';
  tvn7Logo: string = '../../../assets/images/tvn7.png';
  tvn7Redirect: string = Links.TVn7;
  tvn7Description: string = LangEN.TVn7Description;
  tvn7NbHours: number = 60;
  tvn7Skills: string[] = [
    SkillsEN.teamWorking,
    SkillsEN.video
  ];

  net7Name: string = 'net7';
  net7Logo: string = '../../../assets/images/net7.png';
  net7Redirect: string = Links.Net7;
  net7Description: string = LangEN.net7Description;
  net7NbHours: number = 30;
  net7Skills: string[] = [
    SkillsEN.teamWorking,
    SkillsEN.git,
    SkillsEN.docker,
    SkillsEN.webDevelopment
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
}
