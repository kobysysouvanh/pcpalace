"use client"

import { Product } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/product/${product?.id}`)
  }

  return (
    <div 
    className="group cursor-pointer rounded-xl border p-3 space-y-4"
    onClick={handleClick}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="product image"
          src={product?.images?.[0].url}
          fill
          className="rounded-xl aspect-square object-cover"
        />
      </div>
      <div className="flex border-t py-2">
        <div>
          <p className="font-bold">{product.name}</p>
          <p className="text-muted-foreground">{product.categoryId}</p>
        </div>
        <p className="flex ml-auto font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
