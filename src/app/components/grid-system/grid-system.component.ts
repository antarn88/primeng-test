import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.scss'],
})
export class GridSystemComponent {
  @HostListener('document:click', ['$event'])
  removeFocusAfterClick(event: MouseEvent): void {
    const watchedClasses = ['p-button'];
    let targetElement: HTMLElement | null = event.target as HTMLElement;

    while (targetElement) {
      if (Array.from(targetElement.classList).some((className: string) => watchedClasses.includes(className))) {
        targetElement.blur();
        break;
      }
      targetElement = targetElement.parentElement;
    }
  }
}
