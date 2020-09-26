import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useTranslation, Trans, Translation } from 'react-i18next'


const PostDetails = () => {
  let { t ,i18n} = useTranslation();
  return (
    <Layout pageTitle={t('pages.tools') + ' - ' + t('global.site title')}>
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
                        <h3>{t('global.tools')}</h3>
                      </div>
                      <h4>NewPay Mobile App</h4>
                      <p>Supports iOS/Android</p>
                      <p>
                        <Link href={process.env.NEXT_PUBLIC_NEWPAY_URL}>
                          <a target="_blank" className="btn small">Visit Download Page</a>
                        </Link>
                      </p>
                      <h4>Newton Browser Extension</h4>
                      <p>Supports Google Chrome/Firefox</p>
                      <p>
                        <Link href={process.env.NEXT_PUBLIC_NEWTONEXTENSION_FIREFOX_URL}>
                          <a target="_blank" className="btn small">Download for Firefox Browser</a>
                        </Link>
                      </p>
                      <h4>NewAsset Generator</h4>
                      <p>Currently supports issuing NRC6 Assets</p>
                      <p>
                        <Link href={process.env.NEXT_PUBLIC_NEWASSET_GENERATOR_URL}>
                          <a target="_blank" className="btn small">Visit</a>
                        </Link>
                      </p>
                      
                      <h4>NewPay 手机 App</h4>
                      <p>支持 苹果 iOS 与 安卓 Android</p>
                      <p>
                        <Link href={process.env.NEXT_PUBLIC_NEWPAY_URL}>
                          <a target="_blank" className="btn small">访问下载页面</a>
                        </Link>
                      </p>
                      <h4>牛顿浏览器插件</h4>
                      <p>支持 谷歌 Chrome 与 火狐 Firefox 浏览器</p>
                      <p>
                        <Link href={process.env.NEXT_PUBLIC_NEWTONEXTENSION_FIREFOX_URL}>
                          <a target="_blank" className="btn small">下载 Firefox 火狐浏览器插件</a>
                        </Link>
                      </p>
                      <h4>NewAsset Generator</h4>
                      <p>现在支持发行 NRC6 通证资产</p>
                      <p>
                        <Link href={process.env.NEXT_PUBLIC_NEWASSET_GENERATOR_URL}>
                          <a target="_blank" className="btn small">访问网站</a>
                        </Link>
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
