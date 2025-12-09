import HtmlLayout from '@components/HtmlLayout/HtmlLayout';
import CookiesPolicies from '@components/CookiesPolicies/CookiesPolicies';
import Footer from '@components/footerV2/Footer';
import Navbar from '@components/navbarv2/Navbar';

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
      <Navbar lng={lng} />
      <main>
        <CookiesPolicies lng={lng} />
        {children}
      </main>
      <Footer lng={lng} />
    </HtmlLayout>
  );
}
