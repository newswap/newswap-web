import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img2 from "../assets/img/feature/user-interact.png";

const HomeSections3 = () => {
  return (
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
              <a href="#" className="btn">
                了解更多
              </a>
            </div>
          </Col>
          <Col lg={7} sm={7}>
            <div className="user-interact-image type2">
              <img src={img2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSections3;
