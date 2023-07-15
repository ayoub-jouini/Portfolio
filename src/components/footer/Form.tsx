"use client";

import { useState } from "react";
import Input from "../input/Input";
import TextArea from "../input/TextArea";

interface Props {}

const Form: React.FC<Props> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const changeName = (event: any) => {
    setName(event.target.value);
  };
  const changeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const changeSubject = (event: any) => {
    setSubject(event.target.value);
  };
  const changeMessage = (event: any) => {
    setMessage(event.target.value);
  };

  return (
    <form className="w-full h-full flex flex-col justify-between">
      <div className="w-full flex flex-col justify-between md:grid md:grid-cols-2 md:gap-3">
        <Input
          type="text"
          value={name}
          changeValue={changeName}
          placeholder="Name"
        />
        <Input
          type="email"
          value={email}
          changeValue={changeEmail}
          placeholder="Email"
        />
      </div>
      <Input
        type="text"
        value={subject}
        changeValue={changeSubject}
        placeholder="Subject"
      />
      <TextArea
        value={message}
        changeValue={changeMessage}
        placeholder="Message"
      />
      <button
        type="submit"
        className="flex border-2 border-secondary rounded-[16px] justify-between items-center h-12 w-52 my-3"
      >
        <p className="justify-self-center ml-5">Send Message</p>
        <div className="bg-secondary h-12 w-12 flex justify-center items-center rounded-[16px]">
          <img className="" alt="send" src="/icons/send.svg" />
        </div>
      </button>
    </form>
  );
};

export default Form;
