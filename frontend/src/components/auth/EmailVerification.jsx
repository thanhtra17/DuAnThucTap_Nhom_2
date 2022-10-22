import React, { useEffect, useRef, useState } from "react";
import { commonModalClasses } from "../../utils/theme";
import Container from "../Container";
import FormContainer from "../form/FormContainer";
import Submit from "../form/Submit";
import Title from "../form/Title";

const OTP_LENGTH = 6;

export default function EmailVerification() {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [activeOtpIndex, setActiveOptIndex] = useState(0);

  const focusNextInputField = (index) => {
    setActiveOptIndex(index + 1)
  }

  const focusPrevInputField = (index) => {
    let nextIndex;
    const diff = index - 1;
    nextIndex = diff !== 0 ? diff : 0;
    setActiveOptIndex(nextIndex);
  }

  const inputRef = useRef()
  const handleOtpChange = ({target}, index) => {
    const { value } = target;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1, value.length);

    if (!value) focusPrevInputField(index);
    else focusNextInputField(index);
    setOtp([...newOtp]);
  }

  const handleKeyDown = ({key}, index) => {
    if (key === "Backspace") {
      focusPrevInputField(index);
    }
  }
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex])
  
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses}>
          <div>
            <Title>Please enter the OTP to verify your account</Title>
            <p className="text-center dark:text-dark-subtle text-light-subtle">
              OTP has been sent to your email
            </p>
          </div>

          <div className="flex justify-center items-center space-x-4">
            {otp.map((_, index) => {
              return (
                <input
                  ref={activeOtpIndex === index ? inputRef : null}
                  key={index}
                  type="number"
                  value={otp[index] || ''}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white 
                  focus:border-primary rounded bg-transparent ontline-none text-center dark:text-white text-primary font-semibold text-xl"
                />
              );
            })}
          </div>

          <Submit value="Send Link" />
        </form>
      </Container>
    </FormContainer>
  );
}
