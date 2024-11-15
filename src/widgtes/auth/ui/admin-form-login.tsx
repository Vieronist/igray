import { AdminLogin, AlertModal, useLoginAdmin } from "@/shared";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export const AdminFormLogin = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);

  const { login, loginError, loginSuccess, loginData } = useLoginAdmin();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<AdminLogin>();

  const onSubmit: SubmitHandler<AdminLogin> = (data) => login(data);

  useEffect(() => {
    if (loginSuccess && loginData) {
      setIsAdmin(loginData?.auth);
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        router.push("orders");
      }, 3000);
      return () => clearTimeout(timer);
    }

  }, [loginData, loginError, loginSuccess, router]);

  return (
    <>
      <AlertModal isAdmin={isAdmin} isVisible={isVisible} />
      <div className="mx-auto w-1/2 mt-[9%]">
        <h3 className="text-[#4FCA9C] text-5xl mb-[20px]">
          Log in to Admin Panel
        </h3>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 w-2/5">
            <input
              type="text"
              className="bg-transparent border-[#4FCA9C] border-b-2 outline-none w-full pb-2"
              placeholder="Log in"
              {...register("login", { required: true })}
            />
          </div>
          <div className="mb-5 w-2/5">
            <input
              type="text"
              className="bg-transparent border-[#4FCA9C] border-b-2 outline-none w-full pb-2"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <button className="bg-[#4FCA9C] text-white rounded-[14px] py-[15px] px-[12px] sm:w-auto sm:px-[30px] sm:py-[15px]">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};
