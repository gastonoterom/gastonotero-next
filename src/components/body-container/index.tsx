import { Container, SubContainer } from "./styled";

export function BodyContainer({ children }) {
  return (
    <Container>
      <SubContainer>{children}</SubContainer>
    </Container>
  );
}
