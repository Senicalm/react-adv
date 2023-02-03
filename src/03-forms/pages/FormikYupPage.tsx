import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailAddress: ''
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema:Yup.object({
      firstName:Yup.string().max(15,'Debe de tener 15 carateres o menos').required('Requerido'),
      lastName:Yup.string().max(15,'Debe de tener 15 carateres o menos').required('Requerido'),
      emailAddress:Yup.string().email('Formato incorrecto').required('Requerido')
    })
  });

  return (
    <div>
      <h1>Formik yup tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="emailAddress">Email address</label>
        <input
          type="text"
          {...getFieldProps('emailAddress')}
        />
        {touched.emailAddress && errors.emailAddress && <span>{errors.emailAddress}</span>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
