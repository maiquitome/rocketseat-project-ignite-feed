import { Post } from "./Post";

import "./styles.css";

export function App() {
  return (
    <div>
      <Post author="Maiqui Tomé" content="Conteúdo do post do Maiqui" />
      <Post author="Diego Fernandes" content="Conteúdo do post do Diego" />
    </div>
  );
}
