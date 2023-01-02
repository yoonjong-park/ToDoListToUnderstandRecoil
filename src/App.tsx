import React from "react";
import { RouterProvider } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    max-width : 70vh;
    margin : 0 auto;
    font-family: "Source Sans Pro", sans-serif;

  }
  a {
    text-decoration: none;
    color: inherit;  // 부모 속성 상속 받기
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default App;
