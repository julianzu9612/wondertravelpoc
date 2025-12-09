// components
import Navbar from '@components/navbarv2/Navbar';
//styles layout
import './global.scss';

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
  modal,
  params: { lng },
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  
  return (
    <>
      <Navbar lng={lng} />
      {children}
      {modal}
    </>
  );
}
