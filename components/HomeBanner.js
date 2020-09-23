import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation, Trans, Translation } from 'react-i18next'


const HomeBanner = () => {
  let { t ,i18n} = useTranslation();
  return (
    <div className="banner-area-inner  home-main-banner pb-0">
      <div className={`banner-inner-area`}>
        <Container>
          <Row className="justify-content-center">
            <Col md={12} lg={12} xl={12}>
              <div className="banner-text-inner text-center">
                <h1 data-i18n="[html]content.body">{t('slogan.home s1 1')}</h1>
                <h3>{t('slogan.home s1 3')}</h3>
                <p>{t('slogan.home s1 2')}</p>
                <p>
                  <a href="#" className="btn">{t('global.trade')}</a>
                  <a href="#" className="btn">{t('global.gofarm')}</a>
                </p>
                <p>
                  <a href="#" className="dl">{t('global.newton extension')}</a> <a href="#" className="dl">NewPay App</a></p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center swap-f">
            <Col md={3} lg={3} xl={3} className="swap-f-box text-center">
              <div>
                <h4>{t('features.feature1')}</h4>
                {t('features.text1')}
              </div>
            </Col>
            <Col md={3} lg={3} xl={3} className="swap-f-box text-center">
              <div>
                <h4>{t('features.feature2')}</h4>
                {t('features.text2')}
              </div>
            </Col>
            <Col md={3} lg={3} xl={3} className="swap-f-box text-center">
              <div>
                <h4>{t('features.feature3')}</h4>
                {t('features.text3')}
              </div>
            </Col>
            <Col md={3} lg={3} xl={3} className="swap-f-box text-center">
              <div>
                <h4>{t('features.feature4')}</h4>
                {t('features.text4')}
              </div>
            </Col>
            <Col md={3} lg={3} xl={3} className="swap-f-box text-center">
              <div>
                <h4>{t('features.feature5')}</h4>
                {t('features.text5')}
              </div>
            </Col>
            <Col md={3} lg={3} xl={3} className="swap-f-box text-center">
              <div>
                <h4>{t('features.feature6')}</h4>
                {t('features.text6')}
              </div>
            </Col>
            <Col md={3} lg={3} xl={3} className="swap-f-box text-center">
              <div>
                <h4>{t('features.feature7')}</h4>
                {t('features.text7')}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeBanner;
