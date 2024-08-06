import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HomepageCSR from "./components/clientPagesComponents/HomepageCSR";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomepageCSR />
    </main>
  );
}
