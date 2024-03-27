import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("Hrvatska");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("pouzećem");
  const [orders, setOrders] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isValid, setIsValid] = useState({
    email: false,
    name: false,
    address: false,
  });

  const contextValue = {
    email,
    setEmail,
    name,
    setName,
    country,
    setCountry,
    address,
    setAddress,
    paymentMethod,
    setPaymentMethod,
    orders,
    setOrders,
    isSubmitted,
    setIsSubmitted,
    checked,
    setChecked,
    isValid,
    setIsValid,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
