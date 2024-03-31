import styles from "../css/about.module.css";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className={styles.div}>
      <h1>About us</h1>
      <p>
        Welcome to the offical explorer for The New York Times Best Seller list
        explorer.
      </p>
      <p>We hope you enjoy your stay!</p>
    </div>
  );
}
