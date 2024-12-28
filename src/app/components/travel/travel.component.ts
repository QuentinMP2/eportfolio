import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-travel',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './travel.component.html',
    styleUrl: './travel.component.scss'
})
export class TravelComponent {
  @Input({required: true}) country: string = '';
  @Input({required: true}) picture: string = '';
  @Input({required: true}) duration: number = 0;   // Number of weeks
  @Input({required: true}) purpose: string = '';
  @Input({required: true}) summary: string[] = [];
  @Input({required: false}) reportName: string = '';
  @Input({required: false}) reportUrl: string = '';
  @Input({required: false}) reportLabel: string = '';

  downloadPdf(fileUrl: string, fileName: string): void {
    fetch(fileUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = fileName;
        anchor.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('File download failed:', error);
      });
  }
}
