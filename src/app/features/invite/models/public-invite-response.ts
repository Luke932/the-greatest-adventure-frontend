import { RsvpStatus } from '../../../core/models/rsvp-status';
import { CompanionResponse } from './companion-response';
import { MenuType } from '../../../core/models/menu-type';

export interface PublicInviteResponse {
  name: string;

  surname: string;

  phone: string | null;

  allergies: string | null;

  menuType: MenuType;

  rsvpStatus: RsvpStatus;

  notes: string | null;

  companions: CompanionResponse[];
}