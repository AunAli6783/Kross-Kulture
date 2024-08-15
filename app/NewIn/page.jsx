import React from "react";
import {
  data,
  slides,
  slides2,
  slides3,
  slides4,
  slides5,
  slides6,
  slides7,
  slides8,
  slides9,
  slides10,
  slides11,
  slides12,
  slides13,
  slides14,
  slides15,
  slides16,
} from "./list";
import styles from "./newin.module.css";
import Slider from "./slider";
export default function page() {
  return (
    <div className={styles.mainhead}>
      <div className={styles.slid}>
        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Mehru KLX-00961 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 13,796</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides2.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Shabnam KLX-00878 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 12,796</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides3.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Sehar KLX-00877 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 8,796</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides4.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>KLX-01009 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 7,796</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.slid}>
        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides5.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Rose KLX-00971 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 10,796</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides6.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Maroon Crush KKSG-039</p>
              <p className={styles.lowerpara2}>PKR 9,796</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides7.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Amber Glow KKSG-042</p>
              <p className={styles.lowerpara2}>PKR 8,796</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides8.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Red Majesty KLX-00993 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 8,796</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.slid}>
        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides9.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>
                Ruby Radiance KLX-00960 (3 PC)
              </p>
              <p className={styles.lowerpara2}>PKR 15,796</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides10.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Ash KLX-00959 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 12,796</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides11.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Eda KLX- 00917 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 3,796</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides12.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Bianca KLX- 00916 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 12,796</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.slid}>
        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides13.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Isabelle KLX- 00915 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 9,796</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides14.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Celeste KLX- 00914 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 11,796</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides15.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Mehru KLX-00961 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 8,996</p>
            </div>
          </div>
        </div>

        <div className={styles.withsetting}>
          <div>
            <Slider>
              {slides16.map((s) => (
                <img src={s} width={"100%"} height={"auto"} alt="img"></img>
              ))}
            </Slider>
            <div className={styles.lowercard}>
              <p className={styles.lowerpara1}>Sophie KLX- 00913 (3 PC)</p>
              <p className={styles.lowerpara2}>PKR 10,796</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.outer}>
        <div className={styles.structure}>
          {data.map((l) => (
            <div>
              <img src={l.img_path} alt="img1" height={300} width={300} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
