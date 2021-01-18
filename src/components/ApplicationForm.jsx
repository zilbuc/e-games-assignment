import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './ApplicationForm.module.css';

export const ApplicationForm = ({ title, body }) => {
  const {
    errors,
    handleChange,
    handleReset,
    handleSubmit,
    setSubmitting,
    values: { firstName, lastName, message},
    touched
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required!"),
      lastName: Yup.string()
        .required("Required!"),
      message: Yup.string()
        .required("Required!"),
    }),
    onSubmit: values => {
      console.log({ values })
      setSubmitting(false);
      handleReset(values);
    }
  });
  
  return (
    <div className={styles.applicationForm}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{body}</div>
      
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div>
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder='Your name here'
          />
          {errors.firstName && touched.firstName && (
            <p className={styles.errorMessage}>{errors.firstName}</p>
          )}
        </div>
        <div>
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder='Your last name here'
          />
          {errors.lastName && touched.lastName && (
            <p className={styles.errorMessage}>{errors.lastName}</p>
          )}
        </div>
        <div>
          <label>Your message</label>
          <textarea
            name="message"
            value={message}
            onChange={handleChange}
            placeholder='Type your message here'
          />
          {errors.message && touched.message && (
            <p className={styles.errorMessageTextArea}>{errors.message}</p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
