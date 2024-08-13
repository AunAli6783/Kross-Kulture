"use client";
import { useState, useEffect } from "react";
import React from "react";
import styles from "./clientside.module.css";

export const Footer = () => {
  return (
    <div className={styles.mainfooter}>
      <div className={styles.footer}>
        <details className={styles.accordion} open>
          <summary className={styles.subhead}>
            INFORMATION <span className={styles.span}>&#x3e;</span>
          </summary>
          <div className={styles.life}>
            <div>+923171777008</div>
            <div>Info@krosskulture.com</div>
            <div>Contact us</div>
            <div>About us</div>
            <div>Blog</div>
            <div>Track order</div>
          </div>
        </details>

        <details className={styles.accordion} open>
          <summary className={styles.subhead}>
            SUBSCRIBE <span className={styles.span}>&#x3e;</span>
          </summary>
          <div className={styles.life}>
            <p>GET THE LATEST TREND FIRST</p>
            <p>Join Kross Kulture Premium family to know about</p>
            <p>latest updates and discounts.</p>
          </div>
        </details>

        <details className={styles.accordion} open>
          <summary className={styles.subhead}>
            CUSTOMER CARE <span className={styles.span}>&#x3e;</span>
          </summary>
          <div className={styles.life}>
            <div>Size Guide</div>
            <div>Shipping and Exchange</div>
            <div>Store Locator</div>
            <div>Privacy policy</div>
            <div>FAQ</div>
          </div>
        </details>
      </div>
    </div>
  );
};
