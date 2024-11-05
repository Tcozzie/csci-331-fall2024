import styles from "@/app/page.module.css";
import Link from "next/link";


const StoreComponent = () => {
    return(
        <Link href="/store">
            <button className={styles.button} style={{ color: "black" }}>
                Store
            </button>
        </Link>
    )
}

export default StoreComponent
