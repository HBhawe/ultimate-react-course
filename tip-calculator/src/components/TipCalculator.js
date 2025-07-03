import { useState } from "react";
import { BillInput } from "./BillInput";
import { TipPercent } from "./TipPercent";
import { Result } from "./Result";
import { Reset } from "./Reset";

export function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [friendTip, setFriendTip] = useState("");

  // DERIVED STATE
  const averageTip = (tip + friendTip) / 2;
  const total = Math.round(bill + (bill * averageTip) / 100);

  // FUNCTIONS FOR USAGE
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
      <BillInput bill={bill} setBill={handleChangeBill}>
        How much was the bill?
      </BillInput>
      <TipPercent tip={tip} changeTip={handleChangeTip}>
        How did you like the service?
      </TipPercent>
      <TipPercent tip={friendTip} changeTip={handleChangeFriendTip}>
        How did your friend like the service?
      </TipPercent>
      {bill !== "" ? (
        <>
          <Result bill={bill} total={total} />
          <Reset onReset={handleReset} />
        </>
      ) : null}
    </div>
  );
}
