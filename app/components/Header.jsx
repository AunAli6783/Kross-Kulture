import React from "react";
import Link from "next/link";
import styles from "./clientside.module.css";

import { RxDropdownMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

export default function Header() {
  return (
    <main className={styles.nav}>
      <nav className={styles.red}>
        <div className={styles.kross}>
          <Link href={"/"}>KROSS KULTURE</Link>
        </div>
        <ul className={styles.list}>
          <li>
            <Link href={"/NewIn"}>NEWIN</Link>
          </li>
          <li>
            <Link href={"/Accessories"}>ACCESSORIES</Link>
          </li>
          <li>
            <Link href={"/Western"}>WESTERN</Link>
          </li>
          <li>
            <Link href={"/Skid"}>SKID</Link>
          </li>
          <li>
            <Link href={"/Skid"}>LUXURYPRET</Link>
          </li>
          <li>
            <Link href={"/Skid"}>ROZMARA RTW</Link>
          </li>
          <li>
            <Link href={"/Skid"}>MOM&ME</Link>
          </li>
          <li>
            <Link href={"/Skid"}>UNSTITCHED</Link>
          </li>
          <li>
            <Link href={"/Skid"}>SALE</Link>
          </li>
        </ul>
        <div>
          <button className={styles.btn}>
            <RxDropdownMenu className={styles.icons} />
          </button>
          <CiSearch className={styles.icons} />
          <CiHeart className={styles.icons} />
          <CiShoppingBasket className={styles.icons} />
        </div>
      </nav>
    </main>
  );
}
