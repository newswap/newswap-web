import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";

import HomeBanner from "../components/HomeBanner";
import HomeSections from "../components/HomeSections";
import HomeMiningPools from "../components/HomeMiningPools";
import AboutNewton from "../components/AboutNewton";

import Footer from "../components/Footer";
import { useTranslation, Trans, Translation } from 'react-i18next'


const HomePage = () => {
  let { t ,i18n} = useTranslation()
  return (
    <Layout pageTitle="NewSwap">
      <Header />
      <MobileMenu />
      <HomeBanner />
      <HomeSections />
      <HomeMiningPools />
      <AboutNewton />
      <Footer />
    </Layout>
  );
};

export default HomePage;
