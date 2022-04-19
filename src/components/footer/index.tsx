import React from "react";
import Image from "next/image";

import { Container, List, ListItem } from "./styled";

export const Footer: React.FC = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <a href="https://github.com/gastonoterom">
            <Image
              src="/icons/github-icon.svg"
              alt="github"
              width="28"
              height="29"
            />
          </a>
        </ListItem>
        <ListItem>
          <a href="https://twitter.com/_gastonotero">
            <Image
              src="/icons/twitter-icon.svg"
              alt="twitter"
              width="28"
              height="28"
            />
          </a>
        </ListItem>
      </List>
    </Container>
  );
};
