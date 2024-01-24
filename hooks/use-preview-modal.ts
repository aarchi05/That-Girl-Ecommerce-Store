// import { create } from 'zustand';

// import { Product } from '@/types';

// interface PreviewModalStore {
//   isOpen: boolean;
//   data?: Product;
//   onOpen: (data: Product) => void;
//   onClose: () => void;
// }


// const usePreviewModal = create<PreviewModalStore>((set) => ({
//   isOpen: false,
//   data: undefined,
//   onOpen: (data: Product) => set({ isOpen: true, data }),
//   onClose: () => set({ isOpen: false }),
// }));


// export default usePreviewModal;


// use-preview-modal.ts
import { create } from 'zustand';

import { Product } from '@/types';

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
  onViewOptions: (path: string) => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => {
  return {
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false }),
    onViewOptions: (path: string) => {
      // Handle navigation logic here
      console.log(`Navigating to: ${path}`);

      // Close the modal after navigation
      set({ isOpen: false });
    },
  };
});

export default usePreviewModal;



