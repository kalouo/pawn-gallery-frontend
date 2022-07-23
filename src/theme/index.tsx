import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { theme } from "./theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
