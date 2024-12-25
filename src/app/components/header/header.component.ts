import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuIcon!: string;
  closeIcon!: string;
  isMenuOpen!: boolean;

  ngOnInit(): void {
    this.menuIcon = "../../../assets/icons/burger-menu.svg";
    this.closeIcon = "../../../assets/icons/close.svg";
    this.isMenuOpen = false;
  }

  onToggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
