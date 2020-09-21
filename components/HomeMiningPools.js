import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomeMiningPools = () => {
  return (
    <section className="border-top pt-110 pb-150">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={10}>
            <div className="text-center">
              <h2 className="h1">
                矿池
              </h2>
              <ul>
                <li>NEW/NUSD 计划于 NewSwap v1.1 开通</li>
                <li>ETH/NEW coming soon</li>
                <li>BTC/NEW coming soon</li>
                <li>HT/NEW coming soon</li>
                <li>BNB/NEW coming soon</li>
                <li>OKB/NEW coming soon</li>
                <li>YFI/NEW coming soon</li>
                <li>UNI/NEW coming soon</li>
              </ul>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeMiningPools;
