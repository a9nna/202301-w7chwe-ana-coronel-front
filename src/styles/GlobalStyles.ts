import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, ::before, ::after {
  box-sizing: border-box;
}

body {
  color: #fff;
  margin: 0;
  font-family:  "Source Code Pro", sans-serif;
  background-color: #01051c;
  min-height:100vh;
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none; 
}

input, button {
  font-family: inherit;
  cursor: pointer;
  border: none;
}

a, a:focus, a:active, a:visited {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyles;
