import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice"; // عدل المسار حسب مكان ملفك

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12344",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);

    dispatch(clearCart()); // تفضي السلة

    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-bold mb-4 text-pink-950">Checkout</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 mt-8">
        <div className="md:w-2/3">
          {/* Billing Informations */}
          <div className="border rounded-2xl border-pink-900 p-4 mb-6 bg-gray-100">
            <div
              className="flex justify-between items-center cursor-pointer select-none"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2 text-pink-600">
                Billing Informations
              </h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {billingToggle && (
              <div>
                <div>
                  <label htmlFor="name" className="block text-black mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your Name"
                    className="w-full border border-pink-700 rounded-2xl py-2 px-3 focus:outline-none focus:border-pink-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-black mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full border border-pink-700 rounded-2xl py-2 px-3 focus:outline-none focus:border-pink-600"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-black mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    className="w-full border border-pink-700 rounded-2xl py-2 px-3 focus:outline-none focus:border-pink-600"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Shipping Informations */}
          <div className="border rounded-2xl border-pink-900 p-4 mb-6 bg-gray-100">
            <div
              className="flex justify-between items-center cursor-pointer select-none"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2 text-pink-600">
                Shipping Informations
              </h3>
              {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {shippingToggle && (
              <div>
                <div>
                  <label htmlFor="address" className="block text-black mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your Address"
                    className="w-full border border-pink-700 rounded-2xl py-2 px-3 focus:outline-none focus:border-pink-600"
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, address: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-black mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter your City"
                    className="w-full border border-pink-700 rounded-2xl py-2 px-3 focus:outline-none focus:border-pink-600"
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, city: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="zip" className="block text-black mb-1">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    placeholder="Enter your Zip Code"
                    className="w-full border border-pink-700 rounded-2xl py-2 px-3 focus:outline-none focus:border-pink-600"
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, zip: e.target.value })
                    }
                  />
                </div>
              </div>
            )}
          </div>

          {/* Payment Informations */}
          <div className="border rounded-2xl border-pink-900 p-4 mb-6 bg-gray-100">
            <div
              className="flex justify-between items-center cursor-pointer select-none"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2 text-pink-600">
                Payment Informations
              </h3>
              {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {paymentToggle && (
              <div>
                <div className="flex items-center mb-2 space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="cursor-pointer"
                  />
                  <label htmlFor="cod" className="text-black cursor-pointer">
                    Cash on Delivery
                  </label>
                </div>

                <div className="flex items-center mb-2 space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "db"}
                    onChange={() => setPaymentMethod("db")}
                    className="cursor-pointer"
                  />
                  <label htmlFor="db" className="text-black cursor-pointer">
                    Debit Card
                  </label>
                </div>

                {paymentMethod === "db" && (
                  <div className="bg-gray-200 rounded-2xl mb-4 p-4 ">
                    <h3 className="text-lg font-semibold mb-2 text-pink-600">
                      Debit Card information
                    </h3>
                    <div className="mb-4">
                      <label
                        htmlFor="cardNumber"
                        className="block text-black mb-1 font-semibold"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        className="w-full border border-pink-700 rounded-2xl py-2 px-3 focus:outline-none focus:border-pink-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cardHolder"
                        className="block text-black mb-1 font-semibold"
                      >
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        id="cardHolder"
                        className="w-full border border-pink-700 rounded-2xl py-2 px-3 focus:outline-none focus:border-pink-500"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label
                          htmlFor="expireDate"
                          className="block text-black p-2 font-semibold "
                        >
                          Expire Date
                        </label>
                        <input
                          type="date"
                          id="expireDate"
                          className="w-full border border-pink-700 rounded-2xl py-2 px-3 focus:outline-none focus:border-pink-500"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="cvv"
                          className="block text-black p-2 font-semibold"
                        >
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          className="w-full border border-pink-700 rounded-2xl py-2 px-3 focus:outline-none focus:border-pink-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-pink-800">
          <h3 className="text-lg font-semibold mb-4 text-pink-600">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md  text-pink-800 font-bold">{product.name}</h4>
                    <p className="text-black font-semibold">
                      {" "}
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span className="font-bold text-lg text-pink-900">Total Price:</span>
              <span className="font-semibold text-lg text-pink-900">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="mt-4 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-700 cursor-pointer"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
