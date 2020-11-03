import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { useTranslation, Trans, Translation } from "react-i18next";

const PostDetails = () => {
  let { t, i18n } = useTranslation();
  return (
    <Layout pageTitle={t("pages.faq") + " - " + t("global.site title")}>
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
                        <h3>{t("global.faq")}</h3>
                      </div>
                      <h4>1. What is NewSwap?</h4>
                      <p>NewSwap is an application protocol built on Newton&#39;s NewChain, which realizes the exchange between NEW and the NRC6 token issued based on NewChain. Any two NRC6 tokens can also be exchanged on it.</p>
                      <p>Its characteristics are: system automatic pricing, fast and convenient exchange process, each transaction fee is automatically transferred to the liquidity provider, decentralized, safe and reliable, users can fully control their assets by controlling their own private keys, and the threshold is extremely low. it has global liquidity.</p>
                      <h4>2. How does NewSwap work?</h4>
                      <p>NewSwap is an automatic liquidity agreement. There is no need to bid and match transactions, and there are no centralized organizations and facilities to guarantee transactions. Each trading pool is controlled by a smart contract, which supports operations such as the exchange of tokens and the increase or decrease of liquidity. Each fund pool uses the formula x*y=k to guarantee transactions. x=token 1, y=token 2, k=constant.</p>
                      <h4>3. What tokens are supported for exchange?</h4>
                      <p>It supports the exchange between NEW and NRC6 certificates, as well as the exchange between NRC6 and NRC6 tokens.</p>
                      <h4>4. What determines the price?</h4>
                      <p>The price is determined by the relative number of tokens in each fund pool. The smart contract maintains a constant formula: x*y=k, under this condition, x=token 1, y=token 2, k=constant. Each transaction will withdraw a certain number of tokens in exchange for the quantity of another token. During this period, the constant k remains unchanged and the balance is updated. Therefore, each transaction will adjust the balance of the token, thereby changing the price.</p>
                      <h4>5. Why does my exchange fail?</h4>
                      <p>If the slippage tolerance is set too small during exchange, the exchange will fail. You can increase the slippage tolerance through the advanced settings window when redeeming, and the wallet account should have enough balance to ensure the successful transaction.</p>
                      <h4>6. What is the NewSwap exchange fee?</h4>
                      <p>A transaction fee of 0.3% needs to be paid. After liquidity mining is started, 0.25% of the 0.3% transaction fee belongs to the token liquidity provider. The remaining 0.05% is used to support the value of NST. For example, if 1000 tokens A are exchanged for NEW, you need to pay 0.3% of 1000 tokens A namely 3 tokens of A as transaction fees, of which 2.5 tokens belong to the liquidity provider. To exchange 1000 NEW for token 2, you need to pay 3 NEW as a transaction fee.</p>
                      <h4>7. What is the initial price for creating a fund pool?</h4>
                      <p>The initial price is determined by the first person to create a capital pool and increase liquidity. If the price is unreasonable, users will transfer more to fill in the price difference.</p>
                      <h4>8. How to calculate the token ratio for adding/deleting fund pools?</h4>
                      <p>When adding/deleting the liquidity of an asset pool, it needs to be added or deleted according to the ratio of the number of tokens and NEW in the current fund pool. For example, the number of tokens in the fund pool: NEW number=1:100, the ratio of the number of tokens you add and delete to NEW must be 1:100.</p>
                      <h4>9. How to issue a token and to be listed on NewSwap Default Token List?</h4>
                      <p>
                        First, use the NewChain token issuing tool NewGenerator to issue the token, open the link: <a href="https://newswap.org">newswap.org</a>, click &quot;NewGenerator&quot; in the “More”, and fill in the relevant information in the blanks.
                      </p>
                      <p>
                        After the issuance of the token, the token with the actual business model and purpose can apply for listing on NewSwap for trading. Open NewSwap official website <a href="https://newswap.org">newswap.org</a>, click &quot;Apply Listing for Default Token List&quot;, to submit your request.
                      </p>
                      <p>After passing the review, the applicant will receive the list information via email and be able to see the token in the Default Token List. Then create a trading pair and add a fund pool on NewSwap for other to be able to trade.</p>
                      <h4>10. Do I need to register an account?</h4>
                      <p>No need to register for an account. Personal computer users only need to create a decentralized wallet through the Chrome and Firefox browser extension Newton, and successfully connect it with NewSwap to use NewSwap. Mobile phone users can use NewSwap with NewPay 1.6 version.</p>
                      <h4>11. What are the contract addresses for NewSwap?</h4>
                      <p>
                        <strong>Factory</strong> contract is deployed at: 0x723913136a42684B5e3657e3cD2f67ee3e83A82D
                      </p>
                      <p>
                        <strong>WNEW</strong> contract is deployed at: 0xf4905b9bc02Ce21C98Eac1803693A9357D5253bf
                      </p>
                      <p>
                        <strong>Router</strong> contract is deployed at: 0x9e5A14dd31D1e7120eC45E6E4EfA287c94bCcf2f
                      </p>
                      <p>Addresses are the same for NewChain TestNet & MainNet.</p>
                      <h4>12. What is the contract address for NUSDT?</h4>
                      <p>
                        <strong>NUSDT</strong> contract is deployed at: 0x4BFB4297f9C28a373aE6ae58a8f8EfeFF334cae8
                      </p>
                      <p>Official NUSDT is only availble on NewChain MainNet.</p>

                      <hr />

                      <h4>1. 什么是 NewSwap?</h4>
                      <p>NewSwap 是构建在牛顿 NewChain 之上的一个应用层协议，实现 NEW 和基于 NewChain 发行的 NRC6 通证之间的兑换。任意两个 NRC6 的通证也可进行兑换。</p>
                      <p>其特点有：系统自动定价，兑换过程快速便捷，流动性提供者赚取交易手续费，去中心化和安全可靠，用户通过控制自己的私钥而完全掌握资产，门槛极低，无需注册即可使用，天然具备全球流动性等等。</p>
                      <h4>2. NewSwap 是如何运行的?</h4>
                      <p>NewSwap 是一个自动的流动性协议。不需要出价和撮合交易，没有任何中心化的组织和设施来保证交易。每个交易池均由智能合约控制，支持兑换通证，增减流动性等操作。每个资金池使用公式 x*y=k 来保证交易。x=通证1, y=通证2, k=常量。</p>
                      <h4>3. 兑换支持哪些通证?</h4>
                      <p>支持 NEW 和 NRC6 通证间的兑换，也支持 NRC6 和 NRC6 通证间的兑换。</p>
                      <h4>4. 价格是由什么决定的？</h4>
                      <p>价格是由每个资金池的通证相对数量决定。智能合约维持一个常量公式：x*y=k，在这个条件下，x=通证1, y=通证2, k=常量。每一笔交易，都会退出一定数量的通证，用来换取另一个通证的数量。这期间，常量 k 不变，余额更新。因此，每笔交易都会调整通证的数量余额，从而改变价格。</p>
                      <h4>5. 为什么我的兑换会失败?</h4>
                      <p>兑换时如果滑点容忍度设置的太小，会导致兑换失败。</p>
                      <p>您可以在兑换时通过高级设置窗口，将滑点容忍度调大，同时钱包账户应有足够的余额来确保交易成功。</p>
                      <h4>6. NewSwap兑换手续费是多少？</h4>
                      <p>需要支付 0.3% 的交易手续费，流动性挖矿开启后，交易手续费 0.3% 中的 0.25% 归属于通证流动性提供者，剩余 0.05% 用于支撑 NST 价值。例如用 1000 个通证A兑换 NEW，需要支付 1000 个A 的 0.3% 即通 3 个通证A做为交易手续费，其中 2.5 个 A 归属于流动性提供者。用 1000个 NEW 兑换通证2，需要支付 3 个 NEW 作为手续费。</p>
                      <h4>7. 创建资金池初始价格是多少？</h4>
                      <p>初始价格由第一个创建资金池并增加流动性的人确定，如果价格不合理，会有用户“搬砖”，填平价差。</p>
                      <h4>8. 添加/移除资金池的通证比例如何计算？</h4>
                      <p>添加/删除资产池流动性时，需要按照当前资金池的通证和 NEW 数量的比例（价格）进行增加和删除。例如资金池里通证数:NEW数=1:100，您增加和删除的通证和NEW数目比例必须是1:100。</p>
                      <h4>9. 如何发行一个通证并且申请加入 NewSwap 默认通证列表？</h4>
                      <p>
                        首先使用 NewChain 通证发行工具 NewAsset Generator 发行通证，请前往 <a href="https://newswap.org">newswap.org</a> 或者NewPay中“交易”页面。
                      </p>
                      <p>
                        发行出通证后，具备实际商业模式及用途的通证可申请加入 NewSwap 默认通证列表。打开 NewSwap 官网 <a href="https://newswap.org">newswap.org</a>
                        ，点击“更多” &gt; “申请加入通证列表“填写相关信息。
                      </p>
                      <p>通过审核后，申请人会通过邮件收到上线信息，则可在 NewSwap 上默认通证列表查看到该通证，并创建交易和并添加资金池。</p>
                      <h4>10. 我需要注册账号吗？</h4>
                      <p>无需注册账户。个人电脑用户只需要通过 Chrome 或 Firefox 浏览器扩展程序 Newton 创建去中心化钱包，将其与 NewSwap 成功连接即可使用 NewSwap。手机用户使用 NewPay 1.6 版本即可使用 NewSwap。</p>
                      <h4>11. NewSwap 相关合约地址是什么?</h4>
                      <p>
                        <strong>Factory</strong> 合约部署于：0x723913136a42684B5e3657e3cD2f67ee3e83A82D
                      </p>
                      <p>
                        <strong>WNEW</strong> 合约部署于：0xf4905b9bc02Ce21C98Eac1803693A9357D5253bf
                      </p>
                      <p>
                        <strong>Router</strong> 合约部署于：0x9e5A14dd31D1e7120eC45E6E4EfA287c94bCcf2f
                      </p>
                      <p>牛顿公链主网（MainNet）与测试网（TestNet）以上合约部署地址相同。</p>
                      <h4>12. NUSDT 的合约地址是什么?</h4>
                      <p>
                        <strong>NUSDT</strong> 合约部署于：0x4BFB4297f9C28a373aE6ae58a8f8EfeFF334cae8
                      </p>
                      <p>正式 NUSDT 仅在牛顿公链主网（NewChain MainNet）上流通。</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default PostDetails;
