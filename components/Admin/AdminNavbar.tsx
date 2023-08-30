import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import RoutesNav from "./RoutesNav";
import Link from "next/link";
import { StoreIcon } from "lucide-react";
import { Store } from "@prisma/client";
import { Button } from "../ui/button";

interface AdminNavbarProps {
  store: Store;
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({ store }) => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
          <div className="flex items-center justify-center">
            <Button className="cursor-default">
              <StoreIcon className="mr-2"/>
              {store.name}
            </Button>
          </div>
        <RoutesNav />
      </div>
    </div>
  );
};

export default AdminNavbar;
