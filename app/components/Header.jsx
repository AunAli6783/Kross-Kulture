"use client";

import React from "react";
import Link from "next/link";
import styles from "./clientside.module.css";
import { useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <main className={styles.nav}>
      <nav className={styles.red}>
        <button
          className={menuOpen ? styles.mainbtn : styles.btn2}
          onClick={toggleMenu}
        >
          <RxDropdownMenu className={menuOpen ? styles.nobar : styles.bar} />
        </button>
        <div className={menuOpen ? styles.kross : styles.kross2}>
          <Link href={"/"} onClick={toggleMenu}>
            KROSS KULTURE
          </Link>
        </div>

        <ul className={menuOpen ? styles.newlist : styles.list}>
          <li>
            <Link href={"/NewIn"} onClick={toggleMenu}>
              NEWIN
            </Link>
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
          <CiSearch className={styles.icons} />
          <CiHeart className={styles.icons} />
          <CiShoppingBasket className={styles.icons} />
        </div>
      </nav>
    </main>
  );
}
