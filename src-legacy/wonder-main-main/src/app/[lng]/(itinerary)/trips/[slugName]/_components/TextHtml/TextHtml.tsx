'use client';
import DOMPurify from 'dompurify';
import { ITextInnerHtml } from './TextInnerHtml.model';

const TextHtml = (props: ITextInnerHtml) => {
  const { description, className, ...restAtributes } = props;
  return (
    <p
      {...restAtributes}
      className={className}
      dangerouslySetInnerHTML={{
        __html:
          DOMPurify.sanitize === undefined
            ? ''
            : DOMPurify.sanitize(description ?? ''),
      }}
    />
  );
};

export default TextHtml;
