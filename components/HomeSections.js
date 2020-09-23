import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation, Trans, Translation } from 'react-i18next'

import img1 from "../assets/img/feature/user-interact.png";


const HomeSections = () => {
  let { t ,i18n} = useTranslation();
  return (
    <>
      <section className="-border-top pt-60 pb-60 bg-2- ">
        <Container>
          <Row className="justify-content-center">
            <Col md={12} lg={10}>
              <div className="text-center">
                <h2>
                  经济模型
                </h2>
                <p>NewSwap 中的通证价格由系统定价，在 NewSwap 中发生的所有交易将收取 0.3% 的交易手续费，所有的手续费都提供给协议的流动性提供者，交易平台不收取任何手续费。</p>
                <p>其中，交易中的 0.25% 将直接分配给流动性提供者，0.05% 将进入流动性收益池，以流动性通证的形式支撑收益代币NewSwap Token(NST) 的价值。</p>
                <p><a href="#">{t('global.learn')}</a></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-30 pb-30">
        <Container>
          <Row>
            <Col lg={6} sm={6}>
              <div className="user-interact-inner">
                <h2>{t('mining.title')}</h2>
                <ul>
                  <li>{t('mining.token-type')}</li>
                  <li>{t('mining.token-name')}</li>
                  <li>{t('mining.init')}{t('mining.start-text')}</li>
                  <li>{t('mining.model')}{t('mining.model-text')}</li>
                  <li>{t('mining.method')}</li>
                  <li>{t('mining.method-text1')}</li>
                  <li>{t('mining.method-text2')}</li>
                </ul>
                <a href="#">{t('global.learn')}</a>
              </div>
            </Col>
            <Col lg={6} sm={6}>
              <div className="user-interact-inner">
                <h2>{t('governance.title')}</h2>
                <ul>
                  <li>{t('governance.token-type')}</li>
                  <li>{t('governance.token-name')}</li>
                  <li>{t('governance.total')}{t('governance.total-text')}</li>
                  <li>{t('governance.model')}</li>
                  <li>{t('governance.model-text-1')}</li>
                  <li>{t('governance.model-text-2')}</li>
                  <li>{t('governance.method')}</li>
                  <li>{t('governance.method-text')}</li>
                </ul>
                <a href="#">{t('global.learn')}</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeSections;