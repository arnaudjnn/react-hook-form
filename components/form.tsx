"use client";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("firstName")} />
        <input {...register("lastName", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}
