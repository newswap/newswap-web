import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import markdown_en from "../faq/faq.en.md";
import markdown_cn from "../faq/faq.cn.md";

import { useTranslation, Trans, Translation } from "react-i18next";

const content_en = unified()
  .use(parse)
  .use(remark2react)
  .processSync(markdown_en).result;

const content_cn = unified()
  .use(parse)
  .use(remark2react)
  .processSync(markdown_cn).result;

const PostDetails = () => {
  let { t, i18n } = useTranslation();
  return (
    <Layout pageTitle={t("pages.faq") + " - " + t("global.site title")}>
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
                        <h3>{t("global.faq")}</h3>
                      </div>
                      <p>
                        <a href="#content-en">English</a> |{" "}
                        <a href="#content-cn">中文</a>
                      </p>
                      <div id="content-en">{content_en}</div>
                      <div id="content-cn">{content_cn}</div>
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
