import BreadCrumb from "../components/common/Breadcrumb";
import ProductsLoad from "../components/products/ProductsLoad";
import { Category, MENUS } from "../constants/category";
/**
 * 뷰페이지에는 특별한 로직이 포함되어서는 안됩니다.
 * 컴포넌트를 불러다 렌더링하는 용도로만 사용 하세요.
 */
const Accessory = (): JSX.Element => {
  /**
   * 해당 부분에 함수나 기타 로직등을 작성하지마세요.
   */
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={MENUS.HOME} crumb={MENUS.ACCESSORY} />
      <h1 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">악세서리</h1>
      <article className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <ProductsLoad limit={4} Category={"액세서리"} />
      </article>
    </section>
  );
};

export default Accessory;
