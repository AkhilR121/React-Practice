import React, { ChangeEvent, FormEvent, useState } from "react";
import Toast from "./Toast";
import "./index.css";
import {
  CheckboxInput,
  DateInput,
  DateTimeInput,
  EmailInput,
  NumberInput,
  PasswordInput,
  RadioInput,
  RangeInput,
  SelectInput,
  TelInput,
  TextAreaInput,
  TextInput,
  TimeInput,
  UrlInput,
} from "./Inputs";

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    age: 0,
    agree: false,
    password: "",
    radio: false,
    date: "",
    datetime: "",
    select: "",
    range: 0,
    tel: "",
    time: "",
    url: "",
  });

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = event.target as any;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData as any);
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto">
      <TextInput
        label="Name"
        id="name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <div className="mb-4">
        <EmailInput
          label="Email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <TextAreaInput
        label="Message"
        id="message"
        value={formData.message}
        onChange={handleInputChange}
      />

      <CheckboxInput
        label="I agree to the terms and conditions"
        id="agree"
        checked={formData.agree}
        onChange={handleInputChange}
      />
      <PasswordInput
        label="Password"
        id="password"
        value={formData.password}
        onChange={handleInputChange}
      />

      <RadioInput
        label="radio"
        id="radio"
        value="radio"
        checked={formData.radio}
        onChange={handleInputChange}
      />

      <DateInput
        label="Date"
        id="date"
        value={formData.date}
        onChange={handleInputChange}
      />

      <DateTimeInput
        label="DateTime"
        id="datetime"
        value={formData.datetime}
        onChange={handleInputChange}
      />

      <SelectInput
        label="Select"
        id="select"
        value={formData.select}
        onChange={handleInputChange}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </SelectInput>

      <RangeInput
        label="Range"
        id="range"
        value={formData.range}
        onChange={handleInputChange}
        min={0}
        max={100}
      />

      <TelInput
        label="Tel"
        id="tel"
        value={formData.tel}
        onChange={handleInputChange}
      />

      <TimeInput
        label="Time"
        id="time"
        value={formData.time}
        onChange={handleInputChange}
      />

      <UrlInput
        label="Url"
        id="url"
        value={formData.url}
        onChange={handleInputChange}
      />

      <NumberInput
        label="Age"
        id="age"
        value={formData.age}
        onChange={handleInputChange}
        min={0}
        max={100}
      />

      <button
        type="submit"
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Form
        onSubmit={() => {
          setShow(true);
        }}
      />
      <Toast
        show={show}
        duration={1000}
        message="Hello World"
        type="success"
        onClose={() => {
          setShow(false);
        }}
      />
    </>
  );
}
