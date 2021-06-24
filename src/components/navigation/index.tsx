import React from "react";

import data from "@public/meta.json";

import Link from 'next/link'


import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "./styled";

export const Navigation: React.FC = () => {
  return (
    <Container>
      <Row>
        {// @ts-ignore
          (data.sections).map((section) => (
            <Col key={section.name}>
              <Card>
                <CardBody>
                  <Link href={section.url}>
                    <CardTitle>{section.name}</CardTitle>
                  </Link>
                  <CardText>{section.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
