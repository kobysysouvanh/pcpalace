"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { auth, currentUser, useClerk } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import Cart from "./Cart";

interface MainNavProps {
  userImage?: string;
}

const MainNav: React.FC<MainNavProps> = ({ userImage }) => {
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full flex items-center h-16 p-4 border-b">
      <Link href="/" className="flex">
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        <h1 className="text-3xl font-bold px-2">PC Palace</h1>
      </Link>
      <div className="ml-auto flex items-center justify-center space-x-2">
        {!pathname.includes("/store") && <Cart />}
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
            {!userImage ? (
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
