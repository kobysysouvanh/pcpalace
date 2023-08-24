"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const RoutesNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/store/${params.storeId}`,
      label: "Dashboard",
      active: pathname === `/store/${params.storeId}`,
    },
    {
      href: `/store/${params.storeId}/products`,
      label: "Products",
      active: pathname === `/store/${params.storeId}/products`,
    },
    {
      href: `/store/${params.storeId}/orders`,
      label: "Orders",
      active: pathname === `/store/${params.storeId}/orders`,
    },
    {
      href: `/store/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/store/${params.storeId}/settings`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6 ml-4", className)}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-md font-semibold hover:text-primary py-2",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default RoutesNav;
