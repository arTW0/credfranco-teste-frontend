'use client'

import { Formik, Field, Form } from 'formik'

export default function LoginForm() {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}

      onSubmit={() => {

      }}
    >
      <Form>
        <Field
          className='flex items-center h-10 px-2 mt-3 rounded-md bg-slate-200'
          id="email"
          name="email"
          placeholder="Email"
        />
        <Field
          className='flex items-center h-10 mt-2 px-2 rounded-md bg-slate-200'
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