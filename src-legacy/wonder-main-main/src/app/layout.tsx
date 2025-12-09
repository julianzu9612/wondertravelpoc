import GlobalButtonWhat from '@components/globalButtonWhat/GlobalButtonWhat';
import './[lng]/global.scss';
import { Montserrat } from 'next/font/google';
import BannerDiscounts from '@components/BannerDiscounts/BannerDiscounts';
import useGetLanguage from '@hooks/useGetLanguaje';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['500', '600', '700'],
});

export const metadata = {
  title: 'Wonder Travel | Small group travel in South America',
  description: '#ViajaAlMomento con Wonder travel',
  openGraph: {
    title: 'Wonder Travel | Small group travel in South America',
    images: ['https://cdn.wondertravel.co/seo/main.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scriptGoogle = JSON.parse(
    `${process.env.NEXT_PUBLIC_TRACKING_SCRIPTS}`
  );

  const lng = useGetLanguage();

  const Gtm = async () => {
    if (scriptGoogle) {
      const GTM = (await import('@components/HtmlLayout/_components/GTM'))
        .default;
      return <GTM scriptGoogle={scriptGoogle} />;
    }
  };

  return (
    <html lang='es'>
      <head>
        <link
          rel='icon'
          href='/assets/icons/isologo-wonder-orange.svg'
          sizes='any'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
      </head>
      <body className={`${montserrat.variable}`}>
        <BannerDiscounts
          link={`/${lng}/search?utm_medium=web&utm_campaign=expediciones-wonder&travelStyles=expediciones-wonder`}
        />
        <main>
          {children}
          <Gtm />
          <div id='modal-root'></div>
        </main>
        <GlobalButtonWhat />
      </body>
    </html>
  );
}
