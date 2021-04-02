import React from "react";
import { useTranslation, Trans, Translation } from "react-i18next";

const Sidebar = () => {
  let { t, i18n } = useTranslation();
  return (
    <aside>
      <div className="single-sidebar-widget mb-30">
        <div className="sidebar-title">
          <h5>{t("global.quick links")}</h5>
        </div>
        <div className="sidebar-body latest-post">
          <ul>
            <li>
              <div className="latest-post-wrap ">
                <div className="latest-post-body media-body">
                  <p>
                    <a href="/updates">{t("pages.updates")}</a>
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="latest-post-wrap ">
                <div className="latest-post-body media-body">
                  <p>
                    <a href="/faq">{t("pages.faq")}</a>
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="latest-post-wrap ">
                <div className="latest-post-body media-body">
                  <p>
                    <a href="/tools">{t("pages.tools")}</a>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
