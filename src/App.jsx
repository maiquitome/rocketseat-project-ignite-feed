import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post author="Maiqui Tomé" content="Conteúdo do post do Maiqui" />
      <Post author="Diego Fernandes" content="Conteúdo do post do Diego" />
    </div>
  );
}
