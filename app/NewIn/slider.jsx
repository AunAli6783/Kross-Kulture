"use client";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import React from "react";
import { useState } from "react";
import styles from "./newin.module.css";
const Slider = ({ children: slide }) => {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((current) => (current == 0 ? slide.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current == slide.length - 1 ? 0 : current + 1));
  return (
    <div className={styles.mainslider}>
      <div
        className={styles.flex}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slide}
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

export default Slider;
