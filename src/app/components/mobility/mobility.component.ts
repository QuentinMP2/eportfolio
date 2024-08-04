import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-mobility',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './mobility.component.html',
  styleUrl: './mobility.component.scss'
})
export class MobilityComponent {
  @Input({ required: true }) mobilityDestination: string = '';
  @Input({ required: true }) mobilityPurpose: string = '';
  @Input({ required: true }) mobilityDuration: number = 0;
  @Input({ required: true }) mobilitySourceImage: string = '';

  @Input({ required: false }) mobilitySummary1: string = '';
  @Input({ required: false }) mobilitySummary2: string = '';
  @Input({ required: false }) mobilitySummary3: string = '';
  @Input({ required: false }) mobilitySummary4: string = '';

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
