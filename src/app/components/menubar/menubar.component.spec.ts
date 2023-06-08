import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenubarModule } from 'primeng/menubar';

import { MenubarComponent } from './menubar.component';

describe('MenubarComponent', () => {
  let component: MenubarComponent;
  let fixture: ComponentFixture<MenubarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenubarComponent],
      imports: [MenubarModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(MenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
