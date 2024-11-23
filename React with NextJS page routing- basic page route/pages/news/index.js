// domain.com/news
import Link from "next/link";
import React from "react";

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">Next JS</Link>
        </li>
        <li>
          <Link href="/news/reactapp">React</Link>
        </li>
      </ul>
    </>
  );
}
export default NewsPage;
