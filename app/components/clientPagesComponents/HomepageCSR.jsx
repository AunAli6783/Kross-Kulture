"use client";
import React from "react";
import styles from "./homepg.module.css";
export default function HomepageCSR({
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <div className={styles.imagetop}>
          {image.map((i) => (
            <img
              className={styles.laptop2}
              src={i}
              alt="img1"
              height={"auto"}
              width={"100%"}
            />
          ))}

          {image2.map((i) => (
            <img
              className={styles.mobile}
              src={i}
              alt="img1"
              height={"auto"}
              width={"100%"}
            />
          ))}
        </div>

        <div className={styles.imagemiddle} id={styles.id}>
          {image3.map((i) => (
            <img
              className={styles[i.style]}
              src={i.src}
              alt="img2"
              height={"auto"}
              width={i.width}
            />
          ))}
        </div>

        <div className={styles.text}>
          <h1>WHAT'S NEW</h1>
        </div>

        <div className={styles.imagebottom}>
          {image4.map((i) => (
            <div>
              <img src={i.src} alt="image3" />
              <p>NEW ARRIVAL</p>
            </div>
          ))}
        </div>
        <div className={styles.text}>
          <h1>Product Carousel</h1>
        </div>

        <div className={styles.card}>
          {image5.map((i) => (
            <div>
              <img src={i.src} alt="img" width={"100%"} height={"auto"} />
              <h4>{i.piece}</h4>
              <p>{i.price}</p>
            </div>
          ))}
        </div>

        <div className={styles.belowbottom}>
          {image6.map((i) => (
            <div>
              <img
                className={styles[i.style]}
                src={i.src}
                alt="img"
                width={"100%"}
              />
            </div>
          ))}
        </div>

        <div className={styles.video}>
          <video
            controls
            width={"100%"}
            height={"auto"}
            preload="auto"
            muted
            autoPlay
          >
            <source src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/upload-sample-video.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
