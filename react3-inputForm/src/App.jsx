import "./App.css";
import InputForm from "./InputForm";
import { FormProvider } from './formContext';
function App() {
  return (
    <FormProvider>
      <div className="app">
        <InputForm />
      </div>
    </FormProvider>
  );
}
export default App;