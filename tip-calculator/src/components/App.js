import "../App.css";
import { useState } from "react";
import { Reset } from "./Reset";
import { Result } from "./Result";
import { TipPercent } from "./TipPercent";
import { Bill } from "./Bill";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [friendTip, setFriendTip] = useState("");

  // DERIVED STATE
  const averageTip = (tip + friendTip) / 2;
  const total = Math.round(bill + (bill * averageTip) / 100);

  function handleChangeBill(bill) {
    setBill(bill);
  }

  function handleChangeTip(tip) {
    setTip(tip);
  }

  function handleChangeFriendTip(friendTip) {
    setFriendTip(friendTip);
  }

  function handleReset() {
    handleChangeBill("");
    handleChangeTip("");
    handleChangeFriendTip("");
  }

  return (
    <div>
      <Bill bill={bill} setBill={handleChangeBill}>
        How much was the bill?
      </Bill>
      <TipPercent tip={tip} changeTip={handleChangeTip}>
        How did you like the service?
      </TipPercent>
      <TipPercent tip={friendTip} changeTip={handleChangeFriendTip}>
        How did your friend like the service?
      </TipPercent>
      <Result bill={bill} total={total} />
      <Reset onReset={handleReset} />
    </div>
  );
}

export default App;
