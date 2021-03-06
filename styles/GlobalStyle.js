import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }

  html {
    font-size: 16px;

    @media(min-width: ${(p) => p.theme.breakpoint.desktopXXL}) {
      font-size: 19px;
    }
  }
 
  
  body {
    font-size: 16px;
    font-family: ${theme.font.sansSerif};
    overflow-y: scroll;
    color: ${(p) => p.theme.color.light};
    background-color: ${(p) => p.theme.color.bg};
    line-height: 1;

    @media(min-width: ${(p) => p.theme.breakpoint.desktopXXL}) {
      font-size: 19px;
    }
  }

  a:focus, button:focus {
    outline: 1px solid ${(p) => p.theme.color.white} !important;
  }
 
  @media(max-width: ${theme.breakpoint.tabletPortrait}) {
    .util-hideOnPhone {
      display: none;
    } 
  }
`;
