"use client";

import React from "react";

import styles from "./homepg.module.css";

export default function HomepageCSR() {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <div className={styles.imagetop}>
          <img
            className={styles.laptop2}
            src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/main-banner-1800x600-slide-2.jpg%3Fwidth%3D1300"
            alt="img1"
            height={"auto"}
            width={"100%"}
          />
          <img
            className={styles.mobile}
            src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/enchanted-elegance-mbo1_1_11zon.jpg%3Fwidth%3D640"
            alt="img1"
            height={"auto"}
            width={"100%"}
          />
        </div>

        <div className={styles.imagemiddle} id={styles.id}>
          <img
            className={styles.laptop}
            src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/categr-1-1.jpg"
            alt="img2"
            height={"auto"}
            width={"50%"}
          />
          <img
            className={styles.middlemobile}
            src=" https://cdn.comverseglobal.com/kross_kulture/products/product_images/untitled-2.jpg"
            alt="img2"
            height={"auto"}
            width={"100%"}
          />

          <img
            className={styles.laptop}
            src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/categr-2.jpg"
            alt="img3"
            height={"auto"}
            width={"50%"}
          />

          <img
            className={styles.mobile2}
            src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/untitled-1.jpg"
            alt="img3"
            height={"auto"}
            width={"45%"}
          />
        </div>

        <div className={styles.text}>
          <h1>WHAT'S NEW</h1>
        </div>

        <div className={styles.imagebottom}>
          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/ellipse-19-7.png%3Fwidth%3D150"
              alt="image3"
            />
            <p>NEW ARRIVAL</p>
          </div>

          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/ellipse-19990.png%3Fwidth%3D150"
              alt="image3"
            />
            <p>BRIDAL</p>
          </div>

          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/ellipse-99.png%3Fwidth%3D150"
              alt="image4"
            />
            <p>SALE</p>
          </div>
          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/ellipse-199.png%3Fwidth%3D150"
              alt="image5"
            />
            <p>EVERYDAY USUAL</p>
          </div>
          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/ellipse-1909.png%3Fwidth%3D150"
              alt="image6"
            />
            <p>MINIMALIST</p>
          </div>

          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/ellipse-99.png%3Fwidth%3D150"
              alt="image4"
            />
            <p>SALE</p>
          </div>

          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/ellipse-19-7.png%3Fwidth%3D150"
              alt="image3"
            />
            <p>NEW ARRIVAL</p>
          </div>
          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/ellipse-190023.png%3Fwidth%3D150"
              alt="image3"
            />
            <p>USUAL</p>
          </div>
          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/ellipse-19990.png%3Fwidth%3D150"
              alt="image3"
            />
            <p>BRIDAL</p>
          </div>

          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/ellipse-99.png%3Fwidth%3D150"
              alt="image4"
            />
            <p>SALE</p>
          </div>
        </div>
        <div className={styles.text}>
          <h1>Product Carousel</h1>
        </div>

        <div className={styles.card}>
          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/DSC07256-2.jpg%3Fwidth%3D440"
              alt="img"
              width={"100%"}
              height={"auto"}
            />
            <h4>Garnet UN-765 (3 Pieces)</h4>
            <p>PKR 11,000</p>
          </div>
          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/DSC07527.jpg%3Fwidth%3D440"
              width={"100%"}
              height={"auto"}
              alt="img"
            />
            <h4>Jasmine UN-778 (3 Pieces)</h4>
            <p>PKR 11,000</p>
          </div>
          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/DSC07280_1.jpg%3Fwidth%3D440"
              alt="img"
              width={"100%"}
              height={"auto"}
            />
            <h4>Regal UN-708 (3 Pieces)</h4>
            <p>PKR 11,000</p>
          </div>
          <div>
            <img
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/DSC07532.jpg%3Fwidth%3D440"
              alt="img"
              width={"100%"}
              height={"auto"}
            />
            <h4>Mehar UN-707 (3 Pieces)</h4>
            <p>PKR 11,000</p>
          </div>
        </div>

        <div className={styles.belowbottom}>
          <div>
            <img
              className={styles.laptop}
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/section-2.jpg"
              alt="img"
              width={"100%"}
            />

            <img
              className={styles.newmobile}
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/untitled-4.jpg"
              alt="img"
              width={"100%"}
            />
          </div>
          <div>
            <img
              className={styles.laptop}
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/section-1.jpg"
              alt="img"
              width={"100%"}
            />

            <img
              className={styles.newmobile}
              src="https://cdn.comverseglobal.com/kross_kulture/products/product_images/mom-me-new-banner.webp"
              alt="img"
              width={"100%"}
            />
          </div>
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
