import { Category } from "../../constants/category";
interface ItemListPros {
  readonly category?: string;
  readonly;
  crumb?: string;
}

const ItemList = ({ category = "", crumb = "" }: ItemListPros): JSX.Element => {
  const resolveCategory = Category[category] || category;
  return (
    <div className="">
      <a
        href="/product/1"
        className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
      >
        <figure className="flex h-80 bg-white overflow-hidden" data-v-5b1d7036="">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="상품 이미지"
            className="transition-transform duration-300"
            data-v-5b1d7036=""
          />
        </figure>
        <div className="card-body bg-gray-100 dark:bg-gray-700" data-v-5b1d7036="">
          <p className="card-title text-base" data-v-5b1d7036="">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </p>
          <p className="text-base" data-v-5b1d7036="">
            $110
          </p>
        </div>
      </a>
    </div>
  );
};
export default ItemList;
