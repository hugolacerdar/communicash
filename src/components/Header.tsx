import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../../public/logov1.svg";

const Logo = styled.div`
  font-size: 3rem;
  margin: 2rem 2rem 4rem 2rem;
  position: relative;
  z-index: 2;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/" passHref>
            <Image src={logo} alt="CommuniCash" height="50px" />
          </Link>
        </Logo>
      </div>
    </HeaderStyles>
  );
}
