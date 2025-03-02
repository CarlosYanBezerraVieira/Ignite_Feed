import { Avatar } from "./Avatar"
import { Coment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src="https://github.com/CarlosYanBezerraVieira.png"/>
                        <div className={styles.authorInfo}>
                            <strong>Carlos Vieira</strong>
                            <span>Desenvolvedor mobile</span>
                        </div>
                    </div>
                    <time title="17 de Fevereiro ás 13:30h" dateTime="2025-02-17">
                        Publicado há 1 h
                    </time>
                </header>
                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>

                    <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p><a href="">jane.design/doctorcares.</a> </p>

                    <p>
                        <a href="">#novoprojeto</a>{" "}
                        <a href="">#nlw </a>{" "}
                        <a href="">#rocketseat</a>
                    </p>
                </div>
                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea placeholder="Deixe seu comentário"></textarea>
                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Coment />
                    <Coment />
                    <Coment />
                </div>
            </article>
        </>
    )
}