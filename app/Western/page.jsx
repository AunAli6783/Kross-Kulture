import React from "react";
import Card from "./card";
import { slides } from "./list";
import styles from "./western.module.css";
export default function Western() {
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
