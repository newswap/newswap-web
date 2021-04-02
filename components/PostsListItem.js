import React from "react";
import Link from "next/link";

export default function PostPreview({ title, date, language, slug }) {
  return (
    <div className={"lang-" + language}>
      <h3>
        <Link as={`/updates/${slug}`} href="/updates/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <div>{date}</div>
    </div>
  );
}
