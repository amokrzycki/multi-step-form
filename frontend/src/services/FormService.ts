import http from "../http-common";
import FormType from "../types/FormType.ts";

const postFormData = (data: FormType) => {
  return http.post("/register", data);
};

const FormService = {
  postFormData,
};

export default FormService;
