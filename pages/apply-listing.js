import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { useTranslation, Trans, Translation } from 'react-i18next'

var pageDescription = "Apply to be listed in NewSwap Default Token List. 申请加入 NewSwap 默认通证列表。"

const PostDetails = () => {
  let { t ,i18n} = useTranslation();
  return (
    <Layout pageTitle={t('pages.apply-listing') + ' - ' + t('global.site title')}  pageDescription={pageDescription}>
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
                        <h3>
                          {t('global.apply listing')}
                        </h3>
                      </div>
                      <h4>English</h4>
                      <p>
                      NewSwap is a decentralized trading protocol based on Newton's public chain NewChain, which realizes fast and safe exchange between NEW and NRC6 tokens issued based on NewChain, and between NRC6 tokens. After passing the review, the applicant will receive the listing information email, and can create a trading pair on NewSwap. Finally, the review will be done by the community.
                      </p>
                      <p><a href="https://forms.gle/HBBs31Fi98gmajJd9" target="_blank" className="btn small">Application Form</a></p>
                      <h4>中文</h4>
                      <p>
                      NewSwap是基于牛顿公链NewChain的去中心化交易协议，实现NEW和基于NewChain发行的NRC6 通证之间、NRC6通证之间的快速安全兑换。通过审核后申请人将收到上线信息邮件，即可在NewSwap上创建交易对，审核将社群治理化。
                      </p>
                      <p><a href="https://wj.qq.com/s2/7238184/79cd/" target="_blank" className="btn small">填写申请表</a></p>
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
