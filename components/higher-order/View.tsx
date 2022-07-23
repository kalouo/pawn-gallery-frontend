import { Navbar } from 'components/navbar';

interface ViewProps {
  children: React.ReactNode | React.ReactNode[];
}

export const View = ({ children }: ViewProps) => (
  <>
    <Navbar />
    {children}
  </>
);
