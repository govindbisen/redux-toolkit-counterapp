import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { counterActions } from "./store/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <button onClick={() => dispatch(counterActions.increase())}>
          Increase
        </button>
        <p>{count}</p>
        <button onClick={() => dispatch(counterActions.decrease())}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
