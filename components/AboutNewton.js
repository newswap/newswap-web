import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation, Trans, Translation } from 'react-i18next'

const AboutNewton = () => {
  let { t ,i18n} = useTranslation();
  return (
    <section className="border-top pt-110 pb-150">
      <Container>
        <Row className="justify-content-center">
        <Col md={10} lg={10} xl={10}>
            <div className="text-center">
              <p>
                Powered by Newton Project
              </p>
              <h2 className="h1">
                {t('newton base')}
              </h2>
              <h3>
                {t('newton slogan')}
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
