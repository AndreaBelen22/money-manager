import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "./store/balance/actions";
import { selectBalance } from "./store/balance/selectors";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [customAmount, setCustomAmount] = useState(0);

  const handleCustomAmount = (event) => {
    setCustomAmount(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw 10$
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <br />
      <input
        type="number"
        placeholder="amount"
        value={customAmount}
        onChange={handleCustomAmount}
      ></input>
      <button onClick={() => dispatch(deposit(customAmount))}>
        Deposit Custom Amount
      </button>
    </div>
  );
}

export default App;
