import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [];

  // TODO: Routingból kell kezelni az active osztályt!
  ngOnInit(): void {
    this.items = this.items = [
      {
        label: 'Kezdőlap',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
        styleClass: 'mr-1',
      },
      {
        label: 'Grid-system',
        icon: 'pi pi-fw pi-table',
        routerLink: '/grid-system',
        styleClass: 'mr-1',
      },
      {
        label: 'Form',
        icon: 'pi pi-fw pi-book',
        routerLink: '/form',
      },
    ];
  }

  onItemClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    const menuItems = document.querySelectorAll('.p-menuitem-link');
    menuItems.forEach((item: Element) => item.classList.remove('active'));

    if (target.nodeName === 'SPAN') {
      target.parentElement?.blur();
      target.parentElement?.classList.add('active');
    } else {
      target.blur();
      target.classList.add('active');
    }
  }
}
