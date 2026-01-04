import { useState } from "react";
import generateReceipt from "../utils/generateReceipt";
import "../styles/receipt.css";

const Receipt = () => {
  const [receipt, setReceipt] = useState(generateReceipt());

  const handleGenerateNew = () => {
    setReceipt(generateReceipt());
  };

const LOGO_MAP = {
  "Eukanuba Pet Food": "/logos/ekunaba.png",
  "Pure Encapsulations": "/logos/pure.png",
  "Bacardi Ocho": "/logos/bacardi.png",
  "Tractor Supply Co": "/logos/tractor.png",
  "The Vitamin Shoppe": "/logos/vitamin.png",
  "Amazon": "/logos/amazon.png",
  "Sam's Club": "/logos/sams.png",
  "Petco": "/logos/petco.png",
  "Target": "/logos/Target.jpg",
  "Chipotle Mexican Grill": "/logos/chipotle.png",
  "Burger King": "/logos/burger.png",
  "Subway": "/logos/subway.png",
  "KFC": "/logos/kfc.png",
  "McDonald's": "/logos/mcdonalds.png",
};

  return (
<div
  className="receipt"
  onDoubleClick={handleGenerateNew}
>
      {/* LOGO GOES HERE */}
      <div className="logo-container">
  <img
    src={LOGO_MAP[receipt.company]}
    alt={`${receipt.company} logo`}
    className="company-logo"
  />
</div>

      {/* <h1>{receipt.company}</h1> */}
      <p className="slogan">{receipt.slogan}</p>

      <p className="center">{receipt.address}</p>
      <p className="center">{receipt.phone}</p>

      <hr />

      <div className="meta">
        <p>Order: {receipt.orderNumber}</p>
        <p>Date: {receipt.date}</p>
      </div>

      <hr />

      <ul>
        {receipt.items.map((item, index) => (
          <li key={index}>
            <span>
              {item.quantity}x {item.name}
            </span>
            <span>${item.total.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <hr />

      <div className="totals">
  <p>Subtotal: ${Number(receipt.subtotal).toFixed(2)}</p>
<p>Tax: ${Number(receipt.tax).toFixed(2)}</p>
<p>
  <strong>Total: ${Number(receipt.total).toFixed(2)}</strong>
</p>

</div>


      <hr />

      <div className="payments">
  <p className="section-title">Payment</p>

  {receipt.payments.cash > 0 && (
    <p>Cash: ${receipt.payments.cash.toFixed(2)}</p>
  )}

  {receipt.payments.card > 0 && (
    <p>Card: ${receipt.payments.card.toFixed(2)}</p>
  )}

  {receipt.payments.other > 0 && (
    <p>Other: ${receipt.payments.other.toFixed(2)}</p>
  )}
</div>

<hr />


      <div className="barcode-container">
        <div className="barcode"></div>
        <div className="barcode-label">{receipt.orderNumber}</div>
      </div>

      <p className="thank-you">Thank you for your visit!</p>

      {/* <button onClick={handleGenerateNew}>
        Generate New Receipt
      </button> */}
    </div>
  );
};

export default Receipt;
