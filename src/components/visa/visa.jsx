import { useState } from "react";
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";
import card from "../../assets/card.png";
import "./visa.css";

const Visa = () => {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  // const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [postal, setPostal] = useState("");
  // const [focused, setFocused] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="visa-payment-section">
      <div className="card">
        {/* <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focused}
          name={name}
          number={number}
        /> */}
        <img src={card} alt="card" />
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="form-top">
            <div className="input-container">
              <div className="label">
                <label htmlFor="card-no">credit card number</label>
              </div>
              <input
                type="tel"
                id="card-no"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                // onFocus={(e) => setFocused(e.target.name)}
                className="input"
              />
            </div>
            <div className="input-container">
              <div className="label">
                <label htmlFor="expiry">expiry date</label>
              </div>
              <input
                type="date"
                id="expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="input"
              />
            </div>
          </div>
          <div className="form-bottom">
            <div className="input-container">
              <div className="label">
                <label htmlFor="security">security code</label>
              </div>
              <input
                type="number"
                id="security"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="input"
              />
            </div>
            <div className="input-container">
              <div className="label">
                <label htmlFor="postal">postal code</label>
              </div>
              <input
                type="number"
                id="postal"
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
                className="input"
              />
            </div>
          </div>
          <div className="radio">
            <input type="radio" id="radio" />
            <span>Use this card for next time purchase</span>
          </div>
          <div className="btn">
            <button type="submit">Add card</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Visa;
