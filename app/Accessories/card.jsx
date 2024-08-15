"use client";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import React from "react";
import { useState } from "react";
import styles from "./accessories.module.css";
const Card = ({ source, text, price }) => {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((current) => (current == 0 ? source.length - 1 : current - 1));
  console.log(source.length);
  const next = () =>
    setCurrent((current) => (current == source.length - 1 ? 0 : current + 1));
  return (
    <div className={styles.mainslider}>
      <div className={styles.flex}>
        <img src={source[current]} width={"100%"} height={"auto"}></img>
      </div>
      <div className={styles.lowercard}>
        <p className={styles.lowerpara1}>{text}</p>
        <p className={styles.lowerpara2}>{price}</p>
      </div>
      <div className={styles.buttonslider}>
        <button onClick={prev} className={styles.button}>
          <RxChevronLeft className={styles.slidersize} />
        </button>
        <button onClick={next} className={styles.button}>
          <RxChevronRight className={styles.slidersize} />
        </button>
      </div>
    </div>
  );
};

export default Card;
