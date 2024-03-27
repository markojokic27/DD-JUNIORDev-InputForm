import { useContext } from "react";
import classes from "../index.module.css";
import { FormContext } from "../../formContext";
const Orders = () => {
  const { orders } = useContext(FormContext);

  return (
    <div className={classes.orders}>
      <h2>Narudžbe:</h2>
      {orders.map((user, index) => (
        <div key={index} className={classes.orders__item}>
          <p>Email: {user.email}</p>
          <p>Ime: {user.name}</p>
          <p>Adresa: {user.address}</p>
          <p>Država: {user.country}</p>
          <p>Način plaćanja: {user.paymentMethod}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
