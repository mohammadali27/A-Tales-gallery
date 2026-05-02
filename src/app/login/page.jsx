"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {
  const HandelGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    console.log({ data, error });
    alert("Signup successful! Please check your email to verify your account.");
  };

  return (
    <Form
      className="flex w-96 flex-col gap-4 p-20 shadow-lg rounded-lg border mt-5 mb-5 mx-auto"
      render={(props) => <form {...props} data-custom="foo" />}
      onSubmit={onSubmit}
    >
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter your email" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>

      <div className="flex items-center justify-between gap-2">
        <Button variant="primary" type="submit">
          <Check /> Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>

      <div className="flex items-center justify-between gap-2 ">
        <Button onClick={HandelGoogle} className="w-full" variant="secondary">
          <GrGoogle /> Sign up with Google
        </Button>
      </div>
    </Form>
  );
}
