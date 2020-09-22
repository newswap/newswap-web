import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TokenBTC from "../assets/img/tokens/btc.png";
import TokenETH from "../assets/img/tokens/eth.png";
import TokenNEW from "../assets/img/tokens/new.png";
import TokenUSDT from "../assets/img/tokens/usdt.png";
import TokenHT from "../assets/img/tokens/ht.png";
import TokenBNB from "../assets/img/tokens/bnb.png";
import TokenOKB from "../assets/img/tokens/okb.png";
import TokenYFI from "../assets/img/tokens/yfi.png";
import TokenUNI from "../assets/img/tokens/uni.png";

const HomeMiningPools = () => {
  return (
    <section className="pt-110 pb-150">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={10}>
            <div className="text-center">
              <h2 className="h1">
                矿池
              </h2>
            </div>
          </Col>
          <Col md={3} lg={3}>
            <div className="text-center pool-card">
              <div><img src={TokenNEW} alt="" /> <img src={TokenUSDT} alt="" /></div>
              <h4>NEW-NUSD</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">计划于 NewSwap v1.1 开通</a>
            </div>
          </Col>
          <Col md={3} lg={3}>
            <div className="text-center pool-card">
              <div><img src={TokenETH} alt="" /> <img src={TokenNEW} alt="" /></div>
              <h4>ETH-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">Coming Soon</a>
            </div>
          </Col>
          <Col md={3} lg={3}>
            <div className="text-center pool-card">
              <div><img src={TokenBTC} alt="" /> <img src={TokenNEW} alt="" /></div>
              <h4>BTC-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">Coming Soon</a>
            </div>
          </Col>
          <Col md={3} lg={3}>
            <div className="text-center pool-card">
              <div><img src={TokenHT} alt="" /> <img src={TokenNEW} alt="" /></div>
              <h4>HT-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">Coming Soon</a>
            </div>
          </Col>
          <Col md={3} lg={3}>
            <div className="text-center pool-card">
              <div><img src={TokenBNB} alt="" /> <img src={TokenNEW} alt="" /></div>
              <h4>BNB-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">Coming Soon</a>
            </div>
          </Col>
          <Col md={3} lg={3}>
            <div className="text-center pool-card">
              <div><img src={TokenOKB} alt="" /> <img src={TokenNEW} alt="" /></div>
              <h4>OKB-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">Coming Soon</a>
            </div>
          </Col>
          <Col md={3} lg={3}>
            <div className="text-center pool-card">
              <div><img src={TokenYFI} alt="" /> <img src={TokenNEW} alt="" /></div>
              <h4>YFI-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">Coming Soon</a>
            </div>
          </Col>
          <Col md={3} lg={3}>
            <div className="text-center pool-card">
              <div><img src={TokenUNI} alt="" /> <img src={TokenNEW} alt="" /></div>
              <h4>UNI-NEW</h4>
              <p className="apy">APY: -</p>
              <a href="#" className="btn soon">Coming Soon</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeMiningPools;
