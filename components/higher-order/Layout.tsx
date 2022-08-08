import Footer from 'components/Footer';
import { Navbar } from 'components/navbar';

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
