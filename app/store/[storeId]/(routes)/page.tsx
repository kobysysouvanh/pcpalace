import prismadb from "@/lib/prismadb"

interface StorePageProps {
  params: { storeId: string }
}

const StorePage: React.FC<StorePageProps> = async ({
  params
}) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  })

  return (
    <div>Active Store: {store?.name}</div>
  )
}

export default StorePage