import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomeSections = () => {
  return (
    <section className="border-top pt-110 pb-150">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={10}>
            <div className="text-center">
              <h2 className="h1">
                经济模型
              </h2>
              <h3>
                <p>NewSwap 中的通证价格由系统定价，在 NewSwap 中发生的所有交易将收取 0.3% 的交易手续费，所有的手续费都提供给协议的流动性提供者，交易平台不收取任何手续费。</p>
                <p>其中，交易中的 0.25% 将直接分配给流动性提供者，0.05% 将进入流动性收益池，以流动性通证的形式支撑收益代币NewSwap Token(NST) 的价值。</p>
                <p><a href="#">了解更多</a></p>
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSections;
