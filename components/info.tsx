//info for individual products 
"use client";

// import { ShoppingCart } from "lucide-react";

// import Currency  from "@/components/ui/currency";
// import Button from "@/components/ui/button";
// import { Product } from "@/types";
// import useCart from "@/hooks/use-cart";

// interface InfoProps {
//   data: Product
// };

// const Info: React.FC<InfoProps> = ({ data }) => {
//   const cart = useCart();

//   const onAddToCart = () => {
//     cart.addItem(data);
//   }

//   return ( 
//     <div>
//       <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
//       <div className="mt-3 flex items-end justify-between">
//         <p className="text-2xl text-gray-900">
//           <Currency value={data?.price} />
//         </p>
//       </div>
//       <hr className="my-4" />
//       <div className="flex flex-col gap-y-6">
//         <div className="flex items-center gap-x-4">
//           <h3 className="font-semibold text-black">Size:</h3>
//           <div>
//             {data?.brand?.value}
//           </div>
//         </div>
//         <div className="flex items-center gap-x-4">
//           <h3 className="font-semibold text-black">Color:</h3>
//           <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
//         </div>
//       </div>
//       <div className="mt-10 flex items-center gap-x-3">
//         {/* <Button onClick={onAddToCart} className="flex items-center gap-x-2">
//           View Options
//           <ShoppingCart size={20} />
//         </Button> */}
//       </div>
//     </div>
//   );
// }
 
// export default Info;




// Import necessary modules and components
import { ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Brand, Product } from "@/types";
import router from "next/router";

interface InfoProps {
  name?: string;
  color?: string;
  isProductPage?: boolean; // New prop to indicate whether it's the product page
  brand?: Brand;
}

const Info: React.FC<InfoProps> = ({ name, color, brand, isProductPage }) => {
  // No need for the useCart hook in this case

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      <div className="mt-3 flex items-end justify-between">
        {/* Example Currency component */}
        <p className="text-2xl text-gray-900">
          {/* Example usage of the Currency component */}
          {/* <Currency value={data?.price} /> */}
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        {/* Brand information */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Brand:</h3>
          <div>
            {brand?.value}
          </div>
        </div>
        {/* Color information */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div>
            {color}
          </div>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: color }} />
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        {isProductPage && (  // Check if it's the product page
          <Button onClick={() => { /* some action */ }} className="flex items-center gap-x-2">
            {/* Button content */}
            View Options
            <ShoppingCart size={20} />
          </Button>
        )}
      </div>
      
      {isProductPage && ( // Render the "View Options" button only if it's the product page
        <div className="mt-10 flex items-center gap-x-3">
          {/* Example Button component */}
          <Button onClick={() => { /* some action */ }} className="flex items-center gap-x-2">
            {/* Button content */}
            View Options!
            {/* Add any icon or label as needed */}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Info;



