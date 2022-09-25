import { useState } from "react";
import styles from "./style.module.css";
import { Avatar } from "../Avatar";
import { ThumbsUp, Trash } from "phosphor-react";

interface CommentProps {
  content: string;
  onDeleteComment: (x: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    // setLikeCount(likeCount + 1); não atualiza o contexto que estou, continua 0, tem qu esperar o componente recriar
    setLikeCount((state) => {
      return state + 1;
    });
  }
  function handleDeleteComment() {
    onDeleteComment(content);
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/6643122?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>
              <time title="11 de maio às 1h" dateTime="2022-05-11 00:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p> {content} </p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
