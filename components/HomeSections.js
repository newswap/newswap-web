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
      <section className="pt-120 pb-120">
        <Container>
          <Row>
            <Col lg={7} sm={7}>
              <div className="user-interact-image">
                <img src={img1} alt="" />
              </div>
            </Col>
            <Col lg={5} sm={5}>
              <div className="user-interact-inner">
                <h2>流动性挖矿</h2>
                <ul>
                  <li>初始总量：0</li>
                  <li>发行模型：永续发行</li>
                  <li>挖矿方法：</li>
                  <li>流动性提供者: 向指定的 NewSwap 流动性池中提供流动性，并换购0.1%的 NSP，把流动性代币和 NSP（999:1）打入挖矿合约挖 NST。</li>
                  <li>NSP 持有者: 在治理合约中锁定NSP参与治理可挖NST。</li>
                </ul>
                <a href="#">{t('global.learn')}</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-120 pb-120">
        <Container>
          <Row>
            <Col lg={5} sm={5}>
              <div className="user-interact-inner">
                <h2>社群治理</h2>
                <p><strong>治理代币 NSP (NewSwap Power) - NewSwap 的“股份”</strong></p>
                <ul>
                  <li>发行总量：100万</li>
                  <li>发行总量：100万</li><li>发行模型：- 50% = 募资 - 50% = 形成 NSP/NewUSD 流动池</li>
                  <li>锁仓NSP可以参与投票治理。（Coming Soon）</li>
                </ul>
                <a href="#">{t('global.learn')}</a>
              </div>
            </Col>
            <Col lg={7} sm={7}>
              <div className="user-interact-image type2">
                <img src={img1} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeSections;
