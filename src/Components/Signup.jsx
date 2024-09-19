import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";

function Signup() {
  const userSchema = z
    .object({
      email: z.string().email("Invalid email address"),
      password: z
        .string()
        .min(6, "Password must be atleast 6 character long")
        .max(10, "Max 10 character"),
      confirmpassword: z.string(),
    })
    .refine((data) => data.password === data.confirmpassword, {
      message: "Password is not matched",
      path: ["confirmpassword"],
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  function onSubmit(data) {
    localStorage.setItem("signupEmail", data.email);
    localStorage.setItem("signupPass", data.password);

   
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex
       flex-col items-center h-screen justify-center gap-5 "
    >
      <div
        className="flex
       gap-3 items-start"
      >
        <label htmlFor="email">Email</label>
        <input
          className="border-2 rounded-md"
          type="email"
          {...register("email")}
        />

        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div
        className="flex
         gap-3"
      >
        <label htmlFor="password">Password</label>
        <input
          className="border-2 rounded-md"
          type="password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div
        className="flex
         gap-3"
      >
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          className="border-2 rounded-md"
          type="password"
          {...register("confirmpassword")}
        />
        {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
      </div>
      <div className="flex gap-2">
        <label htmlFor="Admin">Admin</label>
        <input type="checkbox" name="Admin" id="" />
        <label htmlFor="User">User</label>
        <input type="checkbox" name="User" id="" />
      </div>
      {/* <Link to={"/Home"} className="bg-green-300 rounded-md p-2 ">
        {" "}
        Signup
      </Link> */}
      <button type="submit" className="bg-green-300 rounded-md p-2 ">
        {" "}
        signup
      </button>
      <Link className="bg-green-300 rounded-md p-2 " to={"/"}>
        Back to SignIn
      </Link>
    </form>
  );
}

export default Signup;
