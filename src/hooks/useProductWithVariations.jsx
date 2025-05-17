import { useEffect, useState } from "react";
import axios from "axios";

const useProductWithVariations = (productId) => {
  const [product, setProduct] = useState(null);
  const [variations, setVariations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRes = await axios.get(
          `https://papayawhip-leopard-797027.hostingersite.com/wp-json/wc/v3/products/${productId}?consumer_key=ck_860b0623210c5d21c9215813f7152aa56339b021&consumer_secret=cs_f64597d255e9773ff885600a100b1b4336d2f007`
        );
        setProduct(productRes.data);

        if (productRes.data.type === "variable") {
          const variationRes = await axios.get(
            `https://papayawhip-leopard-797027.hostingersite.com/wp-json/wc/v3/products/${productId}/variations?consumer_key=ck_860b0623210c5d21c9215813f7152aa56339b021&consumer_secret=cs_f64597d255e9773ff885600a100b1b4336d2f007`
          );
          setVariations(variationRes.data);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, variations, loading };
};

export default useProductWithVariations;
