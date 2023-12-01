import React from "react";
import { Heading } from "../../components/common/Heading/Heading";
import { setTitle } from "../../utils/setTitle";

export const Dashboard = () => {
  //set page title
  setTitle("Dashboard");
  return (
    <section>
      <Heading title="Dashboard" />
      <div className=" mt-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        <div className="bg-gray-700 text-white rounded-md text-center py-4">
          <p className="text-4xl font-semibold pb-2">3</p>
          <p className="uppercase font-semibold">Total Users</p>
        </div>
        <div className="bg-yellow-700 text-white rounded-md text-center py-4">
          <p className="text-4xl font-semibold pb-2">0</p>
          <p className="uppercase font-semibold">Feedback Messages</p>
        </div>
        <div className="bg-green-700 text-white rounded-md text-center py-4">
          <p className="text-4xl font-semibold pb-2">5</p>
          <p className="uppercase font-semibold">Notifications</p>
        </div>
        <div className="bg-red-900 text-white rounded-md text-center py-4">
          <p className="text-4xl font-semibold pb-2">10</p>
          <p className="uppercase font-semibold">Deleted Users</p>
        </div>
      </div>
    </section>
  );
};
