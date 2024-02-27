import Image from "next/image"
import Link from "next/link";

const Card = ({ product }) => {
   const { title, category, image, price, tag, warna } = product;
   return (
      <Link href={`/product/detail/${product.id}`}
         className="card bg-white flex flex-col gap-1 overflow-hidden rounded-lg shadow-md group cursor-pointer border border-transparent hover:border-black">
         <div className="overflow-hidden" >
            <Image
               src={image}
               alt="image-card"
               width={250}
               height={100}
               priority={true}
               className="w-full h-[246px] lg:h-[270px]  object-center rounded-md group-hover:scale-105 transition-all"
            />
         </div>
         <div className="p-4">
            <div>
               <p className="text-[12px]"> {tag}</p>
            </div>
            <div className="mt-4 flex flex-col gap-4">
               <div>
                  <h2 className="uppercase text-sm font-medium"> {title}</h2>
                  <h3 className="text-sm"> {category}</h3>
                  <p className="text-[13px]"> Rp. {price}</p>
               </div>
               {warna && <p className="text-[12px]">{warna} Warna</p>}
            </div>
         </div>
      </Link>
   )
}

export default Card