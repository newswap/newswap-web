import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";

import HomeBanner from "../components/HomeBanner";
import HomeSections from "../components/HomeSections";
import HomeLPPools from "../components/HomeLPPools";
import HomeCommunityPools from "../components/HomeCommunityPools";
import AboutNewton from "../components/AboutNewton";
import Footer from "../components/Footer";
import { useTranslation, Trans, Translation } from "react-i18next";

const HomePage = () => {
  let { t, i18n } = useTranslation();

  return (
    <Layout pageTitle={t("global.home site title")}>
      <Header />
      <MobileMenu />
      <HomeBanner />
      <HomeLPPools />
      <HomeCommunityPools />
      <HomeSections />
      <AboutNewton />
      <Footer />
    </Layout>
  );
};

export default HomePage;
