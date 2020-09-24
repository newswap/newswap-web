import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { useTranslation, Trans, Translation } from 'react-i18next'


const PostDetails = () => {
  let { t ,i18n} = useTranslation();
  return (
    <Layout pageTitle="FAQ">
      <Header />
      <MobileMenu />
      <section className="pt-150 pb-30">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="post-details-inner">
                <div className="single-post-inner">
                  <div className="post-content">
                    <div className="post-details">
                      <div className="post-title">
                        <h3>{t('global.faq')}</h3>
                      </div>
                      <h4>1. What is NewSwap?</h4>
                      <p>NewSwap is an application protocol built on Newton&#39;s NewChain, which realizes the exchange between NEW and the NRC6 token issued based on NewChain. Any two NRC6 tokens can also be exchanged on it.</p>
                      <p>Its characteristics are: system automatic pricing, fast and convenient exchange process, each transaction fee is automatically transferred to the liquidity provider, decentralized, safe and reliable, users can fully control their assets by controlling their own private keys, and the threshold is extremely low. it has global liquidity.</p>
                      <h4>2. How does NewSwap work?</h4>
                      <p>NewSwap is an automatic liquidity agreement. There is no need to bid and match transactions, and there are no centralized organizations and facilities to guarantee transactions. Each trading pool is controlled by a smart contract, which supports operations such as the exchange of tokens and the increase or decrease of liquidity. Each fund pool uses the formula x*y=k to guarantee transactions.</p>
                      <h4>3. What tokens are supported for exchange?</h4>
                      <p>It supports the exchange between NEW and NRC6 certificates, as well as the exchange between NRC6 and NRC6 tokens.</p>
                      <h4>4. What determines the price?</h4>
                      <p>The price is determined by the relative number of tokens in each fund pool. The smart contract maintains a constant formula: x*y=k, under this condition, x=token 1, y=token 2, k=constant. Each transaction will withdraw a certain number of tokens in exchange for the quantity of another token. During this period, the constant k remains unchanged and the balance is updated. Therefore, each transaction will adjust the balance of the token, thereby changing the price.</p>
                      <h4>5. Why does my exchange fail?</h4>
                      <p>If the slippage tolerance is set too small during exchange, the exchange will fail.
                      You can increase the slippage tolerance through the advanced settings window when redeeming, and the wallet account should have enough balance to ensure the successful transaction.</p>
                      <h4>6. What is the NewSwap exchange fee?</h4>
                      <p>A transaction fee of 0.3% needs to be paid. After liquidity mining is started, 0.25% of the 0.3% transaction fee belongs to the token liquidity provider. The remaining 0.05% is attributable to the NewSwap equity token NST. For example, if 1000 tokens A are exchanged for NEW, you need to pay 0.3% of 1000 tokens A to pass 3 tokens A as a transaction fee, of which 2.5 tokens belong to the liquidity provider and 0.5 tokens belong to the NST holder. To exchange 1000 NEW for Pass 2, you need to pay 3 NEW as a transaction fee.</p>
                      <h4>7. What is the initial price for creating a fund pool?</h4>
                      <p>The initial price is determined by the first person to create a capital pool and increase liquidity. If the price is unreasonable, users will transfer more to fill in the price difference.</p>
                      <h4>8. How to calculate the token ratio for adding/deleting fund pools?</h4>
                      <p>When adding/deleting the liquidity of an asset pool, it needs to be added or deleted according to the ratio of the number of tokens and NEW in the current fund pool. For example, the number of tokens in the fund pool: NEW number=1:100, the ratio of the number of tokens you add and delete to NEW must be 1:100.</p>
                      <h4>9. How to issue a token and apply to be listed on NewSwap?</h4>
                      <p>First, use the NewChain token issuing tool NewGenerator to issue the token, open the link: <a href='http://www.newswap.org' target='_blank' class='url'>http://www.newswap.org</a>, click &quot;NewGenerator&quot;, and fill in the relevant information in the blanks.</p>
                      <p>After the issuance of the token, the token with the actual business model and purpose can apply for listing on NewSwap for trading. Open NewSwap official website <a href='http://www.newswap.org' target='_blank' class='url'>http://www.newswap.org</a>, click &quot;Apply to go online&quot;, fill in the relevant information in the blanks.</p>
                      <p>After passing the review, the applicant will receive the list information via email and can create a trading pair and add a fund pool on NewSwap.</p>
                      <h4>10. Do I need to register an account?</h4>
                      <p>No need to register for an account. Personal computer users only need to create a decentralized wallet through the Chrome and Firefox browser extension Newton, and successfully connect it with NewSwap to use NewSwap. Mobile phone users can use NewSwap with NewPay 1.6 version.</p>

                      <hr />

                      <h4>1. 什么是 NewSwap?</h4>
                      <p>NewSwap 是构建在牛顿 NewChain 之上的一个应用层协议，实现 NEW 和基于 NewChain 发行的 NRC6 通证之间的兑换。任意两个 NRC6 的通证也可进行兑换。</p>
                      <p>其特点有：系统自动定价，兑换过程快速便捷，每笔交易手续费自动转至流动性提供者，去中心化和安全可靠，用户通过控制自己的私钥而完全掌握资产，门槛极低，无需注册即可使用，天然具备全球流动性等等。</p>
                      <h4>2. NewSwap 是如何运行的?</h4>
                      <p>NewSwap 是一个自动的流动性协议。不需要出价和撮合交易，没有任何中心化的组织和设施来保证交易。每个交易池均由智能合约控制，支持兑换通证，增减流动性等操作。每个资金池使用公式 x*y=k 来保证交易。</p>
                      <h4>3. 兑换支持哪些通证?</h4>
                      <p>支持 NEW 和 NRC6 通证间的兑换，也支持 NRC6 和 NRC6 通证间的兑换。</p>
                      <h4>4.	价格是由什么决定的？</h4>
                      <p>价格是由每个资金池的通证相对数量决定。智能合约维持一个常量公式：x*y=k，在这个条件下，x=通证1, y=通证2, k=常量。每一笔交易，都会退出一定数量的通证，用来换取另一个通证的数量。这期间，常量 k 不变，余额更新。因此，每笔交易都会调整通证的数量余额，从而改变价格。</p>
                      <h4>5. 为什么我的兑换会失败?</h4>
                      <p>兑换时如果滑点容忍度设置的太小，会导致兑换失败。</p>
                      <p>您可以在兑换时通过高级设置窗口，将滑点容忍度调大，同时钱包账户应有足够的余额来确保交易成功。</p>
                      <h4>6. NewSwap兑换手续费是多少？</h4>
                      <p>需要支付 0.3% 的交易手续费。流动性挖矿开启后，交易手续费 0.3% 中的 0.25% 归属于通证流动性提供者。剩余 0.05% 归属于 NewSwap 收益通证 NST 持有。例如用 1000 个通证 A 兑换 NEW，需要支付 1000 个 A 的 0.3% 即 3 个通证 A 做为手续费，其中 2.5 个 A 归属于流动性提供者，0.5个 A 归属 NST 持有者。用 1000 个 NEW 兑换通证 2 ，需要支付 3 个 NEW 作为手续费。</p>
                      <h4>7. 创建资金池初始价格是多少？</h4>
                      <p>初始价格由第一个创建资金池并增加流动性的人确定，如果价格不合理，会有用户“搬砖”，填平价差。</p>
                      <h4>8. 添加/移除资金池的通证比例如何计算？</h4>
                      <p>添加/删除资产池流动性时，需要按照当前资金池的通证和NEW数量的比例（价格）进行增加和删除。例如资金池里通证数:NEW数=1:100，您增加和删除的通证和NEW数目比例必须是1:100。</p>
                      <h4>9. 如何发行一个通证并且申请上线 NewSwap？</h4>
                      <p>首先使用 NewChain 通证发行工具 NewAsset Generator 发行通证，请前往 <a href='http://www.newswap.org' target='_blank' class='url'>http://www.newswap.org</a>。</p>
                      <p>发行出通证后，具备实际商业模式及用途的通证可申请上线 NewSwap 进行交易。打开 NewSwap 官网 <a href='http://www.newswap.org' target='_blank' class='url'>http://www.newswap.org</a>，点击“上币申请“，在空格处填写通过中文或者英文相关信息。</p>
                      <p>通过审核后，申请人会通过邮件收到上线信息，即可在 NewSwap 上创建交易对并添加资金池。</p>
                      <h4>10. 我需要注册账号吗？</h4>
                      <p>无需注册账户。个人电脑用户只需要通过 Chrome 或 Firefox 浏览器扩展程序 Newton 创建去中心化钱包，将其与 NewSwap 成功连接即可使用 NewSwap。手机用户使用 NewPay 1.6 版本即可使用 NewSwap。</p>
                    </div>
                  </div>
                </div>

              </div>
            </Col>
            <Col lg={3}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default PostDetails;
