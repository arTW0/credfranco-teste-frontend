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
          className='form-control flex items-center h-10 px-2 mt-3 rounded-md bg-slate-200'
          id="email"
          name="email"
          placeholder="Email"
        />
        <Field
          className='form-control flex items-center h-10 mt-2 px-2 rounded-md bg-slate-200'
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
        />
        <button className='items-center mt-2 px-2 rounded-md bg-slate-800 text-slate-200 font-bold h-10 w-24 hover:bg-slate-700' type="submit">
          Entrar
        </button>
      </Form>
    </Formik>
  )
}