import { useContext, useEffect, useState } from "react";
import classes from "../index.module.css";
import { FormContext } from "../../formContext";

const NameInput = () => {
  const { name, setName, isValid, setIsValid } = useContext(FormContext);
  const [isValidName, setValidName] = useState(false);
  useEffect(() => {
    const validation = name.length > 4;
    setValidName(validation);
    if (validation !== isValid.name) setIsValid({ ...isValid, name: true });
  }, [isValid, name, setIsValid]);
  return (
    <div className={classes.container}>
      <p>Ime:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={classes.input}
      />
      {!isValidName && name.length > 0 && (
        <span className={classes.warning}>Ime je prekratko</span>
      )}
    </div>
  );
};

export default NameInput;
