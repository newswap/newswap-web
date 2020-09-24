import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation, Trans, Translation } from 'react-i18next'
import ScrollableAnchor from 'react-scrollable-anchor'

const HomeSections = () => {
  let { t ,i18n} = useTranslation();
  return (
    <>
      <section className="-border-top pt-60 pb-30 bg-2- business-model economic-model-start">
        <Container>
          <Row className="justify-content-center">
            <Col md={9} lg={9}>
              <div className="text-left user-interact-inner">
                <h2>{t('business.title')}</h2>
                <ul>
                  <li>{t('business.text1')}</li>
                  <li>{t('business.text2')}</li>
                  <li>{t('business.text3')}</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="pt-30 pb-30 business-model" id="section1">
        <Container>
          <Row>
            <Col lg={6} sm={6} className="model-card">
              <div className="user-interact-inner">
                <ScrollableAnchor id={'home-nst'}>
                  <h2 id="home-nst">{t('mining.title')}</h2>
                </ScrollableAnchor>
                <ul>
                  <li><strong>{t('mining.token-type')}: {t('mining.token-name')}</strong></li>
                  <li><strong>{t('mining.init')}</strong>{t('mining.init-text')}</li>
                  <li><strong>{t('mining.model')}</strong>{t('mining.model-text')}</li>
                  <li><strong>{t('mining.method')}</strong>{t('mining.method-text1')}</li>
                </ul>
              </div>
            </Col>
            <Col lg={6} sm={6} className="model-card">
              <div className="user-interact-inner">
                <ScrollableAnchor id={'home-nsp'}>
                  <h2 id="home-nsp">{t('governance.title')}</h2>
                </ScrollableAnchor>
                <ul>
                  <li><strong>{t('governance.token-type')}: {t('governance.token-name')}</strong></li>
                  <li><strong>{t('governance.total')}</strong>{t('governance.total-text')}</li>
                  <li><strong>{t('governance.model')}</strong>{t('governance.model-text-1')}</li>
                  <li><strong>{t('governance.method')}</strong>{t('governance.method-text')}</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeSections;