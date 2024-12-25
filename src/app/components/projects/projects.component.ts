import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { LangEN } from '../../enums/EN-en.enum';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [IntroComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  title: string = LangEN.ProjectsTitle;
  introduction: string = LangEN.ProjectsIntroduction;
}
