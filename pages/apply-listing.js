import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { useTranslation, Trans, Translation } from "react-i18next";

var pageDescription =
  "Apply to be listed in NewSwap Default Token List. 申请加入 NewSwap 默认通证列表。";

const PostDetails = () => {
  let { t, i18n } = useTranslation();
  return (
    <Layout
      pageTitle={t("pages.apply-listing") + " - " + t("global.site title")}
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
                        <h3>{t("global.apply listing")}</h3>
                      </div>
                      <h4>Apply for Token Listing</h4>
                      <p>
                        NewSwap is a decentralized trading protocol based on
                        Newton's public chain NewChain, which realizes fast and
                        safe exchange between NEW and NRC6 tokens issued based
                        on NewChain, and between NRC6 tokens. After submmitting,
                        the applicant will receive the email about the reviewing
                        result. Finally, the review will be done by the
                        community.
                      </p>
                      <p>
                        <a
                          href="https://forms.gle/HBBs31Fi98gmajJd9"
                          target="_blank"
                          className="btn small"
                          rel="noreferrer"
                        >
                          Token Listing Form
                        </a>
                      </p>
                      <h4>Apply for Community Mining Listing</h4>
                      <p>
                        Apply for your community to join the Community Mining.
                      </p>
                      <p>
                        <em>Link To Be Updated</em>
                      </p>
                      <hr />
                      <h4>申请加入交易通证列表</h4>
                      <p>
                        NewSwap是基于牛顿公链NewChain的去中心化交易协议，实现NEW和基于NewChain发行的NRC6通证之间、NRC6通证之间的快速安全兑换。提交审核后申请人将收到反馈邮件，通过后通证将在NewSwap通证列表中显示。
                      </p>
                      <p>
                        <a
                          href="https://wj.qq.com/s2/7238184/79cd/"
                          target="_blank"
                          className="btn small"
                          rel="noreferrer"
                        >
                          加入交易通证列表申请表
                        </a>
                      </p>
                      <h4>申请加入社群挖矿列表</h4>
                      <p>
                        牛顿NEP-40决议将600亿NEW的社群挖矿分成3个阶段，第一个阶段按照原共识机制挖矿，第二阶段新增挖矿类型并确定各自预算。其中NUSDT
                        –
                        NEW交易对流动性挖矿已上线。现开放社群通证-NEW交易对流动性挖矿申请。
                      </p>
                      <p>
                        <a
                          href="https://wj.qq.com/s2/8013861/aaa9/"
                          target="_blank"
                          className="btn small"
                          rel="noreferrer"
                        >
                          加入社群挖矿申请表
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
