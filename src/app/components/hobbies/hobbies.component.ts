import { Component } from '@angular/core';
import { HobbyComponent } from './../hobby/hobby.component';
import { LangEN } from '../../enums/EN-en.enum';
import { Links } from '../../enums/links.enum';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [HobbyComponent],
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

  tvn7Name: string = 'TVn7';
  tvn7BackgroundImg: string = '../../../assets/images/tvn7_background.jpg';
  tvn7Logo: string = '../../../assets/images/tvn7.png';
  tvn7Redirect: string = Links.TVn7;

  net7Name: string = 'net7';
  net7Logo: string = '../../../assets/images/net7.png';
  net7Redirect: string = Links.Net7;

  thconName: string = 'THCon';
  thconBackground: string = '../../../assets/images/thcon_background.jpg';
  thconLogo: string = '../../../assets/images/thcon.jpg';
  thconRedirect: string = Links.THCon;
}
