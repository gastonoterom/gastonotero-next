import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.headerBg};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  cursor:pointer;
  color: ${({ theme }) => theme.colors.logo};
`;

export const StyledTitle = styled.h1`
  font-size: 40px
`