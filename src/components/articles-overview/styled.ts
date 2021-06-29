import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 3rem;
  background-color: ${({ theme }) => theme.colors.cardsBg};
  max-width: 800px !important;
  margin: auto;
`;

export const ListItem = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};

  &:hover {
    color: ${({ theme }) => theme.colors.hoverTextColor};
  }
`;

export const ArticleTitle = styled.p`
  text-align: left !important;
  font-size: 22px;
  margin-bottom: 5px;
`;

export const ArticleDate = styled.p`
  text-align: left !important;
  font-size: 13px;
  margin-top: 0px;
  margin-left: 15px;
`;

export const ArticleDescription = styled.p`
  font-size: 16px;
  margin-top: 0px;
  margin-left: 15px;
`;
