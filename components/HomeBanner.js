import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useTranslation, Trans, Translation } from "react-i18next";

const HomeBanner = () => {
  let { t, i18n } = useTranslation();
  return (
    <div className="banner-area-inner  home-main-banner pb-0">
      <div className={`banner-inner-area`}>
        <Container>
          <Row className="justify-content-center">
            <Col md={12} lg={12} xl={12}>
              <div className="banner-text-inner text-center">
                <h1 data-i18n="[html]content.body">{t("slogan.home s1 1")}</h1>
                <h3>{t("slogan.home s1 3")}</h3>
                <Row className="justify-content-center">
                  <Col md={10} lg={10} xl={10}>
                    <p>{t("slogan.home s1 2")}</p>
                  </Col>
                </Row>
                <p>
                  <Link href={process.env.NEXT_PUBLIC_NEWSWAP_APP_URL}>
                    <a className="btn">{t("global.trade")}</a>
                  </Link>
                  <Link href={process.env.NEXT_PUBLIC_NEWSWAP_MINING_URL}>
                    <a className="btn">{t("global.gomining")}</a>
                  </Link>
                </p>
                <p>
                  <Link href="./tools">
                    <a className="dl">{t("global.newton extension")}</a>
                  </Link>
                  <Link href={process.env.NEXT_PUBLIC_NEWPAY_URL}>
                    <a className="dl" target="_blank">
                      NewPay App
                    </a>
                  </Link>
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={12} lg={12} xl={12}>
              <div className="banner-text-inner text-center">
                <h2 data-i18n="[html]content.body">
                  {t("cny-trade-mining.title")}
                </h2>
                <h4>{t("cny-trade-mining.desc")}</h4>
                <p>{t("cny-trade-mining.tagline")}</p>
                <Link
                  href={
                    process.env.NEXT_PUBLIC_NEWSWAP_MINING_URL + "/tradeMining"
                  }
                >
                  <a className="btn">{t("cny-trade-mining.btn")}</a>
                </Link>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center swap-f">
            <Col md={4} lg={4} xl={4} className="swap-f-box text-center">
              <div>
                <h4>{t("features.feature1")}</h4>
                {t("features.text1")}
              </div>
            </Col>
            <Col md={4} lg={4} xl={4} className="swap-f-box text-center">
              <div>
                <h4>{t("features.feature2")}</h4>
                {t("features.text2")}
              </div>
            </Col>
            <Col md={4} lg={4} xl={4} className="swap-f-box text-center">
              <div>
                <h4>{t("features.feature3")}</h4>
                {t("features.text3")}
              </div>
            </Col>
            <Col md={4} lg={4} xl={4} className="swap-f-box text-center">
              <div>
                <h4>{t("features.feature5")}</h4>
                {t("features.text5")}
              </div>
            </Col>
            <Col md={4} lg={4} xl={4} className="swap-f-box text-center">
              <div>
                <h4>{t("features.feature6")}</h4>
                {t("features.text6")}
              </div>
            </Col>
            <Col md={4} lg={4} xl={4} className="swap-f-box text-center">
              <div>
                <h4>{t("features.feature7")}</h4>
                {t("features.text7")}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeBanner;
