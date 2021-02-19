import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation, Trans, Translation } from "react-i18next";
import Link from "next/link";

import CommunityPoolCard from "../components/Pools/CommunityPoolCard";
import TokenUNKNOWN from "../assets/img/tokens/unknown.png";
import TokenNEW from "../assets/img/tokens/new.png";
import TESTNET_POOL_DATA from "../data/community_pool_testnet.json";
import MAINNET_POOL_DATA from "../data/community_pool_mainnet.json";

let POOL_DATA = TESTNET_POOL_DATA;
let chain_id = "1007";

if (process.env.NEXT_PUBLIC_ENV_NOTICE == "") {
  POOL_DATA = MAINNET_POOL_DATA;
  chain_id = "1012";
}

const HomeCommunityPools = () => {
  let { t, i18n } = useTranslation();

  return (
    <section className="pb-40">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={10}>
            <div className="user-interact-inner text-center">
              <h2 className="h1">{t("mining.community pools")}</h2>
            </div>
          </Col>
          {POOL_DATA.map((pool, index) => (
            <CommunityPoolCard
              key={`pool-card-${index}`}
              chain_id={chain_id}
              name={pool.name}
              pool_asset_logo_rawAddr={pool.pool_asset_logo_rawAddr}
              status={pool.status}
              asset_1_symbol={pool.asset_1_symbol}
              asset_1_rawAddr={pool.asset_1_rawAddr}
              asset_2_symbol={pool.asset_2_symbol}
              asset_2_rawAddr={pool.asset_2_rawAddr}
            />
          ))}
          <Col sm={3} md={3} lg={3} className="pool-card-col">
            <div className="text-center pool-card">
              <h4>{t("mining.community mining")}</h4>
              <div>
                <img src={TokenUNKNOWN} alt="" /> <img src={TokenNEW} alt="" />
              </div>
              <h4>???-NEW LP</h4>
              <a href="/apply-listing" className="btn gomining">
                {t("global.open apply")}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeCommunityPools;
