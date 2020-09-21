import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner-area-inner">
      <div className={`banner-inner-area`}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={8} xl={8}>
              <div className="banner-text-inner text-center">
                <h1>牛顿公链上的去中心化交换协议</h1>
                <p>
                NewSwap 在安全可靠的 NewChain 上运行，性能高、成本低，支持多种跨链资产和牛顿生态项目通证的交易，拥有自动化做市商和基于双通证设计的流动性挖矿机制，所有的手续费都提供给流动性提供者，并且由社群共同治理。
                </p>
                <p>
                  <a href="#" className="btn">交易</a>
                  <a href="#" className="btn">挖矿</a>
                  <a href="#" className="btn">下载 牛顿浏览器插件</a>
                  <a href="#" className="btn">下载 NewPay</a>
                </p>
                <h3>人人都可以发行、交易数字资产</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
