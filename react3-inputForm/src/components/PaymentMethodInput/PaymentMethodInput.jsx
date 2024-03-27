import { useContext } from "react";
import { FormContext } from "../../formContext";

const PaymentMethodInput = () => {
  const{paymentMethod, setPaymentMethod}=useContext(FormContext)

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div>
      <div>
        <p>
          <input
            type="radio"
            value="pouzećem"
            checked={paymentMethod === "pouzećem"}
            onChange={handlePaymentMethodChange}
          />
          Pouzećem
        </p>
      </div>
      <div>
        <p>
          <input
            type="radio"
            value="karticom"
            checked={paymentMethod === "karticom"}
            onChange={handlePaymentMethodChange}
          />
          Karticom
        </p>
      </div>
    </div>
  );
};

export default PaymentMethodInput;
