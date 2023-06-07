import { Component, DestroyRef, HostListener, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [];
  destroyRef: DestroyRef = inject(DestroyRef);

  @HostListener('document:click', ['$event'])
  removeFocusAfterClick(event: MouseEvent): void {
    let targetElement: HTMLElement | null = event.target as HTMLElement;
    while (targetElement) {
      if (targetElement.classList.contains('p-menuitem-link') || targetElement.classList.contains('p-button')) {
        targetElement.blur();
        break;
      }
      targetElement = targetElement.parentElement;
    }
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeMenuItems();
    this.subscribeToRouterEventsChanges();
  }

  initializeMenuItems(): void {
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

  updateMenuItems(): void {
    const currentRoute = this.router.url;
    const menuItems = document.querySelectorAll('.p-menuitem-link');
    menuItems.forEach((item: Element) => item.classList.remove('active'));

    menuItems.forEach((item: Element) => {
      const link = item.getAttribute('href') || '';
      if ((link === '/' && currentRoute === link) || (link !== '/' && currentRoute.startsWith(link))) {
        item.classList.add('active');
      }
    });
  }

  subscribeToRouterEventsChanges(): void {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.updateMenuItems();
      }
    });
  }
}
