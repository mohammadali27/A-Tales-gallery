"use client";
import loginPage from "@/app/login/login";
import { Button } from "@heroui/react";


const LoginButton = () => {
  return <Button onClick={() => loginPage()}>Login</Button>;
};

export default LoginButton;
