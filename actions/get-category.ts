import { Category } from "@/lib/types"


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`


export const getCategory = async (id: string): Promise<Category> => {

    const res = await fetch(`${URL}/${id}`)

    return res.json()
}