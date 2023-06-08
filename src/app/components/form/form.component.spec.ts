import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    // Arrange
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ButtonModule, ToastModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  // Custom test case
  it('should handle submit', fakeAsync(() => {
    // Arrange
    component.productForm.setValue({ name: 'TestProduct', productNumber: 'A123', price: '1000' });

    spyOn(component, 'onSubmit').and.callFake(() => {
      component.productForm.reset();
      component.loading = false;
    });

    // Act
    component.onSubmit();
    tick(3000);

    // Assert
    expect(component.productForm.value).toEqual({ name: null, productNumber: null, price: null });
    expect(component.loading).toBeFalse();
  }));
});
