import styles from "./page.module.css";
import Counter from "@/app/Counter";
import ParagraphComponent from "@/app/ParagraphComponent";
import StoreComponent from "@/app/StoreComponent";

export default function Home() {


    return (<div className={styles.page}>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Tiegan Cozzie's <a href="https://nextjs.org">Next.js</a> App!
            </h1>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Counter increment={1} color={"darkred"}/>
                    <p>Increment by 1</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Counter increment={2} color={"darkblue"}/>
                    <p>Increment by 2</p>
                </div>

            </div>
            <hr/>
            <ParagraphComponent/>
            <hr/>
            <StoreComponent/>
        </main>
    </div>);
}
