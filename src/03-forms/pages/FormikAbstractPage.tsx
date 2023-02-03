import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTestInput, MyCheckbox, MySelect } from '../components';

export const FormikAbstractPage = () => {

  return (
    <div>
      <h1>Formik abstractation tutorial</h1>

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

        {(formik) => {
          return (
            <Form noValidate>

              <MyTestInput label="First name" name="firstName" placeholder='First name' />
              <MyTestInput label="Last name" name="lastName" placeholder='Last name' />
              <MyTestInput label="Email address" name="emailAddress" type='email' placeholder='Email' />

              <MySelect label="Job type" name="jobType">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-junior">IT Junior</option>
              </MySelect>

              <MyCheckbox label="Terms and conditions" name="terms" />
              {/* <label>
                <input name="terms" type="checkbox" />
                Terma and conditions
              </label>
              <ErrorMessage name="terms" component="span" /> */}

              <button type='submit'>Submit</button>
            </Form>);
        }
        }
      </Formik>


    </div>
  )
}
