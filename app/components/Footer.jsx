import React from "react";
import styles from "./clientside.module.css";
export const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footinfo}>
          <div className={styles.subhead}>INFORMATION</div>
          <div>+923171777008</div>
          <div>Info@krosskulture.com</div>
          <div>contact us</div>
          <div>About us</div>
          <div>Blog</div>
          <div>Track order</div>
        </div>

        <div className={styles.footsubscribe}>
          <div className={styles.subhead}>SUBSCRIBE</div>
          <p>GET THE LATEST TREND FIRST</p>
          <p>Join Kross Kulture Premium family to know about</p>
          <p>latest updates and discounts.</p>
        </div>

        <div className={styles.custome}>
          <div className={styles.subhead}>CUSTOMER CARE</div>

          <div>Size Guide</div>
          <div>Shipping and Exchange</div>
          <div>Store Locator</div>
          <div>Privacy policy</div>
          <div> FAQ </div>
        </div>
      </div>
    </div>
  );
};
