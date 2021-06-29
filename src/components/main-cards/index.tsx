import React from "react";

import data from "@public/meta.json";

import Link from "next/link";

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
        {
          // @ts-ignore
          data.sections.map((section) => (
            <Link key={section.name} href={section.url}>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle>{section.name}</CardTitle>
                    <CardText>{section.description}</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Link>
          ))
        }
      </Row>
    </Container>
  );
};
