import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponentsPage = () => {

  return (
    <div>
      <h1>Formik components tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          emailAddress: '',
          terms: false,
          jobType:''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string().max(15, 'Debe de tener 15 carateres o menos').required('Requerido'),
            lastName: Yup.string().max(15, 'Debe de tener 15 carateres o menos').required('Requerido'),
            emailAddress: Yup.string().email('Formato incorrecto').required('Requerido'),
            terms:Yup.boolean().oneOf([true],'Debe de aceptar las condiciones'),
            jobType:Yup.string().required('Requerido').notOneOf(['it-junior'],'Debe de seleccionar otra opcion')
          })
        }>

        {(formik) => (
          <Form>
            <label htmlFor="firstName">First name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="emailAddress">Email address</label>
            <Field name="emailAddress" type="text" />
            <ErrorMessage name="emailAddress" component="span" />

            <label htmlFor="jobType">Job type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terma and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type='submit'>Submit</button>
          </Form>)
        }
      </Formik>


    </div>
  )
}
