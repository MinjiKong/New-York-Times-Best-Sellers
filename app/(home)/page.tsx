import { Suspense } from "react";
import BestSellersLists from "../components/best-sellers-lists";

import styles from "../css/home.module.css";

export const API_URL = "https://books-api.nomadcoders.workers.dev/list";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>The New York Times Best Seller Explorer</h1>
      <Suspense fallback="Loading...">
        <BestSellersLists />
      </Suspense>
    </div>
  );
}
