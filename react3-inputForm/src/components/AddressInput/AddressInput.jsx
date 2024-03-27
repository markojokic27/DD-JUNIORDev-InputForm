import { useEffect, useState } from "react";
import classes from "../index.module.css";
import { FormContext } from "../../formContext";
import { useContext } from "react";
const AddressInput = () => {
  const { address, setAddress, isValid, setIsValid } = useContext(FormContext);
  const [isValidAddress, setValidAddress] = useState(false);
  useEffect(() => {
    const validation = address.length > 4;
    setValidAddress(validation);
    if (validation !== isValid.address) {
      setIsValid({ ...isValid, address: validation });
    }
  }, [address, isValid, isValid.address, setIsValid]);
  return (
    <div className={classes.container}>
      <p>Adresa:</p>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={classes.input}
      />
      {!isValidAddress && address.length > 0 && (
        <span className={classes.warning}>Adresa je prekratka</span>
      )}
    </div>
  );
};

export default AddressInput;
