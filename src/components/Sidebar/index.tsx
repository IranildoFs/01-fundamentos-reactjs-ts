import styles from "./style.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=10"
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/71677947?v=4" />
        <strong>Iranildo</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
