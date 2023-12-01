import React from "react";
import { Link } from "react-router-dom";
import { useUpdateOrderStatusMutation } from "../../../features/order/orderApi";

export const OrderTable = ({ orders }) => {
  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  //update order status
  const updateOrderHandler = (id, status) => {
    updateOrderStatus({
      orderId: id,
      data: {
        status: status,
      },
    });
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Picture
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <React.Fragment key={order._id}>
                {/* Order row */}
                <tr className="bg-gray-200">
                  <th className="px-6 py-3 ">
                    <span className="capitalize"> transaction Id :</span>
                    {order.transactionId}
                  </th>
                  <td className="px-6 py-3 capitalize"></td>
                  <td className="px-6 py-3 capitalize">
                    Total Amount: ${order.totalAmount}
                  </td>
                  <td className="px-6 py-3 capitalize">{order.stock}</td>
                  <td className="px-6 py-3 cursor-pointer">
                    <select
                      disabled={order.orderStatus === "completed"}
                      name="orderStatus"
                      defaultValue={order.orderStatus}
                      onChange={(e) => {
                        updateOrderHandler(order._id, e.target.value);
                      }}
                    >
                      <option value="processing">processing</option>
                      <option value="delivered">delivered</option>
                      <option value="completed">completed</option>
                    </select>
                  </td>
                  <td className="px-6 py-3 sm:space-x-2 space-x-1">
                    <Link to="/">Details</Link>
                  </td>
                </tr>

                {/* Items rows */}
                {order?.items?.map((item) => (
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
                    >
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}/uploads/${item.picture}`}
                        alt="brand"
                        className="w-11 h-11 rounded-full ring-2 ring-green-700 p-1"
                      />
                    </th>
                    <td className="px-6 py-3 capitalize">{item.name}</td>
                    <td className="px-6 py-3 capitalize">${item.price}</td>
                    <td className="px-6 py-3 capitalize">
                      Qty: {item.quantity}
                    </td>
                    <td className="px-6 py-3 cursor-pointer"></td>
                    <td className="px-6 py-3 sm:space-x-2 space-x-1"></td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
