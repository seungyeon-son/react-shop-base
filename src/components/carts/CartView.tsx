import { Link } from "react-router-dom";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";

const CartView = (): JSX.Element => {
  return (
    <div className="flex flex-col px-4 w-full">
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:my-14 px-2 lg:px-0">
        {/* 물품이 없다면? */}
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
          <Link to="/" className="btn btn-primary mt-10">
            담으러 가기
          </Link>
        </div>
        {/* 구매하기 버튼 등 화면을 구성 해보세요. */}
      </div>
      <Confirm />
    </div>
  );
};

export default CartView;
