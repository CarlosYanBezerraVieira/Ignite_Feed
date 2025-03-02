import styles from "./Post.module.css"

export function Post() {
    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img className={styles.avatar} src="https://github.com/CarlosYanBezerraVieira.png"></img>
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
            </article>
        </>
    )
}