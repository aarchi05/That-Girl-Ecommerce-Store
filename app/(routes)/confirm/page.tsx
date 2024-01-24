// "use client";

// import { useEffect, useState } from 'react';

// import Container from '@/components/ui/container';
// import useCart from '@/hooks/use-cart';

// import ConfirmationPage from './components/confirmation';

// export const revalidate = 0;

// const ConfirmPage = () => {
//   const [isMounted, setIsMounted] = useState(false);
//   const cart = useCart();

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div className="bg-white">
//       <Container>
//         <div className="px-4 py-16 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
//           <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
//            <ConfirmationPage />
            
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// };

// export default ConfirmPage;


// pages/confirm.tsx

import Container from '@/components/ui/container';
import useCart from '@/hooks/use-cart';
import ConfirmationPage from './components/confirmation';

const ConfirmPage = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Email Confirmation</h1>

            

          <div className="mt-12 lg:items-start gap-x-12">



            <ConfirmationPage />
          </div>
        </div>
      </Container>
    </div>
  );
};

// export async function getServerSideProps() {
//   // Fetch data or perform server-side logic here
//   return {
//     props: {},
//   };
// }

export default ConfirmPage;
