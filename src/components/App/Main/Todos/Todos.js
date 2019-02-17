import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem/TodoItem";
import Button from "./Button/Button";
import styles from "./Todos.module.css";
import uuidv4 from "uuid/v4";

const Todos = ({
  todosHeader,
  todos,
  setTodos,
  active,
  setActive,
  comments,
  setComments
}) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    const uniqId = uuidv4();
    setComments({ ...comments, [uniqId]: [] });
    setTodos([...todos, { text: todo, id: uniqId }]);
    setTodo("");
  };

  return (
    <section className={styles.todoList}>
      <div className="sticky">
        <div className="container">
          <header>
            <h2 className={styles.items}>{todosHeader}</h2>
          </header>
          <section className={styles.addForm}>
            <form
              className={styles.addTodo}
              onSubmit={e => todo && handleSubmit(e)}
            >
              <input
                className={styles.inputText}
                name="todo"
                type="text"
                placeholder="Type name here..."
                value={todo}
                onChange={e => setTodo(e.target.value)}
              />
              <Button type="add" text="Add new" disabled={!todo} />
            </form>
          </section>
        </div>
      </div>
      <section className={styles.todoItems}>
        {todos && (
          <ul className={styles.itemsList}>
            {todos.map(elem => (
              <TodoItem
                key={elem.id}
                active={active}
                setActive={setActive}
                todo={elem}
                setTodos={setTodos}
                todos={todos}
                comments={comments}
                setComments={setComments}
              />
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};

Todos.propTypes = {
  todosHeader: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  comments: PropTypes.shape({
    any: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string
      })
    )
  }),
  setComments: PropTypes.func.isRequired
};

export default Todos;
