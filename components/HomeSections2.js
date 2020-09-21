import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../assets/img/feature/user-interact.png";

const HomeSections2 = () => {
  return (
    <section className="bg-2 pt-120 pb-120">
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
              <a href="#" className="btn">
                了解更多
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSections2;
