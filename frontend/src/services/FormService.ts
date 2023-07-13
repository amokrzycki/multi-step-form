import http from "../http-common";

const getSteps = () => {
  return http.get("/steps");
};

const FormService = {
  getSteps,
};

export default FormService;
