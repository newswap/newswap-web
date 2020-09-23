import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation, Trans, Translation } from 'react-i18next'


const HomeSections = () => {
  let { t ,i18n} = useTranslation();
  return (
    <>
      <section className="-border-top pt-60 pb-30 bg-2- ">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={10}>
              <div className="text-center user-interact-inner">
                <h2>{t('business.title')}</h2>
                <p>{t('business.text1')}</p>
                <p>{t('business.text2')}</p>
                <p><a href="#">{t('global.learn')}</a></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-30 pb-30">
        <Container>
          <Row>
            <Col lg={6} sm={6}>
              <div className="user-interact-inner">
                <h2>{t('mining.title')}</h2>
                <ul>
                  <li>{t('mining.token-type')}</li>
                  <li>{t('mining.token-name')}</li>
                  <li>{t('mining.init')}{t('mining.start-text')}</li>
                  <li>{t('mining.model')}{t('mining.model-text')}</li>
                  <li>{t('mining.method')}</li>
                  <li>{t('mining.method-text1')}</li>
                  <li>{t('mining.method-text2')}</li>
                </ul>
                <a href="#">{t('global.learn')}</a>
              </div>
            </Col>
            <Col lg={6} sm={6}>
              <div className="user-interact-inner">
                <h2>{t('governance.title')}</h2>
                <ul>
                  <li>{t('governance.token-type')}</li>
                  <li>{t('governance.token-name')}</li>
                  <li>{t('governance.total')}{t('governance.total-text')}</li>
                  <li>{t('governance.model')}</li>
                  <li>{t('governance.model-text-1')}</li>
                  <li>{t('governance.model-text-2')}</li>
                  <li>{t('governance.method')}</li>
                  <li>{t('governance.method-text')}</li>
                </ul>
                <a href="#">{t('global.learn')}</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeSections;