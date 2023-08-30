import { ShoppingBag } from "lucide-react"
import { Button } from "../ui/button"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"

const Cart = () => {
    const cart = useCart()
    const router = useRouter()

  return (
    <div>
        <Button onClick={() => router.push("/cart")}>
          <ShoppingBag className="mr-2" />
          {cart.items.length}
        </Button>
    </div>
  )
}

export default Cart