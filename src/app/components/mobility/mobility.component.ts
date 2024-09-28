import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobility',
  standalone: true,
  templateUrl: './mobility.component.html',
  styleUrl: './mobility.component.scss'
})
export class MobilityComponent implements OnInit {
  @Input({ required: true }) mobilityDestination: string = '';
  @Input({ required: true }) mobilityPurpose: string = '';
  @Input({ required: true }) mobilityDuration: number = 0;
  @Input({ required: true }) mobilitySourceImage: string = '';

  @Input({ required: false }) mobilitySummary1: string = '';
  @Input({ required: false }) mobilitySummary2: string = '';
  @Input({ required: false }) mobilitySummary3: string = '';
  @Input({ required: false }) mobilitySummary4: string = '';
  
  visible: boolean = false;

  ngOnInit(): void {
    this.visible = false;
  }

  displayDialog() {
    this.visible = !this.visible;
  }
}
