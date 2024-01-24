// "use client";

// import Button from '@/components/ui/button';
// import axios from "axios";
// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Currency from "@/components/ui/currency";
// import useCart from "@/hooks/use-cart";
// import { toast } from "react-hot-toast";

// import { useRouter } from 'next/navigation';
// import Link from "next/link";


// const Summary = () => {

//   const router = useRouter();

//   const searchParams = useSearchParams();
//   const items = useCart((state) => state.items);
//   const removeAll = useCart((state) => state.removeAll);

//   // useEffect(() => {
//   //   if (searchParams.get('success')) {
//   //     toast.success('Payment completed.');
//   //     removeAll();
//   //   }

//   //   if (searchParams.get('canceled')) {
//   //     toast.error('Something went wrong.');
//   //   }
//   // }, [searchParams, removeAll]);

//   const totalPrice = items.reduce((total, item) => {
//     return total + Number(item.price)
//   }, 0);

//   const onCheckout = async () => {
//     try {
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
//         productIds: items.map((item) => item.id)
//       });

//       // Redirect the user to the checkout URL
//       router.push(response.data.url);
//     } catch (error) {
//       // Handle any errors during the checkout process
//       console.error('Checkout error:', error);
//     }
//   };



//   // const onCheckout = async () => {
//   //   const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
//   //     productIds: items.map((item) => item.id)
//   //   });

//   //   window.location = response.data.url;
//   // }



//   return ( 
//     <div
//       className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
//     >
//       <h2 className="text-lg font-medium text-gray-900">
//         Please click the "Confirm" button below to secure direct links to your products!
//       </h2>
//       <div className="mt-6 space-y-4">
//         <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//           {/* <div className="text-base font-medium text-gray-900">Order total</div> */}
//          {/* <Currency value={totalPrice} /> */}
//         </div>
//       </div>


//       {/* Wrap the Confirm button with Link component */}
//       <Link href="/confirmation">
        
//           <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
//             Confirm
//           </Button>
        
//       </Link>


//       {/* <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
//         Confirm
//       </Button> */}


//     </div>
//   );
// }
 
// export default Summary;





"use client";

import Button from '@/components/ui/button';
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useEffect, useState } from 'react';
import ConfirmActions from '@/components/confirmation-actions';

const Summary = () => {
  // const router = useRouter();
  // // const searchParams = useSearchParams();
  // // const items = useCart((state) => state.items);
  // // const removeAll = useCart((state) => state.removeAll);

  // const onCheckout = async () => {
  //   router.push('confirmation');
  // };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">
        Please click the Confirm button below to secure direct links to your products!
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          {/* <div className="text-base font-medium text-gray-900">Order total</div> */}
          {/* <Currency value={totalPrice} /> */}
        </div>
      </div>

      {/* Use a div or another suitable container instead of Link for handling the click event */}
      {/* <div onClick={onCheckout}> */}
        {/* <Button onClick={() => router.push('/confirmation')} className="w-full mt-6">
          Confirm
        </Button> */}

        <ConfirmActions />
      {/* </div> */}
    </div>
  );
};

export default Summary;










// import axios from "axios";
// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Button from "@/components/ui/button";
// import Currency from "@/components/ui/currency";
// import useCart from "@/hooks/use-cart";
// import { toast } from "react-hot-toast";
// import { useRouter } from 'next/navigation';

// const Summary = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const items = useCart((state) => state.items);
//   const removeAll = useCart((state) => state.removeAll);

//   useEffect(() => {
//     if (searchParams.get('success')) {
//       toast.success('Payment completed.');
//       removeAll();
//     }

//     if (searchParams.get('canceled')) {
//       toast.error('Something went wrong.');
//     }
//   }, [searchParams, removeAll]);

//   const totalPrice = items.reduce((total, item) => {
//     return total + Number(item.price);
//   }, 0);

//   const onCheckout = async () => {
//     try {
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
//         productIds: items.map((item) => item.id)
//       });

//       // Redirect the user to the confirmation page
//       router.push('/checkout');
//     } catch (error) {
//       // Handle any errors during the checkout process
//       console.error('Checkout error:', error);
//     }
//   };

//   return (
//     <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
//       <h2 className="text-lg font-medium text-gray-900">
//         Please click the "Confirm" button below to secure direct links to your products!
//       </h2>
//       <div className="mt-6 space-y-4">
//         <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//           {/* <div className="text-base font-medium text-gray-900">Order total</div> */}
//           {/* <Currency value={totalPrice} /> */}
//         </div>
//       </div>

//       {/* Use router.push directly */}
//       <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
//         Confirm
//       </Button>
//     </div>
//   );
// };

// export default Summary;


// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// // ...

// const ConfirmationPage = () => {
//   return <div>Confirmation Page Content</div>;
// };

// const Summary = () => {
//   const navigate = useNavigate();

//   const onCheckout = () => {
//     // Perform any necessary actions before redirecting

//     // Redirect to the confirmation page
//     navigate('/confirmation.tsx');
//   };


//   return (
//     <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
//       <h2 className="text-lg font-medium text-gray-900">
//         Please click the "Confirm" button below to secure direct links to your products!
//       </h2>
//       <div className="mt-6 space-y-4">
//         <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//           {/* <div className="text-base font-medium text-gray-900">Order total</div> */}
//           {/* <Currency value={totalPrice} /> */}
//         </div>
//       </div>

//       {/* Use router.push directly */}
//       <Button onClick={onCheckout} className="w-full mt-6">
//         Confirm
//       </Button>
//     </div>
//   );
// };

// export default Summary;




// "use client";
// import axios from "axios";
// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";

// import Button from "@/components/ui/button";
// import Currency from "@/components/ui/currency";
// import useCart from "@/hooks/use-cart";
// import { toast } from "react-hot-toast";

// import { useRouter } from 'next/navigation';
// import Link from "next/link";


// const Summary = () => {

//   return ( 
//     <div
//       className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
//     >
//       <h2 className="text-lg font-medium text-gray-900">
//         Please click the "Confirm" button below to secure direct links to your products!
//       </h2>
//       <div className="mt-6 space-y-4">
//         <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//           {/* <div className="text-base font-medium text-gray-900">Order total</div> */}
//          {/* <Currency value={totalPrice} /> */}
//         </div>
//       </div>


//       {/* Wrap the Confirm button with Link component */}
//       <Link href="/confirmation">
        
//           <Button className="w-full mt-6">
//             Confirm
//           </Button>
        
//       </Link>

//     </div>
//   );
// }
 
// export default Summary;