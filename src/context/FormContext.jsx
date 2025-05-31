import { createContext, useState } from "react";
export const FormContext = createContext();

export default function FormContextProvider({ children }) {
  const [step, setStep] = useState(1);
  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const nextStep = () => {
    if (step < 5) setStep((prev) => prev + 1);
  };

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [plan, setPlan] = useState("Arcade");
  const [duration, setDuration] = useState("monthly");
  const [addOns, setAddOns] = useState([]);
  return (
    <FormContext.Provider
      value={{ step, prevStep, nextStep, info, plan, duration, addOns }}
    >
      {children}
    </FormContext.Provider>
  );
}
