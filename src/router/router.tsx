import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import Error from "../views/Error";
import Index from "../views/Index";
import Fashion from "../views/Fashion";
import CartList from "../components/carts/CartList";
import Digital from "../views/Digital";
import Accessory from "../views/Accessory";
import DetailPage from "../views/ProductDetail";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
      <Route path="/cart" element={<CartList />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/accessory" element={<Accessory />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/product/:id" element={<DetailPage />} />

      {/* 라우팅 추가 해보세요. */}
    </Routes>
  );
};

export default memo(Router);
