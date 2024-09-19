import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, redirect } from "react-router-dom";
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be atleast 6 character long")
    .max(10, "Max 10 character"),
  name: z.string(),
});
const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  const [show, setShow] = useState();
  const onSubmit = (data) => {
    localStorage.setItem("companyEmail", data.email);
    localStorage.setItem("companyPass", data.password);
    localStorage.setItem("companyName", data.name);
    console.log(data.name);

    setShow(true);
    

    //  const pre = localStorage.getItem("company")
    //   ? localStorage.getItem("company")
    //   : [];
    // console.log(pre);
    // pre.push(data);
    // localStorage.setItem("company", pre);

    // setShow(true);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex
       flex-col items-center h-screen justify-center gap-5 "
    >
      <div>
        <h1> Company Account Registration</h1>
      </div>
      <div
        className="flex
       gap-3"
      >
        <label htmlFor="name">Name</label>
        <input
          className="border-2 rounded-md"
          type="text"
          {...register("name")}
        />
        {errors.name && <p>{errors.name.message}</p>}
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

      <p>
        <button className="bg-green-300 rounded-md p-2 " type="submit">
          Create an account
        </button>
        {show && (
          <h1>
            Press <Link to={"/Dashboard"}>OK</Link> to continue{" "}
          </h1>
        )}
      </p>
    </form>
  );
};

export default Home;
