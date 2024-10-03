import { format, formatDistanceToNow } from "date-fns";
// import { ptBR } from "date-fns/locale";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, published_at, content }) {
  const [comments, setComments] = useState(["Post muito bacana, ein!"]);

  const [newCommentText, setNewCommentText] = useState("");

  // const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // }).format(published_at);

  const publishedDateFormatted = format(
    published_at,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(published_at, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    // ! programação imperativa:
    // const newCommentText = event.target.comment.value;

    // ? o valor original não é alterado, é passado um novo valor como argumento (imutabilidade)
    setComments([...comments, newCommentText]);

    // * programação declarativa:
    setNewCommentText("");

    // ! programação imperativa:
    // event.target.comment.value = "";
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.job_title}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={published_at.toISOString()}
        >
          {"Publicado " + publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
