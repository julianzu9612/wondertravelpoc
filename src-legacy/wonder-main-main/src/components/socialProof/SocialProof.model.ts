export interface review {
  picture?: string;
  name: string;
  comment: string;
  place: string;
  rating?: number;
}

export interface SocialProofI {
  reviews: review[];
}
