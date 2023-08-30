
import { Product } from "@/lib/types"
import NoResults from "../NoResults"
import ProductCard from "./ProductCard"
import { Image } from "@prisma/client"


interface ProductListProps {
    title: string
    items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({
    title,
    items
}) => {
  return (
    <div className="space-y-4 p-3">
        <h3 className="font-bold text-2xl">{title}</h3>
        {items.length === 0 && <NoResults/>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {items.map((item) => (
                <ProductCard key={item.id} product={item}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList