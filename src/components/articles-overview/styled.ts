import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-item: center;
  padding-bottom: 3rem;
  background-color: ${({ theme }) => theme.colors.cardsBg};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 71rem;

  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  flex: 0 0 33%;
  max-width: 33%;

  @media (max-width: 575px) {
    max-width: 100%;
  }
`;
