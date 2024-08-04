import { HobbiesEnum } from './../../enums/hobbies.enum';
import { IntroductionEnum } from './../../enums/introduction.enum';
import { Component } from '@angular/core';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { HobbyComponent } from '../../components/hobby/hobby.component';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [IntroductionComponent, HobbyComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
  title: string = IntroductionEnum.HobbiesTitle;
  description: string = IntroductionEnum.HobbiesDescription;

  photo7Description: string = HobbiesEnum.Photo7Description;
  photo7SourceLogo: string = '../../../assets/images/photo7.png';
  photo7Url: string = HobbiesEnum.Photo7Url;

  tvn7Description: string = HobbiesEnum.TVn7Description;
  tvn7SourceLogo: string = '../../../assets/images/tvn7.png';
  tvn7Url: string = HobbiesEnum.TVn7Url;

  net7Description: string = HobbiesEnum.net7Description;
  net7SourceLogo: string = '../../../assets/images/net7.png';
  net7Url: string = HobbiesEnum.net7Url;
}
