// components
import { Providers } from '../../../../../_deprecated/Providers';
import HtmlLayout from '@components/HtmlLayout/HtmlLayout';
import CookiesPolicies from '@components/CookiesPolicies/CookiesPolicies';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@components/navbar/Navbar'), {
  ssr: false,
});
// import Footer from '@components/footer/Footer';

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
    <HtmlLayout lang={lng} scriptGoogle={false}>
      <Navbar variant='sticky' type='DarkContrast' />
      <Providers>
        <main>
          <CookiesPolicies lng={lng} />
          {children}
        </main>
      </Providers>
    </HtmlLayout>
  );
}
