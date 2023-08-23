'use client'

import { Formik, Field, Form, FormikHelpers } from 'formik'

interface Values {
  email: string;
  password: string;
}

export default function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}

      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form>
        <Field
          className='form-control flex items-center h-10 px-2 mt-3 rounded-md bg-white-100'
          id="email"
          name="email"
          placeholder="Email"
        />
        <Field
          className='form-control flex items-center h-10 mt-2 px-2 rounded-md bg-white-100'
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
        />
        <button className='items-center mt-2 px-2 rounded-md bg-black-800 text-white-100 font-bold h-10 w-24 hover:bg-black-100' type="submit">
          Entrar
        </button>
      </Form>
    </Formik>
  )
}