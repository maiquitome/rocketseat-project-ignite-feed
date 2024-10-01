import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Maiqui Tomé" content="Conteúdo do post do Maiqui" />
          <Post author="Diego Fernandes" content="Conteúdo do post do Diego" />
        </main>
      </div>
    </div>
  );
}
