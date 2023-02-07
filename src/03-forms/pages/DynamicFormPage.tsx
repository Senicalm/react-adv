
import { Formik, Form } from 'formik';
import { MyCheckbox, MySelect, MyTestInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';


const initialValues:{[key:string]:any}= {};
const requiredFields:{[key:string]:any}= {};

for (const input of formJson) { 

   initialValues[ input.name ] = input.value;

   if(!input.validations) continue;
  
   let schema:any;

   if(input.validations.type === 'string'){
     schema = Yup.string();
   }
   if(input.validations.type === 'boolean'){
     schema = Yup.boolean();
   }

   for (const rule of input.validations.rules) {

    if(rule.type === 'required'){
        schema = schema.required(rule.desc);
    }
    if(rule.type === 'minLength'){
        schema = schema.min((rule as any).value[0],`Minimo ${(rule as any).value[0]} caracteres.`);
    }
    if(rule.type === 'email'){
        schema = schema.email(rule.desc);
    }
    if(rule.type === 'oneOf'){
        schema = schema.oneOf(rule.value,rule.desc);
    }

   }

   requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicFormPage = () => {
  return (
    <div>
        <h1>Dynamic form</h1>
          <Formik
              initialValues={ initialValues}
              validationSchema = {validationSchema}
              onSubmit={(values) => console.log(values)}
          >
              {
                  (formik) => (
                      <Form noValidate>
                        {formJson.map( ({type,name,label,placeholder, options}) =>{ 

                            if (type === 'select') {
                                return (<MySelect
                                    key={name}
                                    label={label}
                                    name={name}
                                >
                                    <option value="0">Select option</option>
                                    {
                                        options?.map(
                                            ({id,label}) =>
                                                <option key={id} value={id}>{label}</option>
                                        )
                                    }

                                </MySelect>)
                            }

                            if (type === 'text' || type === 'password' || type === 'email') {
                                return (<MyTestInput
                                    key={name}
                                    type={type as any}
                                    name={name}
                                    placeholder={placeholder}
                                    label={label} />)
                            }

                            if(type === 'checkbox'){
                                return (<MyCheckbox
                                    key={name} 
                                    label={label} 
                                    name={name}/>)
                            }

                            <span>Tipo no soportado</span>

                        })}
                        <button type="submit">Submit</button>

                      </Form>
                  )
              }
          </Formik>
    </div>
  )
}
