import React from "react";
import { data } from "../../data/data";
import { BsThreeDotsVertical, BsPersonFill } from "react-icons/bs";

const orders = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>Orders</h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Order</span>
            <span className="sm:text-left text-right"> Status</span>
            <span className="hidden md:grid">Position</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4
                sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-700" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 text-sm">
                      {order.name.first + " " + order.name.last}
                    </p>
                    <p className="text-gray-800 font-bold">
                      {order.email.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  <span
                    className={
                      order.poste == "Processing"
                        ? "bg-green-300 p-2 rounded-lg"
                        : order.poste == "Completed"
                        ? "bg-blue-500 p-2 rounded-lg"
                        : "bg-yellow-200 p-2 rounded-lg"
                    }
                  >
                    {order.poste} {/** pour la colonne status */}
                  </span>
                </p>
                <p className="hidden md:flex">{order.id}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{order.position}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
