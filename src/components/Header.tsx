"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { status, data } = useSession();

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <header className="container mx-auto p-5 py-0 h-[92px] flex justify-between items-center">
      <Image
        priority
        width={183}
        height={32}
        src="/logo.png"
        alt="Full Stack Week"
      />
      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}
      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border-grayLighter border border-solid p-2 px-3 rounded-full relative">
          <AiOutlineMenu
            size={16}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />
          <Image
            className="rounded-full shadow-md"
            width={34}
            height={34}
            src={data.user.image!}
            alt={data.user.name!}
          />
          {menuIsOpen && (
            <div className="absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
