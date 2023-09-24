import { errorToJSON } from "next/dist/server/render";
import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onBlur" });
  const onValid = (data: LoginForm) => {};
  const onInvaild = (error: FieldErrors) => {};
  return (
    <div>
      <form className="px-4 py-4 flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: "Username is required" })}
        ></input>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        ></input>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        ></input>
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
}
