import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import TokenCard from "../../components/Token/TokenCard";
import Link from "next/link";
import { useTranslation, Trans, Translation } from "react-i18next";

const ASSETS_DATA = [
  {
    name: "NewUSDT",
    symbol: "NUSDT",
    newAddr: "NEW182KyB88zPM6t5567Sg3JmcpN6XA9wKJtcCS",
    rawAddr: "0x4BFB4297f9C28a373aE6ae58a8f8EfeFF334cae8",
  },
  {
    name: "NewBTC",
    symbol: "NBTC",
    newAddr: "NEW182Gfb5YtvKqypNQRoMM6EgStgC76YF3yD9T",
    rawAddr: "0x27bf64753db1aB9fB88C80F6911F1e9410F0DD1a",
  },
];

const PostDetails = () => {
  let { t, i18n } = useTranslation();
  return (
    <Layout
      pageTitle={
        t("tokens.Cross-chain Assets Title") +
        " - " +
        t("global.site title")
      }
    >
      <Header />
      <MobileMenu />
      <section className="pt-150 pb-30">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 style={{ textAlign: "center" }}>
                {t("tokens.Cross-chain Assets Title")}
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="justify-content-center">
            {ASSETS_DATA.map((token, index) => (
              <Col lg={3} key={`token-card-${index}`}>
                <TokenCard
                  name={token.name}
                  symbol={token.symbol}
                  newAddr={token.newAddr}
                  rawAddr={token.rawAddr}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default PostDetails;
