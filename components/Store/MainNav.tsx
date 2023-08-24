"use client"

import Image from "next/image";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { auth, useClerk } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { useRouter } from "next/navigation"

interface MainNavProps {
  userImage?: string
  loggedIn?: boolean
}

const MainNav: React.FC<MainNavProps> = ({ userImage, loggedIn }) => {
  const router = useRouter()
  const { signOut } = useClerk()

  return (
    <div className="w-full flex items-center h-16 p-4 border-b">
      <Image src="/logo.png" width={40} height={40} alt="logo" />
      <h1 className="text-3xl font-bold ml-2">PC Palace</h1>
      <div className="ml-auto">
        <Popover>
          <PopoverTrigger>
            <Image
              src={userImage || "/placeholder.png"}
              width={40}
              height={40}
              className="rounded-full"
              alt="avatar"
            />
          </PopoverTrigger>
          <PopoverContent className="p-0">
            {!loggedIn ? (
              <div>
                <div
                  className="hover:bg-gray-100 hover:cursor-pointer p-3 rounded-t-md"
                  onClick={() => router.push("/login")}
                >
                  Login
                </div>
                <Separator />
                <div
                  className="hover:bg-gray-100 hover:cursor-pointer p-3 rounded-b-md"
                  onClick={() => {}}
                >
                  Register
                </div>
              </div>
            ) : (
              <div>
                <div
                  className="hover:bg-gray-100 hover:cursor-pointer p-3 rounded-t-md"
                  onClick={() => router.push("/store")}
                >
                  My Store
                </div>
                <Separator />
                <div className="hover:bg-gray-100 hover:cursor-pointer p-3 rounded-b-md">
                  Orders
                </div>
                <Separator />
                <div
                  className="hover:bg-gray-100 hover:cursor-pointer p-3 rounded-b-md"
                  onClick={() => signOut()}
                >
                  Sign out
                </div>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default MainNav;
