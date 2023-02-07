import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTestInput } from '../components/MyTestInput';

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string().max(15, 'Debe de tener 15 carateres o menos').min(2, 'Debe de tener 2 letras como minimo').required('Requerido'),
                        email: Yup.string().email('Formato incorrecto').required('Requerido'),
                        password1: Yup.string().max(15, 'Debe de tener 6 carateres como minimo').required('Requerido'),
                        password2: Yup.string().max(15, 'Debe de tener 6 caracteres como minimo').required('Requerido').oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                    })
                }>
                {
                    (formik) => (
                        <Form>
                            <MyTestInput
                                label="Nombre"
                                name={'name'} 
                                placeholder="Nombre"/>
                            <MyTestInput 
                                label="Email" 
                                name="email"
                                type='email'
                                placeholder='Email'/>
                            <MyTestInput 
                                label="Password" 
                                name="password1"
                                type='password'
                                placeholder='Password'/>
                            <MyTestInput 
                                label="Repeat password" 
                                name="password2"
                                type='password'
                                placeholder='Repeat password'/>

                            <button type='submit'>Create</button>
                            <button type='button' onClick={formik.handleReset}>Reset form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
