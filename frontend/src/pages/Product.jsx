import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productsData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productsData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product img */}
      <div className="flex gap-4 sm:gap-6 flex-col sm:flex-row items-start">
        <div className="flex sm:flex-col flex-shrink-0 sm:w-[90px] w-full gap-3 overflow-x-auto sm:overflow-y-auto">
          {productsData.image.map((item, index) => (
            <img
              onClick={() => setImage(item)}
              src={item}
              key={index}
              className="w-20 sm:w-full cursor-pointer"
              alt=""
            />
          ))}
        </div>
        <div className="flex-1 max-w-[500px]">
          <img className="w-full h-auto" src={image} alt="" />
        </div>

        {/*---------product info---------*/}
        <div className="sm:w-[40%] w-full">
          <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productsData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productsData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productsData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productsData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on Delivery is available</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/*------ Description & Review section -----*/}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An E-commerce website is an online platform that allows people to
            buy and sell products or services over the internet. It enables
            customers to browse items, compare prices, place orders, and make
            secure payments from anywhere at any time. These websites also help
            businesses manage inventory, track orders, and provide customer
            support digitally. Popular features include product listings,
            shopping carts, payment gateways, and user accounts.
          </p>
          <p>
            Online shopping allows customers to buy products and services from
            the internet without visiting physical stores. E-commerce websites
            provide a platform where businesses can sell their goods online
            conveniently and securely.
          </p>
        </div>
      </div>

      {/* ----- display related products */}

      <RelatedProducts
        category={productsData.category}
        subCategory={productsData.subcategory}
        currentProductId={productsData._id}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
