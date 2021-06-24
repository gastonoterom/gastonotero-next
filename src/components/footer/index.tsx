import React from "react";
import Image from "next/image";

import { Container, LogoButton, List, ListItem } from "./styled";

export const Footer: React.FC = () => {
  return (
    <Container>
      
      <List>
        <ListItem>
          <Image
            src="/icons/github-icon.svg"
            alt="github"
            width="28"
            height="29"
          />
        </ListItem>
        <ListItem>
          <Image
            src="/icons/twitter-icon.svg"
            alt="twitter"
            width="28"
            height="28"
          />
        </ListItem>
        <ListItem>
          <Image
            src="/icons/linkedin-icon.svg"
            alt="linkedin"
            width="28"
            height="32"
          />
        </ListItem>
      </List>
    </Container>
  );
};
