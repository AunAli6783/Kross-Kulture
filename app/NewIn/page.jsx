import React from "react";
import data from "./list";
import styles from "./newin.module.css";
export default function page() {
  return (
    <div>
      <div className={styles.structure}>
        {data.map((l) => (
          <div>
            <img src={l.img_path} alt="img1" height={450} width={280} />
          </div>
        ))}
      </div>
    </div>
  );
}
