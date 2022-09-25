import "./global.css";
import styles from "./App.module.css";

import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
        name: "Diego Fernandes",
        role: "CTO Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-09-22 10:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/6643122?v=4",
        name: "Maik Brito",
        role: "Educador na Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-09-21 20:00:00"),
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
