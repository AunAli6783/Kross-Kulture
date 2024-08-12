import fs from "fs";
import path from "path";
import styles from "./page.module.css";
import HomepageCSR from "./components/clientPagesComponents/HomepageCSR";
import maindata from "./list";
export default async function Home() {
  // const filePath = path.join(process.cwd(), "app", "list.json");

  // if (!fs.existsSync(filePath)) {
  //   console.error(`File not found: ${filePath}`);
  //   return (
  //     <main className={styles.main}>
  //       <p>File not found: {filePath}</p>
  //     </main>
  //   );
  // }

  // const jsonData = fs.readFileSync(filePath, "utf8");
  // const data = JSON.parse(jsonData);

  // const data = JSON.parse(maindata);

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
