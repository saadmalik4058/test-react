import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const userSchema = z.object({
  income: z.string(),
});
function Dashboard() {
  const [income, setIncome] = useState(100);
  function incomeSet(data) {
    let b = parseInt(data.income);
    setIncome(income + b);
  }
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema),
  });
  return (
    <div className=" m-3 h-screen">
      <h1>Total income of the company is {income}</h1>
      <form onSubmit={handleSubmit(incomeSet)}>
        <label htmlFor="">Income</label>
        <input
          className=" m-3 border-2 rounded-md"
          type="number"
          {...register("income")}
        />
        <button className="bg-green-300 rounded-md p-2 " type="submit">
          Add Income
        </button>
      </form>

      <form
        className="flex
      justify-between mt-2 "
      >
        <div>
          <h1>User 1 </h1>
        </div>
        <div>
          <h1>User 2</h1>
        </div>
        <div>
          <h1>User 3</h1>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
