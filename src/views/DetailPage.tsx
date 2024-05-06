// DetailPage.tsx

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IProduct } from "../store/products";
import Rating from "../components/common/Rating";
import BreadCrumb from "../components/common/Breadcrumb";
import { Category, MENUS } from "../constants/category";
const DetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>(); // URL에서 상품 ID를 가져옴
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IProduct | null>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // id가 변경될 때마다 다시 호출

  if (loading) {
    return <div>Loading...</div>;
  }

  //   if (!product) {
  //     return <Error />;
  //   }

  return (
    <div className="pt-8 pb-[30vh] px-10">
      {product && <BreadCrumb category={MENUS.HOME} crumb={product.title} />}
      <div className="lg:flex lg:items-center ">
        <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
          {product && <img src={product.image} alt={product.title} className="object-contain w-full h-72" />}
        </figure>
        <div className="card-body px-1 lg:px-12">
          {product && (
            <h2 className="card-title">
              {product.title} <span className="badge badge-accent ml-2">NEW</span>
            </h2>
          )}

          {product && <p>{product.description}</p>}
          <div className="flex items-center mt-3">
            <Rating />
          </div>
          {product && <p className="mt-2 mb-4 text-3xl">${product.price}</p>}
          <div className="card-actions">
            <button className="btn btn-primary">장바구니에 담기</button>
            <button className="btn btn-outline ml-1">
              <Link to="/cart"> 장바구니로 이동</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
