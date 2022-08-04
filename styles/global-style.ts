import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: DM Sans, sans-serif;
  font-weight: 300;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (prefers-color-scheme: 
  ) {
  html {
  }
  body {
  }
}
`;

export default GlobalStyle;
