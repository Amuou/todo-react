import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import uuidv4 from 'uuid/v4'

import Comment from './Comment/Comment'
import styles from './CommentsList.module.css'
import UserPicture from './UserPicture/UserPicture'

const CommentsList = ({
  comments,
  setComments,
  activeComments,
  commentsHeader,
  active,
}) => {
  const textareaEl = useRef(null)
  const handleKeyDown = (e) => {
    const comment = textareaEl.current
    if (e.key === 'Enter' && comment.value.trim()) {
      setComments({
        ...comments,
        [active]: [...comments[active], { text: comment.value, id: uuidv4() }],
      })
      comment.value = ''
    }
  }

  return (
    <section className={styles.comments}>
      <div className={styles.container}>
        <header className="sticky">
          <h2 className={styles.commentsCount}>{commentsHeader}</h2>
        </header>
        <section className={styles.mainComments}>
          {activeComments && activeComments.length > 0 && (
            <ul className={styles.commentsList}>
              {activeComments.map((comment, index) => (
                <Comment
                  key={comment.id}
                  text={comment.text}
                  color={index % 2 ? 'darkblue' : 'orange'}
                />
              ))}
            </ul>
          )}
        </section>
        <footer className={styles.footer}>
          <UserPicture color="grey" />
          <textarea
            className={styles.postComment}
            name="postComment"
            id="post-comment"
            cols="100"
            rows="7"
            ref={textareaEl}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </footer>
      </div>
    </section>
  )
}

CommentsList.propTypes = {
  commentsHeader: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  activeComments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  comments: PropTypes.shape({
    any: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.string,
      }),
    ),
  }).isRequired,
  setComments: PropTypes.func.isRequired,
}

export default CommentsList
