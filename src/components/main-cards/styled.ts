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
  max-width: 71rem;

  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  flex: 0 0 33%;
  max-width: 33%;
  cursor: pointer;
  @media (max-width: 575px) {
    max-width: 100%;
  }

  color: ${({ theme }) => theme.colors.textColor};
`;

export const Card = styled.div`
  padding: 1rem;
  box-sizing: border-box;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  p {
    justify-content: center;
    align-item: center;
  }

  &:hover h3 {
    color: ${({ theme }) => theme.colors.hoverTitleColor};
  }
  &:hover p {
    color: ${({ theme }) => theme.colors.hoverTextColor};
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-weight: 500;

  text-decoration: underline;
`;

export const CardText = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;
