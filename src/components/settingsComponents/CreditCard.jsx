

import React from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import styles from "./CreditCard.module.css";

function CreditCard() {
  const data = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  const [cardDetails, setCardDetails] = React.useState(data);

  const handleInputFocus = (e) => {
    setCardDetails({ ...cardDetails, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  return (
    <div className={`${styles.cardContainer} w-[100%] h-[100%] mx-auto self-center`}>
      <Cards
        cvc={cardDetails.cvc}
        expiry={cardDetails.expiry}
        focused={cardDetails.focus}
        name={cardDetails.name}
        number={cardDetails.number}
      />
      <div>
        <form className={styles.cardForm}>
          <input
            type="number"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            value={cardDetails.number}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            value={cardDetails.name}
          />
          <div className={styles.bottom}>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY Expiry"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cardDetails.expiry}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cardDetails.cvc}
              maxLength={3}
            />
          </div>
          <div className="w-[100%] h-[4rem] bg-primary-blue rounded-lg mt-4">
            <button type="submit" className="w-[100%] h-[100%] text-3xl text-white">
                Procced to Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreditCard;