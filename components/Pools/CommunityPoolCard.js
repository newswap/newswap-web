import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useTranslation, Trans, Translation } from "react-i18next";
import TokenNEW from "../../assets/img/tokens/new.png";

const CommunityPoolCard = (props) => {
  let { t, i18n } = useTranslation();
  let tokenIconBaseURL = "https://misc.newswap.org/tokenlist/assets/";
  let asset_1_url = "";
  let asset_2_url = "";
  if (props.asset_1_rawAddr == "newton") {
    asset_1_url = TokenNEW;
  } else {
    asset_1_url =
      tokenIconBaseURL +
      props.chain_id +
      "/" +
      props.asset_1_rawAddr +
      "/logo.png";
  }
  if (props.asset_2_rawAddr == "newton") {
    asset_2_url = TokenNEW;
  } else {
    asset_2_url =
      tokenIconBaseURL +
      props.chain_id +
      "/" +
      props.asset_2_rawAddr +
      "/logo.png";
  }
  let mining_url =
    process.env.NEXT_PUBLIC_NEWSWAP_MINING_URL +
    "/communityMining/" +
    props.asset_1_symbol +
    "-" +
    props.asset_2_symbol +
    " LP";
  return (
    <Col sm={3} md={3} lg={3} className="pool-card-col">
      <div className="text-center pool-card">
        <h4>{props.name}</h4>
        <div>
          <img src={asset_1_url} alt="" /> <img src={asset_2_url} alt="" />
        </div>
        <h4>
          {props.asset_1_symbol}-{props.asset_2_symbol} LP
        </h4>
        <Link href={mining_url}>
          <a className="btn gomining">{t("global.gomining")}</a>
        </Link>
      </div>
    </Col>
  );
};

export default CommunityPoolCard;
