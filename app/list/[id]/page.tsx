import { Suspense } from "react";
import DetailLists from "../../components/detail-lists";

export default function Detail({ params: { id } }: { params: { id: string } }) {
  const displayName = id
    // Replace hyphens with spaces
    .replace(/-/g, " ")
    // Replace "And" with "&"
    .replace(/\band\b/g, "&")
    // Capitalize the first letter
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "30px" }}>{displayName}</h2>
      <Suspense fallback="Loading...">
        <DetailLists id={id} />
      </Suspense>
    </div>
  );
}
