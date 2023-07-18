"use client";

import { useState } from "react";
import axios from "axios";
import validator from "validator";

import Input from "../input/Input";
import TextArea from "../input/TextArea";
import ContactIcon from "../icons/ContactIcon";

interface Props {}

const Form: React.FC<Props> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const changeName = (event: any) => {
    setName(event.target.value);
  };
  const changeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const changePhone = (event: any) => {
    setPhone(event.target.value);
  };
  const changeMessage = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      validator.isEmpty(name)
        ? setNameError("Name required")
        : setNameError("");
      validator.isEmpty(phone)
        ? setPhoneError("phone required")
        : setPhoneError("");
      validator.isEmpty(email)
        ? setEmailError("Email required")
        : setEmailError("");
      validator.isEmpty(message)
        ? setMessageError("Message required")
        : setMessageError("");

      validator.isEmail(email)
        ? setEmailError("")
        : setEmailError("Valid Email required");
      validator.isMobilePhone(phone)
        ? setPhoneError("")
        : setPhoneError("Valid Phone Number required");

      if (
        nameError === "" &&
        emailError === "" &&
        phoneError === "" &&
        messageError === ""
      ) {
        await axios.post(`/api`, {
          data: {
            name,
            email,
            phone,
            message,
          },
        });
        setIsSuccess(true);
      }
    } catch (err) {
      setIsError(true);
      console.log(err);
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col justify-between"
    >
      <div className="w-full flex flex-col justify-between md:grid md:grid-cols-2 md:gap-3">
        <Input
          type="text"
          value={name}
          changeValue={changeName}
          placeholder="Name"
          error={nameError}
        />
        <Input
          type="email"
          value={email}
          changeValue={changeEmail}
          placeholder="Email"
          error={emailError}
        />
      </div>
      <Input
        type="tel"
        value={phone}
        changeValue={changePhone}
        placeholder="Phone Number"
        error={phoneError}
      />
      <TextArea
        value={message}
        changeValue={changeMessage}
        placeholder="Message"
        error={messageError}
      />
      <div className="flex items-center">
        <button
          type="submit"
          onSubmit={handleSubmit}
          className="flex border-2 border-tertiary dark:border-secondary rounded-[16px] justify-between items-center h-12 w-52 my-3 mr-3"
        >
          <p className="justify-self-center ml-5">Send Message</p>
          <div className="bg-tertiary dark:bg-secondary h-12 w-12 flex justify-center items-center rounded-[16px]">
            <ContactIcon name="send" />
          </div>
        </button>
        {isLoading && (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent dark:border-t-secondary border-t-tertiary dark:border-b-secondary border-b-tertiary dark:border-l-secondary border-l-tertiary align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          />
        )}
        {isSuccess && (
          <div className="text-tertiary dark:text-secondary">
            Email sent successfully!
          </div>
        )}
        {isError && (
          <div className="text-red-300">
            Error sending email. Please try again later.
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
