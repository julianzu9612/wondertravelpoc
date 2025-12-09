export interface ItemContent {
  name: string;
  label: string;
  image_url?: string;
}
export interface IDropdown {
  title: string;
  queryParam: string;
  content: ItemContent[];
}
