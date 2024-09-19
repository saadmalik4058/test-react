import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, redirect } from "react-router-dom";
import { z } from "zod";
// import { useDispatch, useSelector } from "react-redux";

const userSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be atleast 6 character long")
    .max(10, "Max 10 character"),
});
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const signinData = useSelector((state) => state.auth.signin);

  // useEffect(() => {
  //   dispatch(fetchSignupData()).catch((err) => setIsError(true));
  // }, [dispatch]);
  const [show, setShow] = useState(false);
  const onSubmit = (data) => {
    const email = localStorage.getItem("signupEmail");
    const pass = localStorage.getItem("signupPass");
    if (email == data.email && pass == data.password) {
      setShow(true);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex
       flex-col items-center h-screen justify-center gap-5 "
    >
      <div>
        <h1> Website Login</h1>
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

      {show ? (
        <Link to={"/Company"}>
          Press <span className="text-blue-800">Ok</span> to continue
        </Link>
      ) : null}

      <p>
        did'nt have an account ?<Link to={"/signup"}>Signup</Link>
      </p>
    </form>
  );
};

export default Signin;
