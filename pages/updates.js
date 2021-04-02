import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useTranslation, Trans, Translation } from "react-i18next";
import Posts from "../components/PostsList";
import { getAllPosts } from "../lib/api";
import { useState, useEffect } from "react";

export default function Index({ allPosts }) {
  let { t, i18n } = useTranslation();
  const listPosts = allPosts;

  const getLanguage = () => {
    let language = i18n.language;
    let languageCss;
    if (language.indexOf("zh") > -1) {
      languageCss = "content-zh";
    } else {
      languageCss = "content-en";
    }
    return languageCss;
  };
  const [language, setlanguage] = useState("content-en");
  useEffect(() => {
    setlanguage(getLanguage());
  }, [i18n.language]);

  return (
    <Layout pageTitle={t("pages.updates") + " - " + t("global.site title")}>
      <Header />
      <MobileMenu />
      <section className="pt-150 pb-30">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="post-details-inner">
                <div className="single-post-inner">
                  <div className={"post-content " + language}>
                    <div className="post-details">
                      <div className="post-title">
                        <h3>{t("pages.updates")}</h3>
                      </div>
                      {listPosts.length > 0 && <Posts posts={listPosts} />}
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
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "description",
    "language",
  ]);

  return {
    props: { allPosts },
  };
}
