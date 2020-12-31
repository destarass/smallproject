import React from "react";
import {
  Container,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
  Icon,
  Form,
  FormH1,
} from "./SigninElements";

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">ec'lat</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In to your Account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
