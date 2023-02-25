import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
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

`;

export default GlobalStyles;
