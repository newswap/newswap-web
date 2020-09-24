import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { useTranslation, Trans, Translation } from 'react-i18next'


const PostDetails = () => {
  let { t ,i18n} = useTranslation();
  return (
    <Layout pageTitle="FAQ">
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
                        <h3>{t('global.faq')}</h3>
                      </div>
                      <div className="alert alert-info" role="alert">
                        English Version
                      </div>
                      <p>
                        placeholder
                      </p>

                      <div className="alert alert-info" role="alert">
                        中文版本
                      </div>
                      <p>
                        placeholder
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </Col>
            <Col lg={3}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default PostDetails;
