import { ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";

interface IPageProps {
  children: ReactNode;
}

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    *, *:before, *:after {
        box-sizing: inherit
    }

    body {
        font-family: 'Ubuntu';
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        color: #3d3d3d
    }

    a {
        text-decoration: none;
        color: inherit
    }

    button {
        font-family: 'Ubuntu';
    }
`;

export default function Page({ children }: IPageProps) {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  );
}
