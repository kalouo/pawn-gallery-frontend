import { Navbar } from 'components/navbar';

interface ViewProps {
  children: React.ReactNode | React.ReactNode[];
}

const View = ({ children }: ViewProps) => (
  <>
    <Navbar />
    {children}
  </>
);

export default View;
