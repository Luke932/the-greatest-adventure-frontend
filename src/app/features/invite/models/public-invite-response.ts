import { RsvpStatus } from '../../../core/models/rsvp-status';
import { CompanionResponse } from './companion-response';

export interface PublicInviteResponse {
  name: string;
  surname: string;
  rsvpStatus: RsvpStatus;
  companions: CompanionResponse[];
}