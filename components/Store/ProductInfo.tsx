"use client"

import { Product } from "@/lib/types"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import useCart from "@/hooks/use-cart"
import { MouseEventHandler } from "react"

interface ProductInfoProps {
    data: Product
}

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  const cart = useCart()
  
  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    cart.addItem(data)
  }
    return (
    <div className="flex flex-col">
        <h1 className="font-bold text-2xl">{data.name}</h1>
        <div className="mt-3 flex items-end justify-between">
            <p className="text-2xl text-muted-foreground">
                ${data.price}
            </p>
        </div>
        <Separator className="my-4"/>
        <p className="font-bold">Description</p>
        <div>
            {data.description}
        </div>
        <div className="mt-16 flex items-center gap-x-3">
            <Button onClick={addToCart}>
                Add to Cart
            </Button>
        </div>
    </div>
  )
}

export default ProductInfo