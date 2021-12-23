import * as Yup from "yup";

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const schema = Yup.object().shape({
  first: Yup.string()
    .required("First name is required.")
    .min(2, "First name must be at least 2 characters long."),

  last: Yup.string()
    .required("Last name is required.")
    .min(2, "Last name must be at least 2 characters long."),
  phone: Yup.string()
    .matches(phoneRegex, "Invalid phone number.").notRequired(),

  email: Yup.string().email("Must enter valid email").required(),
  message: Yup.string().required("Must fill out text box field."),
});

export default schema;
