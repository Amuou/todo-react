import React, { useState, useEffect } from 'react';
import Todos from './Todos/Todos';
import Comments from './Comments/Comments';
import styles from './Main.module.css';

const Main = () => {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const initialComments = JSON.parse(localStorage.getItem('comments')) || {};
  const [todos, setTodos] = useState(initialTodos);
  const [comments, setComments] = useState(initialComments);
  const [active, setActive] = useState('');
  const todoIndex = active && todos.findIndex(elem => elem.id === active);
  const commentsNumber = todoIndex === -1 ? '' : todoIndex;
  const activeComments = comments[active];

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('comments', JSON.stringify(comments));
  });

  return (
    <main className={styles.mainSection}>
      <section className={styles.container}>
        <Todos
          todosHeader={'Items'}
          todos={todos}
          setTodos={setTodos}
          active={active}
          setActive={setActive}
          comments={comments}
          setComments={setComments}
        />
      </section>
      <section className={styles.container}>
        {activeComments && (
          <Comments
            commentsHeader={`Comments #${commentsNumber}`}
            comments={comments}
            setComments={setComments}
            activeComments={activeComments}
            active={active}
          />
        )}
      </section>
    </main>
  );
};

export default Main;
