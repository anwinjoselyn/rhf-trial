import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const required = "This field is required";

export const schema = yupResolver(
  yup.object().shape({
    person: yup.object().shape({
      name: yup.string().required(required),
      surname: yup.string(),
    }),
    car: yup.object().shape({
      model: yup.string().required(required),
      insuranceData: yup.object().shape({
        company: yup.string().required(required),
        otherData: yup.string(),
      }),
    }),
  })
);
