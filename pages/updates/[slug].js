import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import ErrorPage from "next/error";
import { useTranslation, Trans, Translation } from "react-i18next";

import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import PostBody from "../../components/PostBody";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  let { t, i18n } = useTranslation();
  return (
    <Layout pageTitle={post.title + " - " + t("global.site title")}>
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
                          <a href="#">{post.title}</a>
                        </h3>
                        <p>{post.date}</p>
                      </div>
                      <PostBody content={post.content} />
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

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
