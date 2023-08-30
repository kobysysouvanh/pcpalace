import prismadb from "@/lib/prismadb"


export const getProductStock = async (storeId: string) => {
    const stockCount = await prismadb.product.count({
        where: {
            storeId,
            isArchived: false 
        },
    })

    return stockCount
}