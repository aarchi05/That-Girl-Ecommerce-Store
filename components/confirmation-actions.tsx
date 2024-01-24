"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const ConfirmActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/confirm')} className="flex items-center rounded-full bg-black px-4 py-2">
        {/* <ShoppingBag
          size={20}
          color="white"
        /> */}
        Checkout
      </Button>
    </div>
  );
}
 
export default ConfirmActions;