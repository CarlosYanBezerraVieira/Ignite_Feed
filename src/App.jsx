
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
        type: 'paragraph',
        content: "Hoje estou trabalhando com React na Rocketseat.",
      },
      {
        type: 'paragraph',
        content: "Estou desenvolvendo aplicações web interativas e escaláveis utilizando React.",
      },
      {
        type: 'link',
        content: "https://rocketseat.com.br",
      },
    ],
    publishedAt: new Date("2025-03-02T12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://www.github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO na Rocketseat",
    },
    content: [
      {
        type: 'paragraph',
        content: "Hoje estou ensinando sobre React na Rocketseat.",
      },
      {
        type: 'paragraph',
        content: "Compartilhando conhecimentos sobre como criar aplicações web eficientes com React.",
      },
      {
        type: 'link',
        content: "https://rocketseat.com.br",
      },
    ],
    publishedAt: new Date("2025-03-03T12:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://www.github.com/rodrigorahman.png",
      name: "Rodrigo Rahman",
      role: "Google Developer Expert em Flutter & Dart",
    },
    content: [
      {
        type: 'paragraph',
        content: "Hoje estou compartilhando conhecimentos sobre Flutter na Academia do Flutter.",
      },
      {
        type: 'paragraph',
        content: "Ensinando como desenvolver aplicações móveis de alta performance com Flutter e Dart.",
      },
      {
        type: 'link',
        content: "https://academiadoflutter.com.br",
      },
    ],
    publishedAt: new Date("2025-03-04T12:00:00"),
  },
];



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
              key={post.id}
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

