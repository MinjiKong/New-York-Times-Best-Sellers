import Link from "next/link";
import { API_URL } from "../page";
import styles from "../css/detail.module.css";

interface IDetail {
  amazon_product_url: string;
  author: string;
  book_image: string;
  title: string;
}

async function getDetails(id: string) {
  const response = await fetch(`${API_URL}?name=${id}`);
  const json = await response.json();
  return json.results.books;
}

export default async function DetailLists({ id }: { id: string }) {
  const detailLists = await getDetails(id);
  return (
    <div className={styles.div}>
      {detailLists.map((detailList: IDetail) => {
        return (
          <div className={styles.book}>
            <Link href={`${detailList.amazon_product_url}`}>
              <img
                className={styles.img}
                src={detailList.book_image}
                alt={detailList.title}
              ></img>
            </Link>
            <h3 className={styles.title}>{detailList.title}</h3>
            <h5 className={styles.author}>{detailList.author}</h5>
            <button className={styles.amazonLink}>
              <Link href={detailList.amazon_product_url}>Buy now &rarr;</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
}
