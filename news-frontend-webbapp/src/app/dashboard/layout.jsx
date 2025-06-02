"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import useFetchCurrentUser from "../../../customHooks/useFetchCurrentUser";
import MainButton from "../../../components/mainButton";
import { useEffect, useState } from "react";
import LoginPage from "../news/login/page";

export default function DashboardLayout({ children }) {
  const [hasToken, setHasToken] = useState(null);
  const { user, loading, error } = useFetchCurrentUser();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setHasToken(!!token);
  }, []);
  const logOut = () => {
    try {
      localStorage.removeItem("userToken");
      setHasToken(false);
      router.push("/");
    } catch (error) {
      console.log("Fel vid utloggning", error.message);
    }
  };

  if (hasToken === null || loading) return <p>Laddar användare...</p>;

  if (!hasToken) {
    return <LoginPage />;
  }
  if (error) {
    return <p>Fel vid hämtning av användare</p>;
  }

  return (
    <div className="flex gap-4 min-h-screen bg-gray-100 shadow-lg">
      {/* Sidomeny */}
      <div className="bg-blue-400 w-96 p-4">
        <h3 className="text-white font-bold">
          <Link href="/dashboard">Dashboard</Link>
        </h3>
        <div className="my-6">
          <Link className="text-white border-b-2 block" href="/dashboard/posts">
            Posts
          </Link>
        </div>
      </div>

      {/* Huvudinnehåll */}
      <div className="bg-white flex-1 p-4 shadow shadow-amber-200">
        <div className="flex justify-end items-center mb-4">
          {user && <span className="text-green-600 pr-4">{user.name}</span>}
          <MainButton
            className="ml-10 text-pink-500"
            title="Logga ut"
            clickHandler={logOut}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
