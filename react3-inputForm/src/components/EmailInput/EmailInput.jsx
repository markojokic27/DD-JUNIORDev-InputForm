import { useContext, useEffect, useState } from "react";
import classes from "../index.module.css";
import { FormContext } from "../../formContext";

const EmailInput = () => {
  const { email, setEmail, isValid, setIsValid } = useContext(FormContext);

  const [isValidEmail, setValidEmail] = useState(false);
  useEffect(() => {
    const validation =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length > 4;
    setValidEmail(validation);
    if (validation !== isValid.email) setIsValid({ ...isValid, email: true });
  }, [email, isValid, setIsValid]);
  return (
    <div className={classes.containerEmail}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email adresa..."
        className={classes.input}
      />
      {!isValidEmail && email.length > 0 && (
        <span className={classes.warning}>Neispravan format emaila</span>
      )}
    </div>
  );
};

export default EmailInput;
