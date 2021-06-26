import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  text-align: center;
  max-width: 71rem;

  h1 {
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 5.5rem;
    padding-bottom: 3rem;
    color: ${({ theme }) => theme.colors.textColor};
  }
  p {
    font-size: 1.25rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;
