
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --main-bg-color: #fff;
  --main-nav-color: #666666;
  --main-font-color: #333;
  --main-ul-color: #fff;
  --main-li-color: #fff;
  --main-div-color: #333;

}

* {
  margin: 0;
  padding: 0;
}


body {
  background-color: var(--main-bg-color);
  color: var(--main-font-color);
  text-align: center;
  // display: block;
}
  `;

export default GlobalStyle;