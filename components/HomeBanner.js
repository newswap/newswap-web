import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation, Trans, Translation } from 'react-i18next'





const HomeBanner = () => {
  let { t ,i18n} = useTranslation();
  return (
    <div className="banner-area-inner">
      <div className={`banner-inner-area`}>
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={10} xl={10}>
              <div className="banner-text-inner text-center">
                <h1 data-i18n="[html]content.body">{t('home s1 1')}</h1>
                <h3>{t('home s1 3')}</h3>
                <p>{t('home s1 2')}</p>
                <p>
                  <a href="#" className="btn">{t('global.trade')}</a>
                  <a href="#" className="btn">{t('global.farm')}</a>
                  <a href="#" className="btn">{t('global.newton extension')}</a>
                  <a href="#" className="btn">NewPay App</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeBanner;
