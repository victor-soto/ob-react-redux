import { useRef } from "react"
import PropTypes from 'prop-types'

const TodoForm = ({ submit }) => {
  const textRef = useRef()

  return (
    <div>
      <h1>Create TODOs</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        submit(textRef.current.value)
        textRef.current.value = ''
      }}>
        <input type='text' placeholder='Text' ref={textRef} />
        <button type='submit'>Create TODO</button>
      </form>
    </div>
  )
}

TodoForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default TodoForm