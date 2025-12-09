import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface IHtmlLayout
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLHtmlElement>,
    HTMLHtmlElement
  > {
  children?: React.ReactNode;
  scriptGoogle?: boolean;
}
