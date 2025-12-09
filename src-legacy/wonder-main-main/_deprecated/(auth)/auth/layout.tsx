// context
import CookiesPolicies from '@components/CookiesPolicies/CookiesPolicies';
import { Providers } from '../../../../../deprecated/Providers';

// components
import HtmlLayout from '@components/HtmlLayout/HtmlLayout';

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
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <HtmlLayout lang={lng}>
      <Providers>
        <main>
          <CookiesPolicies lng={lng} />
          {children}
        </main>
      </Providers>
    </HtmlLayout>
  );
}
