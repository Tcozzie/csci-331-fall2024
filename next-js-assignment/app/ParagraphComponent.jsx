import styles from "@/app/page.module.css";

const ParagraphComponent = () => {
    return (
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
    )
}

export default ParagraphComponent
