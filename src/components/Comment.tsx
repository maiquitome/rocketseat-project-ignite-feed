import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment(props: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    props.onDeleteComment(props.content);
  }

  function handleLikeComment() {
    // ! likeCount será sempre o valor antigo
    // setLikeCount(likeCount + 1);
    // setLikeCount(likeCount + 1);
    // ? não importa se executar `setLikeCount(likeCount + 1)` mais de 2X, o valor será sempre o mesmo

    // * state será sempre o valor atual
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/maiquitome.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maiqui Tomé</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
                Há cerca de 2h
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size="1.5rem" />
            </button>
          </header>

          {/* <p>Muito bom Devon, parabéns!! 👏👏</p> */}
          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size="1.25rem" />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
