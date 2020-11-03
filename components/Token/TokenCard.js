import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useTranslation, Trans, Translation } from "react-i18next";

const TokenCard = (props) => {
  let { t, i18n } = useTranslation();
  let explorerURL = "https://explorer.newtonproject.org/token/";
  let tokenIconURL = "https://misc.newswap.org/tokenlist/assets/1012/" + props.rawAddr + "/logo.png";
  return (
    <div className="text-center token-card">
      <div className="token-icon">
        <img src={tokenIconURL} alt="" />
      </div>
      <h4>{props.name}</h4>
      <h5>({props.symbol})</h5>
      <div>
        <p className="new-addr-title">{t("tokens.New Address")}</p>
        <p className="new-addr">
          <a href={explorerURL + props.newAddr} target="_blank" rel="noreferrer">
            {props.newAddr}
          </a>
        </p>
      </div>
      <p className="raw-addr-title">{t("tokens.Raw Address")}</p>
      <p className="raw-addr">
        <a href={explorerURL + props.rawAddr} target="_blank" rel="noreferrer">
          {props.rawAddr}
        </a>
      </p>
    </div>
  );
};

export default TokenCard;
