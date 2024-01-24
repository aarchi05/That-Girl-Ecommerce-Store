import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return ( 

    
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
    <div
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
          backgroundPosition: 'center top', // Adjust this line to control the position
        }}
        className="relative rounded-xl aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
    >
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 relative z-10">
    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl max-w-screen-lg text-[#e4e4e7]">
      {data.label}
    </div>
    
  </div>
</div>
</div>



    // <div 
    // style={{
    //   backgroundImage: `url(${data?.imageUrl})`,
    //   backgroundPosition: 'center top', // Adjust this line to control the position
    // }}
    // className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
    //   <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover opacity-90">
        
    //     <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
    //       <div className="font-bold text-3xl sm:text-5xl lg:text-6xl max-w-screen-lg text-[#d1d5db]">
    //         {data.label}
    //       </div>
    //     </div>
    //   </div>
    // </div>


      // <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      //  <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover opacity-90">
      //  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
      //    <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
      //      <div className="font-bold text-3xl sm:text-5xl lg:text-6xl max-w-screen-lg text-[#f4f4f5]">
      //        {data.label}
      //      </div>
      //    </div>
      //  </div>
      //  </div>


    
   );
};

export default Billboard;
