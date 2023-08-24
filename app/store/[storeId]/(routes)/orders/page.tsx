import prismadb from '@/lib/prismadb'
import { formatter } from '@/lib/utils'
import { format } from "date-fns"

const OrdersPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId
    },
    include:{
      orderItems: {
        include: {
          product: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  const formattedOrders: Order = orders.map((order) => ({
    id: order.id,
    phone: order.phone,
    address: order.address,
    products: order.orderItems.map((orderItem) => orderItem.product.name).join(", "),
    totalPrice: formatter.format(order.orderItems.reduce((total, order) => {
      return total + Number(order.product.price)
    }, 0)),
    createdAt: format(order.createdAt, "MMMM do, yyyy")
  }))


  return (
    <div>OrdersPage</div>
  )
}

export default OrdersPage