import React, { useEffect } from "react";

export default function ScrollableAnchor({ id, children }) {
  useEffect(() => {
    const scrollToAnchor = () => {
      if (window.location.hash === `#${id}`) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    scrollToAnchor();
    window.addEventListener("hashchange", scrollToAnchor);
    return () => window.removeEventListener("hashchange", scrollToAnchor);
  }, [id]);
  return children;
}
