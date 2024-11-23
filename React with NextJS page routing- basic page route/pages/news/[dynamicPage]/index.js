import { useRouter } from "next/router";

function DynamicPage() {
  const router = useRouter();
  const newsId = router.query.dynamicPage;

  return <h1>Dynamic Page</h1>;
}

export default DynamicPage;
