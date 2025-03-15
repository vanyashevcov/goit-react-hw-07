import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
// import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import s from './ContactForm.module.css'

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  username: "",
  number: "",
};

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={s.container}>
          <div className={s.labelContainer}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={s.formImput}
              type="text"
              name="username"
              id={nameFieldId}
            />
            <ErrorMessage
              name="username"
              component="span"
              className={s.errorMessage}
            />
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={s.formImput}
              type="text"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={s.errorMessage}
            />
          </div>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
