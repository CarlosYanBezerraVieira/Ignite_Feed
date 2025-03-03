
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://www.github.com/CarlosYanBezerraVieira.png",
      name: "Carlos Yan",
      role: "Desenvolvedor Full Stack",
    },
    content: [
      {
        type: 'paragraph', content: "Hoje estou trabalhando com React na Rocketseat"
      },
      {
        type: "paragraph", content: "Estou aprendendo a criar aplicações web com React"
      },
      {
        type: "link", content: "https://rocketseat.com.br"
      }

    ],
    publishedAt: new Date("2025-03-02T12:00:00"),

  },
  {
    id: 1,
    author: {
      avatarUrl: "https://www.github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat",
    },
    content: [
      {
        type: 'paragraph', content: "Hoje estou ensinando sobre React na Rocketseat"
      },
      {
        type: "paragraph", content: "Estou ensinando a criar aplicações web com React"
      },
      {
        type: "link", content: "https://rocketseat.com.br"
      }

    ],
    publishedAt: new Date("2025-03-03T12:00:00"),

  }
]

export function App() {


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
           },)}

        </main>


      </div>
    </>
  )
}

