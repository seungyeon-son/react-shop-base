import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  image: string;
  title: string;
  price: number;
}

const ProductsLoad = ({ limit, category }: { limit: number; category: string }): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data.slice(0, limit)); // API에서 받은 데이터를 제한된 수로 자름
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit, category]); // limit이 변경될 때마다 다시 호출

  return (
    <>
      {loading ? (
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
          <div key={index} className="card bordered">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>가격: {product.price}</p>
          </div>
        ))
      ) : (
        <div>제품이 없습니다.</div>
      )}
    </>
  );
};

export default ProductsLoad;
