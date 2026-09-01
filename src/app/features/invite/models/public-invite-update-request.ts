import { MenuType } from '../../../core/models/menu-type';
import { RsvpStatus } from '../../dashboard/services/guests.service';

export interface PublicInviteUpdateRequest {

  rsvpStatus: RsvpStatus;

  menuType: MenuType;

  phone: string | null;

  allergies: string | null;

  notes: string | null;

}