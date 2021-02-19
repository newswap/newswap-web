import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { useTranslation, Trans, Translation } from "react-i18next";

var pageDescription = "Apply for Community LP Mining. 申请社群 LP 挖矿。";

var cmf_testnet_en = "https://forms.gle/uKSY8m3qPa1WVQ7r5";
var cmf_testnet_zh = "https://wj.qq.com/s2/8071142/c4ac/";
var cmf_mainnet_en = "#";
var cmf_mainnet_zh = "https://wj.qq.com/s2/8013861/aaa9";

let cmf_url_en = "";
let cmf_url_zh = "";
let apply_chain = "";

if (process.env.NEXT_PUBLIC_ENV_NOTICE == "") {
  cmf_url_en = cmf_mainnet_en;
  cmf_url_zh = cmf_mainnet_zh;
  apply_chain = "";
} else {
  cmf_url_en = cmf_testnet_en;
  cmf_url_zh = cmf_testnet_zh;
  apply_chain = " (Testnet)";
}

const PostDetails = () => {
  let { t, i18n } = useTranslation();
  return (
    <Layout
      pageTitle={
        t("pages.apply community mining") + " - " + t("global.site title")
      }
      pageDescription={pageDescription}
    >
      <Header />
      <MobileMenu />
      <section className="pt-150 pb-30">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="post-details-inner">
                <div className="single-post-inner">
                  <div className="post-content">
                    <div className="post-details">
                      <div className="post-title">
                        <h3>{t("pages.apply community mining")}</h3>
                      </div>
                      <p>
                        Newton NEP-40 proposes to divide the community mining of
                        60 billion NEW into three stages. The first stage is
                        based on the original consensus mechanism for mining,
                        and the second stage adds mining types and determines
                        their respective budgets. Among them, NUSDT-NEW trading
                        pair liquidity mining has been launched. The community
                        token-NEW trading pair liquidity mining is now open for
                        applying.
                      </p>
                      <p>
                        <a
                          href={cmf_url_en}
                          target="_blank"
                          className="btn small"
                          rel="noreferrer"
                        >
                          Application Form{apply_chain}
                        </a>
                      </p>
                      <hr />
                      <p>
                        牛顿NEP-40决议将600亿NEW的社群挖矿分成3个阶段，第一个阶段按照原共识机制挖矿，第二阶段新增挖矿类型并确定各自预算。其中NUSDT
                        –
                        NEW交易对流动性挖矿已上线。现开放社群通证-NEW交易对流动性挖矿申请。
                      </p>
                      <p>
                        <a
                          href={cmf_url_zh}
                          target="_blank"
                          className="btn small"
                          rel="noreferrer"
                        >
                          填写申请表{apply_chain}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default PostDetails;
