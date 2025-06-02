"use client";
import Image from "next/image";
import { useState } from "react";
import NewsPage from "./news/page";
import LoginPage from "./news/login/page";
import CreateNewsPage from "./dashboard/posts/create/page";
import MainButton from "../../components/mainButton";

export default function Home() {
  const user = true;
  const [show, setShow] = useState(true);
  const toggleHandler = () => {
    setShow(!show);
  };
  return (
    <div className="">
      <div className=" p-4 flex justify-center items-end">
        <MainButton
          clickHandler={toggleHandler}
          title={show ? "Register" : "Login"}
          width={"w-1/2"}
        />
      </div>
      {show ? <LoginPage /> : <CreateNewsPage />}
    </div>
  );
}
