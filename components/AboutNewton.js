import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation, Trans, Translation } from 'react-i18next'

const AboutNewton = () => {
  let { t ,i18n} = useTranslation();
  return (
    <section className="pt-0 pb-30 about-newton">
      <Container>
        <Row className="justify-content-center">
        <Col md={10} lg={10} xl={10}>
            <div className="text-center">
              <h3 style={{
                marginBottom: 30,
              }}>
                {t('newton.base')}
              </h3>
              <h4 style={{
                marginBottom: 30,
              }}>
                {t('newton.slogan')}
              </h4>
              <a href="https://newtonproject.org" target="_blank" className="btn">{t('newton.visitweb')}</a>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutNewton;
