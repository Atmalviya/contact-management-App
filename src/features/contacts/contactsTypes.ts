export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: 'active' | 'inactive';
  email: string;
  phone: string;
}
