import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-hobby',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hobby.component.html',
    styleUrl: './hobby.component.scss'
})
export class HobbyComponent implements OnInit {
  @Input({required: true}) name: string = '';
  @Input({required: true}) backgroundImg: string = '';
  @Input({required: true}) logo: string = '';
  @Input({required: false}) isRounded: boolean = false;
  @Input({required: true}) redirect: string = '';
  @Input({required: false}) nbHours: number = 0;
  @Input({required: false}) description: string = '';
  @Input({required: false}) skills: string[] = [];

  isDialogBoxOpen!: boolean;

  ngOnInit(): void {
    this.isDialogBoxOpen = false;
  }

  onShowDialog(dialogBox: HTMLDialogElement): void {
    dialogBox.showModal();
    this.isDialogBoxOpen = true;
    document.body.style.overflow = 'hidden';  // prevent background scrolling
  }

  onCloseDialog(dialogBox: HTMLDialogElement): void {
    dialogBox.close();
    this.isDialogBoxOpen = false;
    document.body.style.overflow = '';
  }
}