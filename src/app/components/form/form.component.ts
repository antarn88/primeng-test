import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [MessageService],
})
export class FormComponent {
  loading = false;
  destroyRef: DestroyRef = inject(DestroyRef);

  productForm = this.fb.group({
    name: ['', Validators.required],
    productNumber: ['', Validators.required],
    price: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private messageService: MessageService) {}

  onSubmit(): void {
    this.loading = true;
    this.productForm.disable();
    of('Ok!')
      .pipe(delay(3000), takeUntilDestroyed(this.destroyRef))
      .subscribe((response: string) => {
        this.loading = false;
        this.productForm.reset();
        this.productForm.enable();
        this.messageService.add({ severity: 'success', summary: 'Sikeres termékfelvétel!', life: 5000 });
        console.log(response);
      });
  }
}
