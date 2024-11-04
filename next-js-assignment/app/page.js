import styles from "./page.module.css";
import Counter from "@/app/Counter";
import Link from "next/link";

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

            <div className={styles.content}>
                <p>
                    I want to do a social HTMX TODO app that will allow for user authentication with AWS Cognito. I
                    also want to be able
                    to add friends on the app and see each other's public todos. I would like to showcase this in
                    how a user would sign up,
                    make some todos, and then find a friend, add them. Then see each other's todos. This would be a
                    live demo.</p>
                <div>
                    <a href="https://github.com/Tcozzie/csci-331-fall2024" className={styles.button}>Github Repo</a>
                </div>
            </div>
            <hr/>
            <Link href="/store">
                <button className={styles.button} style={{ color: "black" }}>
                    Store
                </button>
            </Link>

        </main>
    </div>);
}
