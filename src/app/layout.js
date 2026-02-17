import NavBar from '../components/navbar'
import Footer from '@/components/Footer';
import "./globals.css";

export const metadata = {
  icons: {
    icon: '/iconekisses.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className=''>
        <NavBar />
        {children} 
    <Footer />
      </body>
    </html>
  );
}
