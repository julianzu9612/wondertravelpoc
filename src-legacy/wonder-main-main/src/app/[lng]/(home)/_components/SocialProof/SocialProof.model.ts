import { ReactNode } from 'react';

export interface review {
  picture?: string;
  name: string;
  comment: string;
  place: string;
}

export interface SocialProofI {
  lng: string;
}
export interface SocialProofClientI {
  children: ReactNode[];
  reviewsLength: number;
}
