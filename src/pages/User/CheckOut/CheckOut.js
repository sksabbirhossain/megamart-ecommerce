import React, { useState } from "react";
import { setTitle } from "../../../utils/setTitle";

export const CheckOut = () => {
  const [quantity, setQuantity] = useState(1);

  //set page title
  setTitle("CheckOut");

  return (
    <div className="container mx-auto my-7">
      <div className="md:grid md:grid-cols-5 md:gap-x-4">
        <div className="shadow-md rounded-md p-3 w-full md:col-span-4">
          <div class=" overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product Image
                  </th>{" "}
                  <th scope="col" class="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b  hover:bg-gray-50">
                  <th scope="row" class="px-6 py-4 ">
                    <img
                      src="https://images.pexels.com/photos/4099828/pexels-photo-4099828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="product"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">$2999</td>
                  <td class="px-6 py-4">
                    <div className="flex bg-green-700 rounded-md overflow-hidden">
                      <button
                        disabled={quantity <= 1}
                        className="bg-green-900 text-white py-1 px-3"
                        onClick={() => setQuantity((pre) => pre - 1)}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className=" w-10 bg-transparent text-gray-100 font-normal text-2xl text-center focus:outline-none"
                      />
                      <button
                        className="bg-green-900 text-white py-1 px-3"
                        onClick={() => setQuantity((pre) => pre + 1)}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </td>
                  <td class="px-6 py-4">$2999</td>
                  <td class="px-6 py-4 ">
                    <button className="text-red-600">X</button>
                  </td>
                </tr>
                <tr class="bg-white border-b  hover:bg-gray-50">
                  <th scope="row" class="px-6 py-4 ">
                    <img
                      src="https://images.pexels.com/photos/4099828/pexels-photo-4099828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="product"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">$2999</td>
                  <td class="px-6 py-4">
                    <div className="flex bg-green-700 rounded-md overflow-hidden">
                      <button
                        disabled={quantity <= 1}
                        className="bg-green-900 text-white py-1 px-3"
                        onClick={() => setQuantity((pre) => pre - 1)}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className=" w-10 bg-transparent text-gray-100 font-normal text-2xl text-center focus:outline-none"
                      />
                      <button
                        className="bg-green-900 text-white py-1 px-3"
                        onClick={() => setQuantity((pre) => pre + 1)}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </td>
                  <td class="px-6 py-4">$2999</td>
                  <td class="px-6 py-4 ">
                    <button className="text-red-600">X</button>
                  </td>
                </tr>
                <tr class="bg-white border-b  hover:bg-gray-50">
                  <th scope="row" class="px-6 py-4 ">
                    <img
                      src="https://images.pexels.com/photos/4099828/pexels-photo-4099828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="product"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">$2999</td>
                  <td class="px-6 py-4">
                    <div className="flex bg-green-700 rounded-md overflow-hidden">
                      <button
                        disabled={quantity <= 1}
                        className="bg-green-900 text-white py-1 px-3"
                        onClick={() => setQuantity((pre) => pre - 1)}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className=" w-10 bg-transparent text-gray-100 font-normal text-2xl text-center focus:outline-none"
                      />
                      <button
                        className="bg-green-900 text-white py-1 px-3"
                        onClick={() => setQuantity((pre) => pre + 1)}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </td>
                  <td class="px-6 py-4">$2999</td>
                  <td class="px-6 py-4 ">
                    <button className="text-red-600">X</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="shadow-md rounded-md p-3">
          <div className="shadow py-3 rounded-md px-1">
            <h3 className="text-xl"> Order Summary</h3>
          </div>
          <div className="px-1 py-2">
            <div className="flex justify-between py-2">
              <p>subtotal:</p> <p>$1234</p>
            </div>
            <div className="flex justify-between py-2">
              <p>Dalevary Charge:</p> <p>$0</p>
            </div>

            <div className="flex justify-between py-2">
              <p>Total:</p> <p>$123</p>
            </div>
            <div className="flex justify-center mt-4">
              <button className="px-6 py-2 rounded-md text-white bg-green-700">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
