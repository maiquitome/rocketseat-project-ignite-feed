import { PencilSimpleLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

// import coverImage from "../assets/cover.jpg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      {/* <img className={styles.cover} src={coverImage} /> */}

      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src="https://github.com/maiquitome.png" />
        </div>
        <strong>Maiqui Tomé</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
