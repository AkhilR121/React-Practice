import React from "react";
import { Form } from "./ExampleForm";
import Toast from "./Toast";

export const Example = () => {
  const [show, setShow] = React.useState(true);

  return (
    <div>
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
    </div>
  );
};
