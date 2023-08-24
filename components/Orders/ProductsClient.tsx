"use client"

import { useParams, useRouter } from "next/navigation"
import Heading from "../ui/heading"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { ProductColumn, columns } from "./ProductColumn"
import { Separator } from "../ui/separator"
import { DataTable } from "../ui/data-table"

interface ProductsClientProps {
  data: ProductColumn[]
}

const ProductsClient: React.FC<ProductsClientProps> = ({
  data
}) => {
  const params = useParams()
  const router = useRouter()


  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Products (${data.length})`} description="Manage your products." />
        <Button onClick={() => router.push(`/store/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>
      <Separator/>
      <DataTable columns={columns} data={data} searchKey="name"/>

    </>
  )
}

export default ProductsClient