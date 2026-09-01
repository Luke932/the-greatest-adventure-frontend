import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MenuType } from '../../../../core/models/menu-type';
import { RsvpStatus } from '../../../../core/models/rsvp-status';

import { PublicInviteUpdateRequest } from '../../models/public-invite-update-request';

@Component({
  selector: 'app-guest-preferences-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './guest-preferences-form.html',
  styleUrl: './guest-preferences-form.css'
})
export class GuestPreferencesForm implements OnInit {

  @Input({ required: true })
  phone: string | null = null;

  @Input({ required: true })
  allergies: string | null = null;

  @Input({ required: true })
  menuType!: MenuType;

  @Input({ required: true })
  rsvpStatus!: RsvpStatus;

  @Input({ required: true })
  notes: string | null = null;

  @Input({ required: true })
  menuTypes: MenuType[] = [];

  @Input()
  saving = false;

  @Output()
  submitted = new EventEmitter<PublicInviteUpdateRequest>();

  form;

  constructor(
    private readonly fb: FormBuilder
  ) {

    this.form = this.fb.nonNullable.group({
      phone: [''],
      allergies: [''],
      menuType: [
        null as MenuType | null,
        Validators.required
      ],
      notes: ['']
    });
  }

  ngOnInit(): void {

    this.form.patchValue({
      phone: this.phone ?? '',
      allergies: this.allergies ?? '',
      menuType: this.menuType,
      notes: this.notes ?? ''
    });
  }

  submit(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    const request: PublicInviteUpdateRequest = {

      phone:
        value.phone.trim() || null,

      allergies:
        value.allergies.trim() || null,

      menuType:
        value.menuType!,

      rsvpStatus:
        this.rsvpStatus,

      notes:
        value.notes.trim() || null
    };

    this.submitted.emit(request);
  }
}