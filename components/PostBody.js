import React from "react";
export default function PostBody({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
