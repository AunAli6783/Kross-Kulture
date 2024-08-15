import React from "react";
import Card from "./card";
import { slides } from "./list";
import styles from "./accessories.module.css";
export default function Accessories() {
  return (
    <div>
      <div className={styles.card}>
        {slides.map((s) => (
          <div>
            <Card source={s.src} text={s.text} price={s.price}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}
