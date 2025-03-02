
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from "./App.module.css"
import "./global.css"


export function App() {


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post author = "Carlos" content ="Tecnolgoia" />
          <Post author = "Igor" content ="Comida" />
          <Post author = "João" content ="Esportes" />
          <Post author = "Maria" content ="Cinema" />
      
        </main>


      </div>
    </>
  )
}

