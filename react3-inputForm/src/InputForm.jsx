import "./App.css";
import EmailInput from "./components/EmailInput/EmailInput";
import NameInput from "./components/NameInput/NameInput";
import CountryInput from "./components/CountryInput/CountryInput";
import AddressInput from "./components/AddressInput/AddressInput";
import PaymentMethodInput from "./components/PaymentMethodInput/PaymentMethodInput";
import Checkbox from "./components/Checkbox/Checkbox";
import Orders from "./components/Orders/Orders";
import { useContext } from "react";
import { FormContext } from "./formContext";

function InputForm() {
  const {
    email,
    name,
    country,
    setCountry,
    address,
    paymentMethod,
    orders,
    setOrders,
    isSubmitted,
    setIsSubmitted,
    checked,
    isValid,
    setIsValid,
    setEmail,
    setName,
    setAddress,
    setPaymentMethod,
    setChecked,
  } = useContext(FormContext);

  function handleSubmission() {
    function reset() {
      setIsValid({
        email: false,
        name: false,
        address: false,
      });
      setName("");
      setEmail("");
      setAddress("");
      setCountry("Hrvatska");
      setPaymentMethod("pouzećem");
      setChecked(false);
    }

    if (!isValid.email || !isValid.name || !isValid.address)
      return alert("Unesite ispravne podatke!");
    if (!checked) return alert("Prihvatite uvjete!");
    const order = { email, name, country, address, paymentMethod };
    setOrders([...orders, order]);
    setIsSubmitted(true);
    reset();
  }

  return (
    <div className="inputForm">
      <div className="inputForm__wrapper">
        <div className="inputForm__heading">
          <p>
            Račun --&gt; <b>Plačanje</b>{" "}
          </p>
        </div>

        <div className="inputForm__container">
          <p>Kontakt</p>
          <div className="inputForm__border">
            <EmailInput />
          </div>
        </div>
        <div className="inputForm__container">
          <p>Adresa</p>
          <div className="inputForm__border">
            <NameInput />
            <CountryInput />
            <AddressInput />
          </div>
        </div>
        <div className="inputForm__container">
          <p>Način plaćanja</p>
          <div className="inputForm__border">
            <PaymentMethodInput />
          </div>
        </div>
        <Checkbox />
        <button onClick={handleSubmission} className="inputForm__button">
          Naruči
        </button>
      </div>
      {isSubmitted && <Orders />}
    </div>
  );
}
export default InputForm;
