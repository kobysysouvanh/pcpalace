import AdminNavbar from "@/components/Admin/AdminNavbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/login")
  };

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/store")
  };

  return (
    <>
      <AdminNavbar store={store}/>
      {children}
    </>
  );
}
