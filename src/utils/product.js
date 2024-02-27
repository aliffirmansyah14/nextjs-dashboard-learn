

export const getProducts = async (url) => {
   const response = await fetch(url, {
      cache: "no-store",
      next: {
         tags: ["products"]
      }
   });

   if (!response.ok) {
      throw new Error('Failed to fetch data');
   }
   const data = await response.json();
   return data;
}

// export const getProducts = async () => {
//    const response = await fetch('https://fakestoreapi.com/products', {
//       cache: "no-store",
//       next: {
//          tags: ["products"]
//       }
//    });


//    if (!response.ok) {
//       throw new Error('Failed to fetch data');
//    }
//    const data = await response.json();
//    return data;
// }