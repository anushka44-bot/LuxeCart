import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } },
      );

      if (response.data.success) {
        let allOrdersItem = [];

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              paymentMethod: order.paymentMethod,
              payment: order.payment,
              date: order.date,
              orderId: order._id,
            });
          });
        });

        setOrderData(allOrdersItem.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const trackOrderHandler = async () => {
    await loadOrderData();
    toast.success("Order status refreshed");
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20"
                src={item.image?.[0]}
                alt={item.name}
              />

              <div>
                <p className="sm:text-base font-medium">{item.name}</p>

                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>

                  <p>Quantity: {item.quantity}</p>

                  <p>Size: {item.size}</p>
                </div>

                <p className="mt-2">
                  Date:{" "}
                  <span className="text-gray-400">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </p>

                <p className="mt-2">
                  Payment Method:{" "}
                  <span className="text-gray-400">{item.paymentMethod}</span>
                </p>

                <p className="mt-2">
                  Payment Status:{" "}
                  <span className="text-gray-400">
                    {item.payment ? "Paid" : "Pending"}
                  </span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <p
                  className={`min-w-2 h-2 rounded-full ${
                    item.status === "Delivered"
                      ? "bg-green-500"
                      : item.status === "Shipped"
                        ? "bg-blue-500"
                        : item.status === "Out for delivery"
                          ? "bg-yellow-500"
                          : item.status === "Packing"
                            ? "bg-orange-500"
                            : "bg-gray-500"
                  }`}
                ></p>

                <p className="text-sm md:text-base font-medium">
                  {item.status}
                </p>
              </div>

              <button
                onClick={trackOrderHandler}
                className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100"
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
