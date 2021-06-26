import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-item: center;
  padding-bottom: 3rem;
  background-color: ${({ theme }) => theme.colors.cardsBg};
`;

export const ListItem = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};

  &:hover{
    color: ${({ theme }) => theme.colors.hoverTextColor};
  }
`;

export const ArticleTitle = styled.h1`
  font-size: 22px;
  margin-bottom: 5px;
`;

export const ArticleDate = styled.p`
  font-size: 14px;
  margin-top: 0px;
  margin-left: 15px;
`;

export const ArticleDescription = styled.p`
  font-size: 16px;
  margin-top: 0px;
  margin-left: 15px;
`;