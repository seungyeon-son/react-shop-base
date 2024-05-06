import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IProduct } from "../../store/products";
import { Category } from "../../constants/category";
const ProductsLoad = ({ limit }: { limit: number }): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let apiUrl = "https://fakestoreapi.com/products";
        if (Category) {
          apiUrl += `?category=${Category}`;
        }
        const response = await axios.get(apiUrl);
        setProducts(response.data.slice(0, limit));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit, Category]);

  return (
    <>
      {loading && Category ? (
        Array.from(Array(limit)).map((_, index) => (
          <div key={index} className="card bordered animate-pulse">
            <div className="h-80 rounded bg-gray-100"></div>
            <div className="card-body">
              <div className="space-y-4">
                <div className="h-6 bg-gray-100 rounded"></div>
                <div className="h-6 bg-gray-100 rounded w-5/6"></div>
                <div className="h-6 bg-gray-100 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))
      ) : products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="card bordered overflow-hidden">
            <Link
              to={`/product/${product.id}`}
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal group isLink"
            >
              <figure className="flex h-80 bg-white overflow-hidden">
                <img
                  className="transition-transform duration-300 w-[135px] h-[160px] object-contain group-[.isLink]:hover:scale-125"
                  src={product.image}
                  alt={product.title}
                />
              </figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base h-[72px] items-start">{product.title}</p>
                <p className="text-base">${product.price}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div>제품이 없습니다.</div>
      )}
    </>
  );
};

export default ProductsLoad;
