import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';


interface formValues{
    firstName:string,
    lastName:string,
    emailAddress:string
}
export const FormikBasicPage = () => {

  const validate = ({ firstName, lastName, emailAddress }: formValues) => {

    const errors: FormikErrors<formValues> = {}

    if (!firstName) {
      errors.firstName = 'Required';
    } else if (firstName.length >= 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!lastName) {
      errors.lastName = 'Required';
    } else if (lastName.length >= 15) {
      errors.lastName = 'Must be 15 characters or less';
    }

    if (!emailAddress) {
      errors.emailAddress = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress)) {
      errors.emailAddress = 'Invalid email address';
    }


    return errors;
  }

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailAddress: ''
    },
    onSubmit: values => {
      console.log(values);
    },
    validate: validate
  });


  return (
    <div>
      <h1>Formik basic tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="emailAddress">Email address</label>
        <input
          type="text"
          name="emailAddress"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.emailAddress}
        />
        {touched.emailAddress && errors.emailAddress && <span>{errors.emailAddress}</span>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
