import React from 'react'
import PropTypes from 'prop-types'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const LoginForm = ({ logged, fetching, onLogin }) => {
  const initialCredentials = {
    email: '',
    password: '',
  }

  return (
    <Formik
      // *** Initial values that the form will take
      initialValues={initialCredentials}
      // *** Yup Validation Schema ***
      validationSchema={loginSchema}
      // ** onSubmit Event
      onSubmit={async (values) => {
        onLogin(values.email, values.password);
      }}
    >
      {/* We obtain props from Formik */}

      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
      }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            type="email"
            name="email"
            placeholder="example@email.com"
          />

          {/* Email Errors */}
          {errors.email && touched.email && (
            <ErrorMessage name="email" component="div"></ErrorMessage>
          )}

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />
          {/* Password Errors */}
          {errors.password && touched.password && (
            <ErrorMessage name="password" component="div"></ErrorMessage>
          )}
          <button type="submit">Login</button>
          {fetching ? <p>LOADING...</p> : null}
          {isSubmitting ? <p>Login your credentials...</p> : null}
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  logged: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
}

export default LoginForm
