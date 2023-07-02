import { useState, useEffect } from "react";
import FormType from "../types/FormType.ts";

const useValidator = (formData: FormType) => {
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validNumber, setValidNumber] = useState(true);

  useEffect(() => {
    // Validate name
    const isValidName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(formData.name);
    setValidName(isValidName);

    // Validate email
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    setValidEmail(isValidEmail);

    // Validate number
    const isValidNumber = /^\+\d{1,4}\d{5,14}$/.test(formData.number);
    setValidNumber(isValidNumber);
  }, [formData.name, formData.email, formData.number]);

  return {
    validName,
    validEmail,
    validNumber,
  };
};

export default useValidator;
