import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imageandtext',
  imports: [],
  templateUrl: './imageandtext.component.html',
  styleUrl: './imageandtext.component.scss'
})
export class ImageandtextComponent {
  @Input({required: true}) srcImage: string = '';
  @Input({required: true}) text: string = '';
}
