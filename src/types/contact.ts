export type ContactStatus = "active" | "lead" | "inactive";

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: ContactStatus;
}
