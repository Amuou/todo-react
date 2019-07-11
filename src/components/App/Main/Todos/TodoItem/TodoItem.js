import React from 'react';
import Button from '../Button/Button';
import styles from './TodoItem.module.css';
import PropTypes from 'prop-types';
import _ from 'lodash';

const TodoItem = ({
  todo,
  todos,
  active,
  comments,
  setActive,
  setComments,
  setTodos,
}) => {
  const deleteTodo = () => {
    setComments(_.omit(comments, [todo.id]));
    setTodos(todos.filter(elem => elem.id !== todo.id));
  };
  const commentsCount = comments[todo.id] ? comments[todo.id].length : 0;
  const isActive = active === todo.id;

  return (
    <li
      className={`${styles.todoItem} ${isActive ? styles.active : ''}`}
      onClick={() => setActive(todo.id)}
    >
      <div className={styles.todoContainer}>
        <span className={styles.todoText}>{todo.text}</span>
        <span className={styles.commentsCount}>{commentsCount}</span>
        <Button type="delete" text="Delete" onClick={deleteTodo} />
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  comments: PropTypes.shape({
    any: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string,
      }),
    ),
  }),
  setComments: PropTypes.func.isRequired,
};

export default TodoItem;
