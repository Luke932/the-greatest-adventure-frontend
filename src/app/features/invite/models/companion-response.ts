import { MenuType } from '../../../core/models/menu-type';

export interface CompanionResponse {
  id: number;
  name: string;
  surname: string;
  email: string | null;
  phone: string | null;
  allergies: string | null;
  menuType: MenuType;
  notes: string | null;
}