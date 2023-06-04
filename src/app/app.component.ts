import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = this.items = [
      {
        label: 'Kezdőlap',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Termékek',
        icon: 'pi pi-fw pi-shopping-cart',
      },
      {
        label: 'Felhasználók',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Kapcsolat',
        icon: 'pi pi-fw pi-phone',
      },
    ];
  }
}
