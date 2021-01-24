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
  {
    name: "NewETH",
    symbol: "NETH",
    newAddr: "NEW182M3EkuUjCqqWXoeaDiAiDSgw8b8pomEjFz",
    rawAddr: "0x57B8154cb20D8a99a0d4aC55db3bcd19f61Baa5B",
  },
  {
    name: "NewUSDC",
    symbol: "NUSDC",
    newAddr: "NEW182KZu5fCaBgbYDdQ6AZ1z4DcJBrSA1fq1DW",
    rawAddr: "0x47944D1B9758424eb628dB7E2daA5F522745310D",
  },
  {
    name: "NewHT",
    symbol: "NHT",
    newAddr: "NEW182Zez1DHqZYy4dGBUczxHfvMV2pMvYp8vUZ",
    rawAddr: "0xe21C4074562D473e8fad1311dB018d6Ff94a5Fa4",
  },
  {
    name: "NewOKB",
    symbol: "NOKB",
    newAddr: "NEW182a15c6vU8ULtrCeqSJ66bos4hPHe2enBqi",
    rawAddr: "0xe5E93F385bBebc4656FBA1b3faFF2B5C9B761EA0",
  },
  {
    name: "NewBNB",
    symbol: "NBNB",
    newAddr: "NEW182KPeMW6TsEDvcoUy9jCeFvX9BbX88VQbmw",
    rawAddr: "0x45A3d925d5A4bF0d49412aE6c011C5B5E883D312",
  },
  {
    name: "NewUNI",
    symbol: "NUNI",
    newAddr: "NEW182YwjjS5jbjaXyzFVw41rRwGcy8FYsKx7Ep",
    rawAddr: "0xdA4f489BBCDBb7ADe39AD60205bd64b38C1c2A40",
  },
  {
    name: "NewYFI",
    symbol: "NYFI",
    newAddr: "NEW182VHvpjrHnXGLcXP9eeh5wuGtVVBiBfrJvD",
    rawAddr: "0xB2405bC26f68A49D52C722d6Ddc9902AB8dC30c7",
  },
];

const PostDetails = () => {
  let { t, i18n } = useTranslation();
  return (
    <Layout
      pageTitle={
        t("tokens.Cross-chain Assets Title") + " - " + t("global.site title")
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
          <Row>
            <Col lg={12}>
              <p>
                {t("tokens.Cross-chain assets description")}{" "}
                <a
                  className="dl"
                  href="https://newbridge.network"
                  target="_blank"
                  rel="noreferrer"
                >
                  NewBridge.Network
                </a>
              </p>
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
