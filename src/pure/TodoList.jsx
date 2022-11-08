import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div>
      <h1>Your TODOS</h1>
      <ul style={{backgroundColor: 'red'}}>
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </ul>
    </div>
  );
};

TodoList.protTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ),
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
