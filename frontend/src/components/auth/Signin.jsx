import React from "react";
import Container from "../Container";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";
import CustomLink from "../CustomLink";

export default function Signin() {
  return (
    <div className="fixed inset-0 dark:bg-primary -z-10 bg-white flex justify-center items-center">
      <Container>
        <form className="dark:bg-secondary bg-white drop-shadow-lg rounded p-6 w-72 space-y-6">
          <Title>Sign in</Title>
          <FormInput label="Email" placeholder="john@email.com" name="email"/>
          <FormInput label="Password" placeholder="*******" name="password"/>
          <Submit value="Sign in" />

          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forget password</CustomLink>
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
