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
  Toast,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";

export default function SignUpPage() {
  const HandelFrom = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, image, email, password });
    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });
    console.log({ data, error });
    if (data && !error) {
       toast.success("Signup successful! You are now signed up.");
      router.push("/");
      
    } else {
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <Form
   
      className="flex w-96 flex-col gap-4 p-20 shadow-lg rounded-lg border mt-5 mb-5 mx-auto"
      render={(props) => <form {...props} data-custom="foo" />}
      onSubmit={onSubmit}
    >
      <TextField isRequired name="name" type="text">
        <Label htmlFor="name">Name</Label>
        <Input placeholder="Enter your name" />
        <FieldError />
      </TextField>
      
      <TextField isRequired name="image" type="text">
        <Label htmlFor="image">Image</Label>
        <Input placeholder="Enter your image URL" />
        <FieldError />
      </TextField>

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
        <Button onClick={HandelFrom} className="w-full" variant="secondary">
          <GrGoogle /> Sign in with Google
        </Button>
      </div>
       <ToastContainer />
    </Form>
  );
}
