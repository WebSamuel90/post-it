
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --main-bg-color: #fff;
  --main-nav-color: #666666;
  --main-font-color: #333;
  --main-burger-color: #333;
  --main-ul-color: #fff;
  --main-li-color: #fff;
  --main-div-color: #333;

}

* {
  margin: 0;
  padding: 0;
  // box-sizing: border-box;
}

.dark-mode {
  --main-burger-color: #333);
  --main-div-color: #fff);
  --main-font-color: #fff);
  --main-li-color: #333);
  --main-ul-color: #333);
  --main-bg-color: #666666);
  --main-nav-color: #fff);
}


body {
  // background-color: var(--main-bg-color);
  color: var(--main-font-color);
  text-align: center;

  // display: block;
}


p {
  color: var(--main-font-color);
}
  `;

export default GlobalStyle;