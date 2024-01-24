// "use client";

// import usePreviewModal from "@/hooks/use-preview-modal";
// import Gallery from "@/components/gallery";
// import Info from "@/components/info";
// import Modal from "@/components/ui/modal";


// const PreviewModal = () => {
//   const previewModal = usePreviewModal();
//   const product = usePreviewModal((state) => state.data);

//   if (!product) {
//     return null;
//   }

//   return ( 
//     <Modal 
//       open={previewModal.isOpen} 
//       onClose={previewModal.onClose}
//     >
//       <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
//         <div className="sm:col-span-4 lg:col-span-5">
//           <Gallery images={product.images} />
//         </div>
//         <div className="sm:col-span-8 lg:col-span-7">
//           <Info data={product} />
//         </div>
//       </div>
//     </Modal>
//   );
// }
 
// export default PreviewModal;

"use client"
// PreviewModal.tsx
import { useRouter } from 'next/navigation';
import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Modal from "@/components/ui/modal";
import Button from './ui/button';

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const router = useRouter(); // Initialize useRouter
  const product = usePreviewModal((state) => state.data);
  

  const handleViewProduct = () => {
    // Redirect the user to the product's page using the same path as in ProductCard
    if (product && product.id) {
      router.push(`/product/${product.id}`);
      previewModal.onViewOptions(`/product/${product.id}`);
    }
  };

  if (!product) {
    return null;
  }

  return (
    <Modal 
      open={previewModal.isOpen} 
      onClose={previewModal.onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
        <Info name={product?.name} color={product?.color?.value} brand={product?.brand} isProductPage={false} />
          {/* <button onClick={handleViewProduct} className="bg-blue-500 text-white px-4 py-2 mt-4">View Options</button> */}
          <Button onClick={handleViewProduct}>View Options</Button>
        </div>
      </div>
    </Modal>
  );
}

export default PreviewModal;