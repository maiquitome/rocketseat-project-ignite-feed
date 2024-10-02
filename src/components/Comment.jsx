import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maiquitome.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maiqui Tomé</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
                Há cerca de 2h
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size="1.5rem" />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size="1.25rem" />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
