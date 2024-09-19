import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { json, Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { z } from "zod";
// import { useDispatch, useSelector } from "react-redux";

const userSchema = z.object({
  email: z.string().email("Invalid email address"),
  Owner: z.string(),
  password: z
    .string()
    .min(6, "Password must be atleast 6 character long")
    .max(10, "Max 10 character"),
});
const Company = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  const [show, setShow] = useState(false);
  const onSubmit = (data) => {
    const email = localStorage.getItem("companyEmail");
    const pass = localStorage.getItem("companyPass");
    const Owner = localStorage.getItem("companyName");
    if (email == data.email && pass == data.password && data.Owner == Owner) {
      setShow(true);
    } else {
      alert("access required to only admin mode or Invalid Credentials");
    }

    // const allcompanies = JSON.parse(localStorage.getItem("company"));
    // const current = allcompanies.filter((curr) => {
    //   return curr.email == data.email;
    // });
    // if (
    //   current[0].email == data.email &&
    //   current[0].password == data.password
    // ) {
    //   setShow(true);
    // }
  };
  const navigate = useNavigate();
  function logout() {
    // localStorage.removeItem("signupEmail");
    // localStorage.removeItem("signupPass");
    navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex
       flex-col items-center h-screen justify-center gap-5 "
    >
      <div>
        <h1> Company Login</h1>
      </div>
      <div
        className="flex
         gap-3"
      >
        <label htmlFor="">Owner</label>
        <input
          className="border-2 rounded-md"
          type="text"
          {...register("Owner")}
        />
      </div>

      <div
        className="flex
       gap-3"
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

      <button type="submit" className="bg-green-300 rounded-md p-2 ">
        {" "}
        Signin
      </button>
      <p>
        Dont have an acc <Link to={"/Home"}> Create Acc </Link>{" "}
      </p>

      {show ? (
        <Link to={"/Dashboard"}>
          Press <span className="text-blue-800">Ok</span> to continue
        </Link>
      ) : null}
      <button onClick={logout}>Logout</button>
    </form>
  );
};

export default Company;
