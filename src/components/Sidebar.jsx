import styles from "./Sidebar.module.css";

import coverImage from "../assets/cover.jpg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* <img src="https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
      <img className={styles.cover} src={coverImage} />

      <div className={styles.profile}>
        <strong>Maiqui Tomé</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
