import TodoContainer from "./containers/TodoContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import FilterOptions from "./pure/FilterOptions";
import LoginFormContainer from './containers/LoginFormContainer'
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <TodoContainer /> */}
      {/* <TodoFormContainer /> */}
      {/* <FilterOptions />; */}
      <LoginFormContainer />
    </div>
  );
}
