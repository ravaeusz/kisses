import NavBar from '../components/navbar'
import Footer from '@/components/Footer';
import "./globals.css";
import { CartProvider } from "../app/context/CartContext";
import CartDrawer from '../components/CartDrawer';


export const metadata = {
  icons: {
    icon: '/iconekisses.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='overflow-x-hidden'>
        <CartProvider>
        <NavBar />
        {children} 
        <CartDrawer />
       <Footer />
     </CartProvider>
      </body>
    </html>
  );
}
