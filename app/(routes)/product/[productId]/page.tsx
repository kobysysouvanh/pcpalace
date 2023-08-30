import { getProduct } from "@/actions/get-product"
import Gallery from "@/components/Store/Gallery"
import ProductInfo from "@/components/Store/ProductInfo"
import Image from "next/image"


interface ProductPageProps {
    params: {
        productId: string
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
const product = await getProduct(params.productId)

  return (
    <div className="mx-auto max-w-7xl">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={product.images}/>
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <ProductInfo data={product}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductPage