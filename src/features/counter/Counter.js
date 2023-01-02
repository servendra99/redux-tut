import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { toggletheme } from "../theme/theme";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const colour = useSelector((state) => state.theme.colour);

  return (
    <>
      <div className="App">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{ color: colour }}
        >
          {" "}
          Decrement
        </button>
        <span className="value"> Count :{count}</span>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(10))}
          style={{ color: colour }}
        >
          Increment by 10
        </button>

        <button
          className="button"
          onClick={() => dispatch(increment())}
          style={{ color: colour }}
        >
          {" "}
          Increment
        </button>
        <button className="button" onClick={() => dispatch(toggletheme())}>
          {" "}
          changeColour
        </button>
      </div>
    </>
  );
};

export default Counter;
