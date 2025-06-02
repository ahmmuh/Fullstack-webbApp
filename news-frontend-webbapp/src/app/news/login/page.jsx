"use client";
import React, { useState } from "react";
import Input from "../../../../components/input";
import MainButton from "../../../../components/mainButton";
import { signIn } from "../../../../backend/authAPI";
import { useRouter } from "next/navigation";

function LoginPage() {
  //Router
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      username: user.username,
      password: user.password,
    };

    await signIn(userInfo);
    router.push("/dashboard");

    console.log("Logged in med ", user);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded p-8 shadow-lg w-full max-w-md">
        <h2 className="text text-cyan-500 font-medium mb-5">Please Login</h2>
        <form onSubmit={handleSubmit}>
          <Input
            id={"username"}
            labelText={"username"}
            placeholder={"username"}
            type={"text"}
            name={"username"}
            value={user.username}
            handlerChange={changeHandler}
          />{" "}
          <Input
            id={"password"}
            labelText={"password"}
            placeholder={"password"}
            type={"password"}
            name={"password"}
            value={user.password}
            handlerChange={changeHandler}
          />
          <MainButton
            title={"Login"}
            bgColor={"bg-pink-400"}
            color={"text-white"}
            width={"w-full"}
            height={"h-10"}
            border={"border rounded-lg"}
            hover={"hover:bg-pink-500"}
          />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
