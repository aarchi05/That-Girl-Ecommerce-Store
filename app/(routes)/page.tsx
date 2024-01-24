
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("e063c22f-9bd3-44aa-9b66-e8b07ab5200e");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
       
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {/* <div>
          <h3 className="font-bold text-3xl">How To Get Started</h3>
          <br></br>

        
         <h5>Do you ever get frustrated when you have no idea what the best products in today's market are? And is it tedious to go on multiple websites to find links to buy the products?
            Well, That Girl is here to help! That Girl is an online women's catalogue that is regularly updated and displays the most viral products found on the internet!
            

          </h5>

          <br></br>

          <h5>
          Each product will have direct links that you can add to your "cart" and when you're ready, you can "checkout". These direct links will be sent right to your inbox, 
            so you will not need to dig through the retailer's website trying to find your product!
          </h5>

          <br></br>

          <h5>
            Steps:
          </h5>

          <br></br>

          <h5>
          1. Browse through That Girl and add whatever products you want links for to your "Cart"
          </h5>

          <h5>
          2. When you think you are finished, go to your cart in the top right-corner and click "Checkout"
          </h5>
            
          <h5>
          3. Enter your email and press "Submit"
          </h5>

          <h5>
          4. You are done! Please check your inbox for an email that contains the requested direct links!
          </h5>


          </div> */}
          

          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;

