
import { getProducts } from "@/utils/product";
import Image from "next/image";

const ProductDetailPage = async ({ params }) => {
   const id = params.id;
   const { data: product } = await getProducts(`http://localhost:3000/api/product?id=${id}`);
   return (

      <div className="w-full flex-1 pt-5">
         <div className="w-1/2 mx-auto">
            <div className="card bg-white flex flex-col gap-1  overflow-hidden rounded-lg shadow-md group cursor-pointer border border-transparent hover:border-black">
               <div className="overflow-hidden" >
                  <Image
                     src={product.image}
                     alt="image-card"
                     width={1000}
                     height={1000}
                     priority={true}
                     className="w-full h-[300px] object-cover rounded-md group-hover:scale-105 transition-all"
                  />
               </div>
               <div className="p-4">
                  <div>
                     <p className="text-[12px]"> {product.tag}</p>
                  </div>
                  <div className="mt-4 flex flex-col gap-4">
                     <div>
                        <h2 className="uppercase text-sm font-medium"> {product.title}</h2>
                        <h3 className="text-sm"> {product.category}</h3>
                        <p className="text-[13px]"> Rp. {product.price}</p>
                     </div>
                     {product.warna && <p className="text-[12px]">{product.warna} Warna</p>}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductDetailPage