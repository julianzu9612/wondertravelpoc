export interface IDataLeader {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  prefix_number?: string; 
  document_number: string;
  user?: number | null;
  document_type: number;
}

