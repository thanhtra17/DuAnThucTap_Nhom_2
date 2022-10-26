import React from 'react'
import { commonModalClasses } from '../../utils/theme';
import {useSearchParams} from 'react-router-dom';
import Container from "../Container";
import FormContainer from '../form/FormContainer';
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import Title from "../form/Title";

export default function ConfirmPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const id = searchParams.get('id');
  console.log(token, id)
  return (
    <FormContainer className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className={commonModalClasses +" w-96"}>
          <Title>Enter New Password</Title>
          <FormInput label="New Password" placeholder="***********" name="password" type="password"/>
          <FormInput label="Confirm Password" placeholder="***********" name="confirmPassword" type="password"/>
          <Submit value="Confirm Password" />
        </form>
      </Container>
    </FormContainer>
  )
}
