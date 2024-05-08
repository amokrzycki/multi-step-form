const useFormValidator = () => {
  const validateName = (name: string | null) =>
    name && /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

  const validateEmail = (email: string | null) =>
    email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateNumber = (number: string | null) =>
    number && /^\+\d{1,4}\d{5,14}$/.test(number);

  return [
    {
      validate: validateName,
      message: "Name must be in the format: Firstname Lastname",
    },
    {
      validate: validateEmail,
      message: "Provide a valid email address",
    },
    {
      validate: validateNumber,
      message: "Provide a valid phone number",
    },
  ];
};

export default useFormValidator;
