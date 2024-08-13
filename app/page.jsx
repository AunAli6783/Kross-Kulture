import fs from "fs";
import path from "path";
import styles from "./page.module.css";
import HomepageCSR from "./components/clientPagesComponents/HomepageCSR";
import maindata from "./list";
export default async function Home() {
  return (
    <>
      <main className={styles.main}>
        {maindata.map((d) => (
          <>
            <HomepageCSR
              image={d.src}
              image2={d.src2}
              image3={d.imgmid}
              image4={d.imgbottom}
              image5={d.card}
              image6={d.imgbelowbottom}
            />
          </>
        ))}
      </main>
    </>
  );
}
