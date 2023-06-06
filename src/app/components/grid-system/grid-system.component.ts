import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.scss'],
})
export class GridSystemComponent {
  @HostListener('document:click', ['$event'])
  removeFocusAfterClick(event: MouseEvent): void {
    let targetElement: HTMLElement | null = event.target as HTMLElement;
    while (targetElement) {
      if (targetElement.classList.contains('p-button')) {
        targetElement.blur();
        break;
      }
      targetElement = targetElement.parentElement;
    }
  }
}
