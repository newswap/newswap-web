import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HomeSections from "../components/HomeSections";
import HomeSections2 from "../components/HomeSections2";
import HomeSections3 from "../components/HomeSections3";
import HomeMiningPools from "../components/HomeMiningPools";
import AboutNewton from "../components/AboutNewton";
import { useTranslation, Trans, Translation } from 'react-i18next'



const HomePage = () => {
  let { t ,i18n} = useTranslation()
  return (
    <Layout pageTitle="NewSwap">
      <Header />
      <MobileMenu />
      <Banner />
      <Features />
      <HomeSections />
      <HomeSections2 />
      <HomeSections3 />
      <HomeMiningPools />
      <AboutNewton />
      <Footer />
    </Layout>
  );
};

export default HomePage;
