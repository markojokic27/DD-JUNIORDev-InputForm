import classes from "../index.module.css";
import { useContext } from "react";
import { FormContext } from "../../formContext";

const Checkbox = () => {
  const { checked, setChecked } = useContext(FormContext);
  return (
    <div className={classes.checkbox}>
      <p>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        Prihvaćam uvjete
      </p>
    </div>
  );
};
export default Checkbox;
