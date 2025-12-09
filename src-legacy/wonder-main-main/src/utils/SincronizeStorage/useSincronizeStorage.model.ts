export interface IUseSincronizeStorage {
  type: 'localStorage' | 'sessionStorage';
  key: string;
  initialValue: string | number;
}
