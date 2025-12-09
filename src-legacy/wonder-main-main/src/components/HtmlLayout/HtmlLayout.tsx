//model
import { IHtmlLayout } from './HtmlLayoout.model';
//fonts
import { Montserrat } from 'next/font/google';

//Styles
import '../../app/[lng]/global.scss';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['500', '600', '700'],
});

const HtmlLayout = async ({
  children,
  scriptGoogle = JSON.parse(`${process.env.NEXT_PUBLIC_TRACKING_SCRIPTS}`),
  ...atr
}: IHtmlLayout) => {
  const Gtm = async () => {
    if (scriptGoogle) {
      const GTM = (await import('./_components/GTM')).default;
      return <GTM scriptGoogle={scriptGoogle} />;
    }
  };
  return (
    <html {...atr} className={`${montserrat.variable}`}>
      <link
        rel='icon'
        href='/assets/icons/isologo-wonder-orange.svg'
        sizes='any'
      />
      <meta name='viewport' content='width=device-width'></meta>
      <body>
        {children}
        <Gtm />
        <div id='modal-root'></div>
      </body>
    </html>
  );
};

export default HtmlLayout;
