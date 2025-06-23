import { createContext, useState } from "react";
export const FormContext = createContext();

export default function FormContextProvider({ children }) {
  const [step, setStep] = useState(1);
  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const nextStep = async () => {
    if (step === 1) {
      if (validateInfo()) {
        setStep((prev) => prev + 1);
      }
    } else if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      try {
        const response = await fetch(import.meta.env.VITE_API_BASE_URL + "/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: info.name,
            emailAddress: info.emailAddress,
            phoneNumber: info.phoneNumber,
            plan,
            duration,
            addOns,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          console.log("Form submitted successfully");
          setStep((prev) => prev + 1);
        } else {
          console.error("Submission error:", result.message);
          alert("Failed to submit form. Please try again.");
        }
      } catch (err) {
        console.error("Server error:", err);
        alert("Server error. Please try again later.");
      }
    }
  };

  const [info, setInfo] = useState({
    name: "",
    emailAddress: "",
    phoneNumber: "",
  });
  const [infoErrors, setInfoErrors] = useState({});

  const handleInfoChange = (e) => {
    const { name, value } = e.target;

    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    setInfoErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const validateInfo = () => {
    const newErrors = {};

    if (!info.name || info.name.trim() === "") newErrors.name = true;

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(info.emailAddress.trim())) {
      newErrors.emailAddress = true;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(info.phoneNumber.trim())) {
      newErrors.phoneNumber = true;
    }

    setInfoErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const isError = (field) => (infoErrors[field] ? "error" : "");

  const [plan, setPlan] = useState("Arcade");

  const [duration, setDuration] = useState("Monthly");
  const handleDurationChange = () => {
    duration === "Monthly" ? setDuration("Yearly") : setDuration("Monthly");
  };
  const isYearly = () => {
    return duration === "Yearly";
  };

  const [addOns, setAddOns] = useState([]);
  const handleToggleAddOn = (addOnName) => {
    if (addOns.includes(addOnName)) {
      setAddOns(addOns.filter((name) => name !== addOnName));
    } else {
      setAddOns([...addOns, addOnName]);
    }
  };
  return (
    <FormContext.Provider
      value={{
        step,
        prevStep,
        nextStep,
        info,
        handleInfoChange,
        isError,
        validateInfo,
        plan,
        setPlan,
        duration,
        handleDurationChange,
        isYearly,
        addOns,
        handleToggleAddOn,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
