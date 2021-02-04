import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footerLogo from "../assets/img/logo.svg";
import { useTranslation, Trans, Translation } from "react-i18next";

const Footer = () => {
  let { t, i18n } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-top pt-80">
        <div className="container">
          <Row className="justify-content-center">
            <Col md={12} lg={12} xl={12}>
              <div className="invest-warning">{t("global.invest warning")}</div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-text text-center">
          <p>{process.env.NEXT_PUBLIC_ENV_NOTICE}© 2021 NewSwap</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
