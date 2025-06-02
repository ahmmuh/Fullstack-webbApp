"use client";
import React, { useState } from "react";
import Input from "../../../../../components/input";
import MainButton from "../../../../../components/mainButton";

function CreateNewsPage() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log("New Value");
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
    };
    console.log("New User", newUser);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded p-8 shadow-lg w-full max-w-md">
        <h2 className=" text-cyan-500 font-medium mb-5">
          Please Register Account
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            id={"name"}
            labelText={"Fullname"}
            placeholder={"Fullnamn"}
            type={"text"}
            name={"name"}
            value={user.name}
            handlerChange={changeHandler}
          />
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
            id={"email"}
            labelText={"email"}
            placeholder={"email"}
            type={"email"}
            name={"email"}
            value={user.email}
            handlerChange={changeHandler}
          />
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
            title={"Register"}
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

export default CreateNewsPage;
