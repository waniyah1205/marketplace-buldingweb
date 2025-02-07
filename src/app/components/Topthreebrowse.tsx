"use client";

import { client } from "@/sanity/lib/client"; // Import Sanity client
import { useState, useEffect } from "react"; // Import hooks
import { FaStar } from "react-icons/fa"; // Import star icon
import { urlFor } from "../../sanity/lib/image"; // Sanity image helper
import Image from "next/image"; // Next.js image component

type Product = {
  slug: any;
  _id: string;
  Productname: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
  rating?: number;
};

export default function TopThreeBrowse() {
  const [products, setProducts] = useState<Product[]>([]); // State to store fetched products
  const [loading, setLoading] = useState<boolean>(true); // Loading state for the component

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch the data from Sanity
        const fetchedProducts: Product[] = await client.fetch(
          '*[_type == "product"]{_id, Productname, price, image{asset->}}'
        );

        console.log("Fetched Products:", fetchedProducts); // Log the fetched products

        // You can modify this sorting logic to display products as per your requirement
        const topProducts = fetchedProducts.slice(0, 12); // Limit to top 12 products (for 3 rows of 4 items)

        setProducts(topProducts); // Set the fetched products into state
      } catch (err) {
        console.error("Fetch Error:", err); 
      } finally {
        setLoading(false); 
      }
    }

    fetchProducts(); 
  }, []); 

  return (
    <div>
      {/* Loading state */}
      {loading && <p className="text-center text-gray-500">Loading products...</p>}

      {/* Display products in a 4-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-[192px] relative rounded-[20px]">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-gray-200 rounded-[20px] relative"
            >
              <a href={`/product/${product.slug.current}`}>
                {/* Check if image is available and display */}
                {product.image?.asset ? (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.Productname}
                    width={300}
                    height={200}
                    className="rounded-[20px] object-cover"
                  />
                ) : (
                  // Fallback image from public folder when no product image is available
                  <Image
                    src=""
                    alt="No products available"
                    width={300}
                    height={200}
                    className="rounded-[20px] object-cover"
                  />
                )}
              </a>
              <p className="w-[114px] h-[49px] relative mt-[25px] left-[16px] font-bold text-[36px] leading-[48px] ">
                {product.Productname}
              </p>
              <p className="font-bold text-xl">{`$${product.price.toFixed(2)}`}</p>
              <div className="rating flex items-center mt-2">
                <FaStar className="star-icon text-yellow-500" />
                <span>{product.rating ?? 4.5}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 col-span-full">
            {/* Display fallback image when no products are available */}
            <Image
              src="/products/no-products.jpg"
              alt="No products available"
              width={300}
              height={200}
              className="rounded-[20px] object-cover"
            />
            <p>No products available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

