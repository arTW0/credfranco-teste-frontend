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
        <Field id="email" name="email" placeholder="Email" />
        <Field type="password" id="password" name="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </Form>
    </Formik>
  )
}