import { Navbar } from "components";

interface ViewProps {
  children: React.ReactNode | React.ReactNode[];
}

export const View = ({ children }: ViewProps) => (
  <>
    <Navbar />
    {children}
  </>
);
