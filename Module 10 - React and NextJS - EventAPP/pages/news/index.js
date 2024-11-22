//our-domain.com/

import React from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News Page!</h1>
      <ul>
        <li>
          <Link href="/news/great-framework">NextJS is a great framework</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
}

export default NewsPage;
