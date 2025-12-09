import Image from 'next/image';
interface IRedirectsIcons
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  img: string;
  alt: string;
}

const RedirectIcon = ({
  alt,
  img,
  rel = 'noreferrer',
  target = '_blank',
  ...attrA
}: IRedirectsIcons) => {
  return (
    <a {...attrA} rel={rel} target={target}>
      <i>
        <Image
          src={img}
          alt={alt}
          width={50}
          height={50}
          loading='lazy'
          priority={false}
          quality={100}
        />
      </i>
    </a>
  );
};
export default RedirectIcon;
