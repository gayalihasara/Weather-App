import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import {
  PageWrapper,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  Header,
} from "./styles";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Password is too short")
    .required("Please enter the Password"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
});

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
   
    if("gayali@gmail.com" === values.email && "Admin@123" === values.password)
    {
      navigate("/home");
    }
    else
    {
      alert('Authentication Failed!!');
    }
    
  };

  return (
    <div>
      <Header
        style={{ display: "flex", justifyContent: "center", fontSize: "3rem" }}
      >
        Login
      </Header>

      <PageWrapper>
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            isValid,
          }) => {
            return (
              <>
                <Form name="contact" method="post">
                  <Label htmlFor="email">
                    Email
                    <Input
                      type="email"
                      name="email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="email"
                      placeholder="Email"
                      valid={touched.email && !errors.email}
                      error={touched.email && errors.email}
                    />
                  </Label>
                  <ErrorMessage name="email">
                    {(msg) => (
                      <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                    )}
                  </ErrorMessage>

                  <Label htmlFor="password">
                    Password
                    <Input
                      type="password"
                      name="password"
                      autoCorrect="off"
                      autoComplete="password"
                      placeholder="Password"
                      valid={touched.password && !errors.password}
                      error={touched.password && errors.password}
                    />
                  </Label>
                  {errors.password && touched.password && (
                    <StyledInlineErrorMessage>
                      {errors.password}
                    </StyledInlineErrorMessage>
                  )}
                  <Submit type="submit" disabled={!isValid}>
                    {`Submit`}
                  </Submit>
                </Form>
              </>
            );
          }}
        </Formik>
      </PageWrapper>
    </div>
  );
}

export default Login;
