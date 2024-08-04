import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [],
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.scss'
})
export class HobbyComponent {
  @Input({ required: true }) hobbyDescription: string = '';
  @Input({ required: true }) hobbySourceLogo: string = '';
  @Input() hobbyUrl: string = '';
}
