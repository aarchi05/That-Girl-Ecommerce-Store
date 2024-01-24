"use client";

// Import necessary modules and components
import { ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Brand, Product } from "@/types";
import router from "next/router";

interface CartInfoProps {
    brand?: Brand;
}

const CartInfo: React.FC<CartInfoProps> = ({ brand }) => {
  

  return (
    <div>
      
      
        {/* Brand information */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Brand:</h3>
          <div>
            {brand?.name}
          </div>
        </div>

        
      


    </div>
    
  );
};

export default CartInfo;



