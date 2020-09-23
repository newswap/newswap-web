import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Autoplay]);

import FeatureCard from "./FeatureCard";

import img1 from "../assets/img/icons/project-management.svg";
import img2 from "../assets/img/icons/solution.svg";
import img3 from "../assets/img/icons/planning.svg";
import img4 from "../assets/img/icons/goal.svg";



const FEATURES_DATA = [
  {
    title: "安全可靠",
    text:
      "在安全可靠的牛顿公链 NewChain 上运行",
    image: img1
  },
  {
    title: "快速低成本",
    text:
      "极快的交易确认速度和低廉的手续费成本",
    image: img2
  },
  {
    title: "便捷易用",
    text:
      "低门槛、便捷易用的操作体验",
    image: img4
  },
  {
    title: "自动化",
    text:
      "拥有自动化做市商，系统定价",
    image: img3
  },
  {
    title: "多资产跨链",
    text:
      "支持多种跨链资产和牛顿生态项目通证交易",
    image: img1
  },
  {
    title: "双通证挖矿",
    text:
      "基于双通证设计的流动性挖矿机制",
    image: img2
  },
  ,
  {
    title: "社群治理",
    text:
      "由社群共同参与投票治理",
    image: img3
  }
];

const Features = () => {
  const swiperParams = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: "#features-paginations",
      type: "bullets",
      clickable: true
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      575: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2
      },
      991: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      992: {
        slidesPerGroup: 3,
        slidesPerView: 3
      }
    }
  };
  return (
    <section className="pb-110" id="features">
      <Container>
        <Row className="justify-content-center">
          <Col xl={12} lg={12}>
            <Swiper className="feature-carousel" {...swiperParams}>
              {FEATURES_DATA.map((feature, index) => (
                <SwiperSlide key={`feature-post-${index}`}>
                  <FeatureCard
                    title={feature.title}
                    text={feature.text}
                    image={feature.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              id="features-paginations"
              className="swiper-pagination d-flex justify-content-center align-items-center"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
