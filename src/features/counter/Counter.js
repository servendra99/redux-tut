import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          {" "}
          Decrement
        </button>
        <span className="value"> Count :{count}</span>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          {" "}
          Increment
        </button>
      </div>
    </>
  );
};

export default Counter;
