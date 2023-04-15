import React from "react";
import { data } from "../../data/data.js";
import { BsFillPeopleFill } from "react-icons/bs";

const RecentOrders = () => {
  return (
    <div
      className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4
        border rounded-lg bg-slate-200 overflow-scroll"
    >
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="ng-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <BsFillPeopleFill className="text-purple-800" />
            </div>
            <div>
              <p>{order.position}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
