import Card from "@/components/product/Card";
import { getProducts } from "@/utils/product"
import { Suspense } from "react";
import Loading from "./loading";
import React from "react";

const ProductPage = async () => {
   // const products = await getProducts();
   const { data: products } = await getProducts(`http://localhost:3000/api/product`);

   return (
      <section className="w-full">
         <div className="max-w-7xl mx-auto px-6 pt-6 pb-4">
            <div className="mb-4">
               <h1 className="text-2xl text-center font-bold"> List of Product </h1>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
               {products.map((product, index) => {
                  return (
                     <React.Fragment key={index}>
                        <Suspense fallback={<Loading />}>
                           <Card product={product} />
                        </Suspense>
                     </React.Fragment>
                  )
               })
               }
            </div>

         </div>
      </section >

   )
}

export default ProductPage