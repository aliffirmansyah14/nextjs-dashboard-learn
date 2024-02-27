"use client";
import { useRouter } from 'next/navigation';
import { useRef } from 'react'

const Modal = ({ children }) => {
   const overlay = useRef(null);
   const router = useRouter();
   const handleClick = (e) => {
      if (e.target == overlay.current) {
         router.back();
      }
   }

   return (
      <div ref={overlay}
         className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-black/60"
         onClick={handleClick}
      >
         <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            {children}
         </div>

      </div>
   )
}

export default Modal