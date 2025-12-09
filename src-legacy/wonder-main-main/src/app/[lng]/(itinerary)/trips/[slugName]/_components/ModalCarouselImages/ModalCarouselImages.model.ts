export interface ICarouselImages {
  open: boolean;
  onClose: () => void;
  images: string[];
  defaultImage?: number;
}
