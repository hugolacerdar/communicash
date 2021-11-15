import styled from "styled-components";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Container = styled.div`
  width: clamp(70%, 700px, 100%);
  margin: 0 auto;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    > form:first-child {
      background-image: url("/circle-scatter-haikei5.svg");
      background-size: auto;
    }
    > form:nth-child(2) {
      background-image: url("/circle-scatter-haikei6.svg");
      background-size: auto;
    }
  }
`;

export default function SignInPage() {
  return (
    <Container>
      <div>
        <SignIn />
        <SignUp />
      </div>
    </Container>
  );
}
