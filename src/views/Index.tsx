import Slider from "../components/common/Slider";
import ProductsLoad from "../components/products/ProductsLoad";
import { Category } from "../constants/category";

const Index = (): JSX.Element => {
  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">패션</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
          <ProductsLoad limit={8} category={"fashion"} />
        </div>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">악세서리</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
          <ProductsLoad limit={4} category={"accessory"} />
        </div>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">디지털</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
          <ProductsLoad limit={4} category={"digital"} />
        </div>
      </section>
    </>
  );
};

export default Index;
