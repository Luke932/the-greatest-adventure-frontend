import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CompanionRequest } from '../../models/companion-request';
import { MenuType } from '../../../../core/models/menu-type';

@Component({
  selector: 'app-companion-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './companion-form.html',
  styleUrl: './companion-form.css'
})
export class CompanionForm {

  @Input({ required: true })
  menuTypes: MenuType[] = [];

  @Output()
  submitted = new EventEmitter<CompanionRequest>();

  @Output()
  cancelled = new EventEmitter<void>();

  private readonly formBuilder = inject(FormBuilder);

  readonly menuLabels: Record<MenuType, string> = {
    [MenuType.STANDARD]: 'Standard',
    [MenuType.CELIAC]: 'Senza glutine',
    [MenuType.VEGETARIAN]: 'Vegetariano',
    [MenuType.VEGAN]: 'Vegano',
    [MenuType.OTHER]: 'Altro'
  };

  companionForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.email],
    phone: [''],
    allergies: [''],
    menuType: [null as MenuType | null, Validators.required],
    notes: ['']
  });

  submit(): void {
    if (this.companionForm.invalid) {
      this.companionForm.markAllAsTouched();
      return;
    }

    const value = this.companionForm.getRawValue();

    const request: CompanionRequest = {
      name: value.name.trim(),
      surname: value.surname.trim(),
      email: value.email.trim() || undefined,
      phone: value.phone.trim() || undefined,
      allergies: value.allergies.trim() || undefined,
      menuType: value.menuType!,
      notes: value.notes.trim() || undefined
    };

    this.submitted.emit(request);
  }

  cancel(): void {
    this.cancelled.emit();
  }
}