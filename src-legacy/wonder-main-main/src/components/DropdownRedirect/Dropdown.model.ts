export interface ItemContent {
  titleOption: string;
  redirect: string;
}
export interface IDropDownRedirect {
  title: string;
  redirect?: string;
  content: ItemContent[];
}
