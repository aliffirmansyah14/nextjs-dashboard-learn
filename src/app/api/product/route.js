
export async function GET(request) {
   const products = [
      {
         id: 1,
         title: 'Continental 80 Vegan Shoes',
         price: 1700000,
         category: 'shoes',
         tag: 'Pria Originals',
         image: 'https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/F/W/FW2336_SL_eCom.jpg',
      },
      {
         id: 2,
         title: 'Slides Adilette Lite',
         price: 550000,
         category: 'slides',
         tag: 'Pria LifeStyle',
         image: 'https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/f/u/fu8296_sl_ecom.jpg',
         warna: 4
      },
      {
         id: 3,
         title: 'Adilette Clogs',
         price: 550000,
         category: 'slides',
         tag: 'Uniseks Training',
         image: 'https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/F/Y/FY8970_SL_eCom.jpg',
         warna: 4
      },
      {
         id: 4,
         title: 'Nizza Rf Hi Shoes',
         price: 1600000,
         category: 'shoes',
         tag: 'Pria LifeStyle',
         image: 'https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/f/3/f34057_sl_ecom.jpg',
         warna: 2
      },
   ]
   const { searchParams } = new URL(request.url);
   const id = searchParams.get("id");
   if (!id) {
      return Response.json({ status: 200, succes: 'true', data: products });
   } else {
      const product = products.find((item) => item.id === Number(id));
      return Response.json({ status: 200, succes: 'true', data: product });
   }
}