import React from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const CheckoutForm = ({amount, notes, course}) => {

  const handlePayment = async () => {
    const orderRes = await axios.post(`${API_URL}/orders`, {
      amount: 100, // ya product.price
      notes: "69ddf940ed40a0edf06b194e",
      course: null,
    }, {withCredentials: true});

    if(orderRes.data.success === true){
      console.log(orderRes.data.razorpayOrder);
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderRes.data.razorpayOrder.amount,
        currency: orderRes.data.razorpayOrder.currency,
        name: "Pawan Sir Classes",
        order_id: orderRes.data.razorpayOrder.id,
        callback_url: `${API_URL}/orders/verify-payment`,
        prefill: {
          name: "Aryan",
          email: "[EMAIL_ADDRESS]",
          contact: "9876543210",
        },
        theme: {
          color: "#49BBBD",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  }

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      {/* Card Types */}
      <p className="text-sm text-gray-500 mb-2">Select Payment Method</p>
      <div className="flex gap-3 mb-4">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-teal-500">
          GPay
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-teal-500">
          PhonePe
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-teal-500">
          Paytm
        </button>
      </div>

      {/* Form */}
      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-500">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">Phone Number</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <p className="text-xs text-gray-500">
            By proceeding, you agree to our Terms & Conditions and Privacy
            Policy
          </p>
        </div>

        {/* Button */}
        <button
        onClick={handlePayment}
          className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
