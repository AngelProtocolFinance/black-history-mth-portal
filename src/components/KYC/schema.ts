import * as Yup from "yup";
import { FormValues } from "./types";
import { SchemaShape } from "types";

const requiredString = Yup.string().required("required");
const shape: SchemaShape<FormValues> = {
  name: Yup.object().shape({
    first: requiredString,
    last: requiredString,
  }),
  address: Yup.object().shape({
    street: requiredString,
    //complement: optional
  }),
  city: requiredString,
  postalCode: requiredString,
  country: Yup.object({ name: requiredString }),
  email: Yup.string().email("invalid").required("required"),
  hasAgreedToTerms: Yup.boolean().oneOf(
    [true],
    "donors must agree to donation terms"
  ),
};

export const schema = Yup.object().shape(shape);
