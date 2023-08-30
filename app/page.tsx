import { getProducts } from "@/actions/get-products";
import Footer from "@/components/Store/Footer";
import ProductList from "@/components/Store/ProductList";
import prismadb from "@/lib/prismadb";

const HomePage = async () => {
  const products = await getProducts({});
  // const products = await prismadb.product.findMany({
  //   where: {
  //     isArchived: false
  //   },
  //   include: {
  //     images: true
  //   }
  // })
  console.log(products)


  return (
    <div>
      <div>
        <ProductList title="Recently Added" items={products} />
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
