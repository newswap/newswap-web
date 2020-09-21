import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutNewton = () => {
  return (
    <section className="border-top pt-110 pb-150">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={10}>
            <div className="text-center">
              <p>
                Powered by Newton Project
              </p>
              <h2 className="h1">
                牛顿：社群经济基础设施
              </h2>
              <h3>
                每一个人都应该从经济增长中受益
              </h3>
              <a href="www.newtonproject.org" target="_blank">牛顿项目官网</a>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutNewton;
