import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input({required: true}) name: string = '';
  @Input({required: true}) logo: string = '';
  @Input({required: true}) link: string = '';
}
