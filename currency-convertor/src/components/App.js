// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import React, { useEffect } from "react";
import "../index.css";

export default function App() {
  const [currencyAmount, setCurrencyAmount] = React.useState("");
  const [currencyFrom, setCurrencyFrom] = React.useState("EUR");
  const [currencyTo, setCurrencyTo] = React.useState("INR");
  const [convertedAmount, setConvertedAmount] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const queryAPI = function (e) {
    setIsLoading(true);
    e.preventDefault();
    let amount;
    fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${currencyAmount}&from=${currencyFrom}&to=${currencyTo}`,
    )
      .then((resp) => resp.json())
      .then((data) => {
        amount = data.rates[currencyTo].toFixed(2);
        setConvertedAmount(amount);
        setIsLoading(false);
      });
  };

  // somehow not working - even with button submit turned off
  // useEffect(
  //   function () {
  //     async function convert() {
  //       const response = await fetch(
  //         `https://api.frankfurter.dev/v1/latest?amount=${currencyAmount}&from=${currencyFrom}&to=${currencyTo}`,
  //       );
  //       const data = await response.json();
  //       setConvertedAmount(data.rates[currencyTo].toFixed(2));
  //     }
  //   },
  //   [currencyAmount, currencyFrom, currencyTo],
  // );

  return (
    <div className="currency-convertor">
      <div className="text-input">
        <label htmlFor="amount-currency">Amount: </label>
        <input
          type="text"
          id="amount-currency"
          name="amount-currency"
          value={currencyAmount}
          onChange={(e) => setCurrencyAmount(Number(e.target.value))}
        />
      </div>
      <div className="selector">
        <label htmlFor="from-currency">From: </label>
        <select
          value={currencyFrom}
          id="from-currency"
          name="from-currency"
          onChange={(e) => setCurrencyFrom(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <div className="selector">
        <label htmlFor="to-currency">To: </label>
        <select
          value={currencyTo}
          id="to-currency"
          name="to-currency"
          onChange={(e) => setCurrencyTo(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <button onClick={(e) => queryAPI(e)}>Submit</button>
      <p>OUTPUT</p>
      <p>{isLoading || convertedAmount}</p>
    </div>
  );
}
