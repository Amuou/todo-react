import React, { useEffect, useState } from 'react'

import CommentsList from './CommentsList/CommentsList'
import styles from './Main.module.css'
import Todos from './Todos/Todos'

const useTodosWithComments = () => {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || []
  const storedComments = JSON.parse(localStorage.getItem('comments')) || {}
  const [todos, setTodos] = useState(storedTodos)
  const [comments, setComments] = useState(storedComments)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments, todos])

  return [todos, comments, setTodos, setComments]
}

const Main = () => {
  const [active, setActive] = useState('')
  const [todos, comments, setTodos, setComments] = useTodosWithComments()
  const todoIndex = active && todos.findIndex((elem) => elem.id === active)
  const commentsNumber = todoIndex === -1 ? '' : todoIndex
  const activeComments = comments[active]

  return (
    <main className={styles.mainSection}>
      <section className={styles.container}>
        <Todos
          todosHeader="Items"
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
          <CommentsList
            commentsHeader={`Comments #${commentsNumber}`}
            comments={comments}
            setComments={setComments}
            activeComments={activeComments}
            active={active}
          />
        )}
      </section>
    </main>
  )
}

export default Main
