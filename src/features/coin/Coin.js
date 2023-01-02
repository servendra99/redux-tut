import { useSelector, useDispatch } from "react-redux";
import "./Coin.css";

const Coin = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="coin">
      <span className="value">Coin : {count}</span>
    </div>
  );
};

export default Coin;
