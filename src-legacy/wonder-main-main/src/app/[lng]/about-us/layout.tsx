// components
import HtmlLayout from '@components/HtmlLayout/HtmlLayout';
import NavbarV2 from '@components/navbarv2/Navbar';
import Footer from '@components/footerV2/Footer';
import CookiesPolicies from '@components/CookiesPolicies/CookiesPolicies';
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
      <NavbarV2 lng={lng} />
      <main>
        <CookiesPolicies lng={lng} />
        {children}
      </main>
      <Footer lng={lng} />
    </HtmlLayout>
  );
}
