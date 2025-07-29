import "./App.css";
import React, { useEffect } from "react";

export default function App() {
  const [currencyAmount, setCurrencyAmount] = React.useState("");
  const [currencyFrom, setCurrencyFrom] = React.useState("EUR");
  const [currencyTo, setCurrencyTo] = React.useState("INR");
  const [convertedAmount, setConvertedAmount] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(
    function () {
      if (!currencyAmount) return;
      if (currencyAmount.isNan) return;
      async function convert() {
        setIsLoading(true);
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${currencyAmount}&from=${currencyFrom}&to=${currencyTo}`,
        );
        const data = await response.json();
        setConvertedAmount(data.rates[currencyTo]);
        setIsLoading(false);
      }

      if (currencyFrom === currencyTo)
        return setConvertedAmount(currencyAmount ? currencyAmount : "");
      convert();
    },
    [currencyAmount, currencyFrom, currencyTo],
  );

  return (
    <div>
      <input
        type="text"
        value={currencyAmount}
        onChange={(e) => setCurrencyAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={currencyFrom}
        onChange={(e) => setCurrencyFrom(e.currentTarget.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={currencyTo}
        onChange={(e) => setCurrencyTo(e.currentTarget.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
      <p>{convertedAmount}</p>
    </div>
  );
}
