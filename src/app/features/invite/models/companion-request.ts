import { MenuType } from '../../../core/models/menu-type'; 

export interface CompanionRequest { 
    name: string; 
    surname: string; 
    email?: string; 
    phone?: string; 
    allergies?: string; 
    menuType: MenuType; 
    notes?: string; 
}