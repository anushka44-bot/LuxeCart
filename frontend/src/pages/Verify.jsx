import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const { token, setCartItems, backendUrl } = useContext(ShopContext);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        {
          success: success === "true",
          orderId,
        },
        {
          headers: { token },
        },
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <p>Verifying Payment...</p>
    </div>
  );
};

export default Verify;
