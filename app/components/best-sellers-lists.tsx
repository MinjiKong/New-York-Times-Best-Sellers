import Link from "next/link";
import { API_URL } from "../constants";
import styles from "../css/lists.module.css";

interface IList {
  display_name: string;
  list_name_encoded: string;
}

async function getBestSellersLists() {
  const response = await fetch(`${API_URL}s`);
  const json = await response.json();
  return json.results;
}

export default async function BestSellersLists() {
  const lists = await getBestSellersLists();
  return (
    <div>
      {lists.map((list: IList) => {
        return (
          <button className={styles.bookIds}>
            <Link href={`/list/${list.list_name_encoded}`}>
              {list.display_name} &rarr;
            </Link>
          </button>
        );
      })}
    </div>
  );
}
