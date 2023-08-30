import { Product } from "@/lib/types"
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?: string


}

export const getProducts = async ( query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,


        }
    })

    console.log(url)
    const res = await fetch(url)

    return res.json()
}