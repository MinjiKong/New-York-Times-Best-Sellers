import Link from "next/link";
import styles from "../css/header.module.css";

export default function Header() {
  return (
    <div className={styles.div}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
